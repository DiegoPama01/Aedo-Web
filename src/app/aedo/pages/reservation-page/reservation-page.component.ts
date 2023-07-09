import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OdiseaService } from '../../services/models-services/odiseas.service';
import { OdiseaDto } from '../../dto/odisea.dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { OdiseaCalendarService } from '../../services/models-services/odisea-calendars.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { calendarType } from '../../interfaces/odisea-calendar.interface';
import { OdiseaCalendarDto } from '../../dto/odisea-calendar.dto';
import { Timestamp } from '@angular/fire/firestore';
import { OdiseaDatesService } from '../../services/models-services/odisea-dates.service';
import { OdiseaDates } from '../../models/odisea-dates.model';
import { ReservationService } from '../../services/models-services/reservations.service';
import { Reservation } from '../../models/reservations.model';
import { AuthenticationService } from '../../services/authentication.service';
import { onAuthStateChanged } from '@angular/fire/auth';
import { OdiseoService } from '../../services/models-services/odiseos.service';
import { OdiseoDto } from '../../dto/odiseo.dto';
import { MatDialog } from '@angular/material/dialog';
import { MaxCapacityDialogComponent } from '../../components/max-capacity-dialog/max-capacity-dialog.component';
import { Language } from '../../models/language.model';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css'],
})
export class ReservationPageComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;
  id?: string;
  odisea?: OdiseaDto;
  odiseaCalendar?: OdiseaCalendarDto;
  reservationForm?: FormGroup;
  selectedDate?: Date;
  odiseo?: OdiseoDto;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private odiseaService: OdiseaService,
    private odiseaCalendarService: OdiseaCalendarService,
    private odiseaDateService: OdiseaDatesService,
    private reservationService: ReservationService,
    private authService: AuthenticationService,
    private odiseoService: OdiseoService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    odiseaService.getById(this.id!).then((value) => {
      this.odisea = value;
    });
    onAuthStateChanged(authService.getAuth(), (usuarioFirebase) => {
      if (usuarioFirebase) {
        this.odiseoService
          .getById(usuarioFirebase.uid)
          .then((odiseo) => {
            this.odiseo = odiseo;
          })
          .catch((error) => {
            console.log('Error obtaining user: ' + error);
          });
      }
    });
  }

  ngOnInit() {
    this.reservationForm = this.formBuilder.group({
      stepOneData: this.formBuilder.group({
        idioma: ['', Validators.required],
      }),
      stepTwoData: this.formBuilder.group({
        date: ['', Validators.required],
      }),
    });
  }

  dateFilter = (date: Date | null): boolean => {
    if (
      this.odiseaCalendar?.getCalendarType() ===
      calendarType.frequencyDatesCalendar
    ) {
      const dayOfWeekMap: { [dayName: string]: number } = {
        Mon: 1,
        Tue: 2,
        Wed: 3,
        Thu: 4,
        Fri: 5,
        Sat: 6,
        Sun: 0,
      };

      const allowedDays = Object.values(
        this.odiseaCalendar.getDates()
      ) as string[]; // Convertir a array de strings
      const allowedDayNumbers = allowedDays.map(
        (dayName) => dayOfWeekMap[dayName]
      );
      return (
        date !== null &&
        date.getTime() > Date.now() &&
        allowedDayNumbers.includes(date.getDay())
      );
    } else if (
      this.odiseaCalendar?.getCalendarType() ===
      calendarType.multiplesDatesCalendar
    ) {
      const validDates: Array<string> =
        this.odiseaCalendar.getDates() as Array<string>;

      const visibleDates: Array<Date> = validDates.map(
        (dateStr: string) => new Date(dateStr)
      );

      return (
        date !== null &&
        date.getTime() > Date.now() &&
        visibleDates.includes(date)
      );
    } else if (
      this.odiseaCalendar?.getCalendarType() === calendarType.rangeDatesCalendar
    ) {
      const dateRange = this.odiseaCalendar.getDates() as {
        endDate: Timestamp;
        startDate: Timestamp;
      };

      return (
        date !== null &&
        date.getTime() > Date.now() &&
        this.isWithinRange(date, dateRange.startDate, dateRange.endDate)
      );
    } else if (
      this.odiseaCalendar?.getCalendarType() === calendarType.singleDateCalendar
    ) {
      const singleDate = this.odiseaCalendar.getDates() as Timestamp;

      const selectedDate = date !== null ? date.getTime() : null;
      const targetDate = singleDate.toMillis();

      return (
        selectedDate !== null &&
        selectedDate > Date.now() &&
        selectedDate === targetDate
      );
    }

    return false; // Valor predeterminado si no se cumple ninguna condición
  };

  isWithinRange(date: Date, startDate: Timestamp, endDate: Timestamp): boolean {
    const dateTimestamp = date.getTime();
    return (
      dateTimestamp >= startDate.toMillis() &&
      dateTimestamp <= endDate.toMillis()
    );
  }

  submitFirstForm() {
    const stepOneData = this.reservationForm?.get('stepOneData');
    if (stepOneData && stepOneData.valid) {
      this.odiseaCalendarService
        .getCollByOdiseaAndLang(this.id!, stepOneData.get('idioma')?.value.id)
        .subscribe(
          (result) => {
            this.odiseaCalendar = result;
            this.stepper?.next();
          },
          (error) => {
            // Manejar el error si ocurre
            console.error(error);
          }
        );
    }
  }

  submitSecondForm() {
    const stepTwoData = this.reservationForm?.get('stepTwoData');
    if (stepTwoData && stepTwoData.valid) {
      this.odiseaDateService
        .getOdiseaDatesByCalendar(
          this.odiseaCalendar?.getId()!,
          this.selectedDate!
        )
        .pipe(
          take(1), // Tomar solo el primer valor emitido y completar la suscripción
        )
        .subscribe(
          (result) => {
            let odiseaDate;
            if (result == undefined) {
              let timestamp = Timestamp.fromDate(this.selectedDate!);
              
              let idioma = new Language(
                this.reservationForm
                  ?.get('stepOneData')
                  ?.get('idioma')?.value.id,
                this.reservationForm
                  ?.get('stepOneData')
                  ?.get('idioma')?.value.item
              );
              let auxOdiseaDate = new OdiseaDates(
                timestamp,
                idioma,
                this.odisea?.getMaxCapacity()!,
                1,
                this.odiseaCalendar?.getId()!,
                this.odisea?.getId()!
              );
              console.log(auxOdiseaDate);

              this.odiseaDateService.create(auxOdiseaDate)
              .then((docRef) => {
                const objectId = docRef.id;
                return this.odiseaDateService.getById(objectId);
              })
              .then((odiseaDate) => {
                if (odiseaDate) {
                  let reservation = new Reservation(
                    odiseaDate.getLanguage(),
                    odiseaDate.getId(),
                    this.odiseo?.getId()!,
                    1
                  );
                  console.log(reservation);
                  this.router.navigate(['/home/main']);
                  return this.reservationService.create(reservation);
                } else {
                  console.log('Error al obtener el objeto OdiseaDate');
                  return Promise.reject('Error al obtener el objeto OdiseaDate');
                }
              })
              .catch((error) => {
                console.log('Error al crear la reserva:', error);
              });

              
            } else {              
              odiseaDate = result;

              if ((odiseaDate.getMaxCapacity() - odiseaDate.getNumReservations()) == 0){
                this.openDialog();
              }
              else{

                let reservation = new Reservation(
                  odiseaDate.getLanguage(),
                  odiseaDate.getId(),
                  this.odiseo?.getId()!,
                  1
                );
                console.log(reservation);
                this.reservationService.create(reservation);
                odiseaDate.setNumReservations(odiseaDate.getNumReservations() + 1)
                console.log(odiseaDate);
                this.odiseaDateService.update(odiseaDate);
                this.router.navigate(['/home/main']);
              }

            }
          },
          (error) => {
            // Manejar el error si ocurre
            console.error(error);
          }
        );
    }
  }
  openDialog() {
    const dialogRef = this.dialog.open(MaxCapacityDialogComponent, {
      width: '300px',
      data: 'La capacidad está completa. No se pueden hacer más reservas.',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Lógica a realizar después de cerrar el cuadro de diálogo
    });
  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    this.selectedDate = event.value!;
    console.log(this.selectedDate);
  }
}
