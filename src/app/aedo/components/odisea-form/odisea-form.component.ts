import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Category } from '../../models/category.model';
import { CategoryDto } from '../../dto/category.dto';
import { CategoryService } from '../../services/models-services/category.service';
import { geohashForLocation } from 'geofire-common';
import { ImagesService } from '../../services/models-services/images.service';
import { Language } from '../../models/language.model';
import { LanguageDto } from '../../dto/language.dto';
import { LanguageService } from '../../services/models-services/languages.service';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatStepper } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { Odisea } from '../../models/odisea.model';
import { OdiseaService } from '../../services/models-services/odiseas.service';
import { OdiseaCalendar } from '../../models/odisea-calendar.model';
import { OdiseaCalendarService } from '../../services/models-services/odisea-calendars.service';
import { calendarType } from '../../interfaces/odisea-calendar.interface';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

interface LanguageInfo {
  language: string;
  dateType: string;
  date?: any;
}

@Component({
  selector: 'app-odisea-form',
  templateUrl: './odisea-form.component.html',
  styleUrls: ['./odisea-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OdiseaFormComponent implements OnInit {
  categoryList: CategoryDto[] = [];
  languageList: LanguageDto[] = [];
  selectedCategoryList: Category[] = [];
  selectedLanguageList: Language[] = [];
  selectedLocation: any;
  firstStepForm: FormGroup;
  secondStepForm: FormGroup;
  thirdStepForm: FormGroup;
  fourthStepForm: FormGroup;
  selectedCalendarType: string = 'frecuencia';
  selectedLanguage?: string;
  selectedDateType?: string;
  dateSpecifications: any[] = [];
  startDate?: Date;
  endDate?: Date;
  today: Date = new Date();
  selectedDate: any = new Date();
  @ViewChild(MatStepper) stepper!: MatStepper;
  @ViewChildren(
    'lunesCheckbox, martesCheckbox, miercolesCheckbox, juevesCheckbox, viernesCheckbox, sabadoCheckbox, domingoCheckbox'
  )
  checkboxes?: QueryList<MatCheckbox>;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  selectedLanguages: LanguageInfo[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private languageService: LanguageService,
    private imageService: ImagesService,
    private odiseaService: OdiseaService,
    private odiseaCalendarService: OdiseaCalendarService,
    private authService: AuthenticationService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.firstStepForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      capacity: ['10', [Validators.required, Validators.min(1)]],
      tags: ['', Validators.required],
      languages: ['', Validators.required],
      price: ['0'],
    });

    this.secondStepForm = this.formBuilder.group({
      location: ['', Validators.required],
    });

    this.thirdStepForm = this.formBuilder.group({
      images: ['', Validators.required],
    });

    this.fourthStepForm = this.formBuilder.group({
      start: [''],
      end: [''],
    });
  }

  saveDate() {
    let index = this.selectedLanguages.findIndex(
      (language) => language.language === this.selectedLanguage
    );
    this.selectedLanguages[index].dateType = this.selectedCalendarType!;

    if (this.selectedCalendarType === 'frecuencia') {
      const frequencyDate: any = {
        Mon: false,
        Tue: false,
        Wed: false,
        Thu: false,
        Fri: false,
        Sat: false,
        Sun: false,
      };

      this.checkboxes
        ?.filter((checkbox) => checkbox.checked)
        .forEach((checkbox) => {
          frequencyDate[checkbox._elementRef.nativeElement.id] = true;
        });

      this.selectedLanguages[index].date = frequencyDate;
    } else if (this.selectedCalendarType === 'fechas-especificas') {
      this.selectedLanguages[index].date = this.selectedDate!;
    } else {
      console.log('3');
      const startDate = this.range.get('start')?.value;
      const endDate = this.range.get('end')?.value;
      this.selectedDate = { startDate, endDate };
      this.selectedLanguages[index].date = this.selectedDate!;
    }

    console.log(this.selectedLanguages);
  }

  isNextButtonDisabled(): boolean {
    return this.selectedLanguages.some((language) => !language.date);
  }

  onDateSelected(date: string) {
    console.log('Fecha seleccionada:', date);
    this.selectedDate = new Date(date);
  }

  getSelectedCheckboxes(): MatCheckbox[] {
    return this.checkboxes!.filter((checkbox) => checkbox.checked);
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadLanguages();
  }

  private loadCategories(): void {
    this.categoryService
      .getCollection()
      .subscribe((categories: CategoryDto[]) => {
        this.categoryList = categories;
      });
  }

  private loadLanguages(): void {
    this.languageService
      .getCollection()
      .subscribe((languages: LanguageDto[]) => {
        this.languageList = languages;
      });
  }

  categorySelected(category: CategoryDto) {
    const index = this.selectedCategoryList.indexOf(category.getCategory());
    if (index !== -1) {
      this.selectedCategoryList.splice(index, 1);
    } else {
      this.selectedCategoryList.push(category.getCategory());
    }
  }

  languageSelected(language: LanguageDto) {
    const index = this.selectedLanguageList.findIndex(
      (item) => item === language.getLanguage()
    );
    if (index !== -1) {
      this.selectedLanguageList.splice(index, 1);
      this.selectedLanguages.splice(index, 1);
    } else {
      this.selectedLanguageList.push(language.getLanguage());
      this.selectedLanguages.push({
        language: language.getLanguage().item,
        dateType: '',
        date: undefined,
      });
    }
  }

  private listCategories: Observable<CategoryDto[]> =
    this.categoryService.getCollection();
  private listLanguages: Observable<LanguageDto[]> =
    this.languageService.getCollection();

  public getCategoryList(): Observable<CategoryDto[]> {
    return this.listCategories;
  }

  public getLanguageList(): Observable<LanguageDto[]> {
    return this.listLanguages;
  }

  onlyNumber(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  markerSelected(marker: any) {
    this.selectedLocation = {
      lat: marker.getLatLng().lat,
      lon: marker.getLatLng().lng,
    };
  }

  submitFirstForm() {
    this.firstStepForm.get('tags')!.setValue(this.selectedCategoryList);
    this.firstStepForm.get('languages')!.setValue(this.selectedLanguageList);
    if (this.firstStepForm.get('price')!) {
      this.firstStepForm.get('price')!.setValue(0);
    }
    if (this.firstStepForm.valid) {
      this.stepper.next();
    } else {
      console.log('Por favor, completa todos los campos requeridos');
    }
  }

  submitSecondForm() {
    this.secondStepForm.get('location')!.setValue(this.selectedLocation);
    if (this.secondStepForm.valid) {
      this.stepper.next();
    } else {
      console.log('Por favor, completa todos los campos requeridos');
    }
  }

  selectedFiles: any[] = [];

  handleFileInput(event: any) {
    const files = event.target.files;
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFiles.push(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  submitThirdForm() {
    this.thirdStepForm.get('images')!.setValue(this.selectedFiles);
    console.log(this.selectedFiles)
    if (this.thirdStepForm.valid) {
      this.stepper.next();
    } else {
      console.log('Por favor, completa todos los campos requeridos');
    }
  }

  submitFourthForm() {
    if (this.fourthStepForm.valid) {
      this.stepper.next();
    } else {
      console.log('Por favor, completa todos los campos requeridos');
    }
  }

  removeFile(index: number) {
    this.selectedFiles.splice(index, 1);
  }

  submitAll() {
    let uid = this.authService.getUid();
    let odiseaId: string;

    let languageList: Language[] = this.firstStepForm.get('languages')?.value;

    let categoryList: Category[] = this.firstStepForm.get('tags')?.value;
    let arrayCategory = categoryList.map((category) => category.getName());

    let { lat, lon } = this.secondStepForm.get('location')?.value;
    let geohash = geohashForLocation([lat, lon]);
    let odiseaLocation = { latitude: lat, longitude: lon, geohash: geohash };

    let odisea: Odisea = new Odisea(
      this.firstStepForm.get('description')?.value,
      [],
      languageList,
      this.firstStepForm.get('capacity')?.value,
      this.firstStepForm.get('name')?.value,
      0,
      0,
      uid,
      arrayCategory,
      odiseaLocation,
      this.firstStepForm.get('price')?.value
    );

    this.odiseaService.create(odisea).then((docRef) => {
      odiseaId = docRef.id;
      console.log('Odisea guardada con ID:', odiseaId);

      this.thirdStepForm
        .get('images')
        ?.value!.forEach(async (image: any, index: number) => {
          const imageUrl = await this.imageService.uploadImage(
            odiseaId + '/L' + index,
            image
          );
          const odiseaDto = await this.odiseaService.getById(odiseaId);
          odiseaDto.setImage([
            ...odiseaDto.getImage(),
            { assetId: odiseaId + '/L' + index },
          ]);
          console.log(odiseaDto.getLanguages())
          await this.odiseaService.update(odiseaDto);
          console.log("Se hizo update")
        });

      this.selectedLanguages.forEach((language) => {
        let type: calendarType;
        let dates: any;
        let odiseaLang = new Language(
          language.language.split(' ')[0].toUpperCase(),
          language.language
        );

        if (language.dateType === 'frecuencia') {
          type = calendarType.frequencyDatesCalendar;
          dates = Object.entries(language.date)
            .filter(([day, value]) => value === true)
            .map(([day, value]) => day);
        } else if (language.dateType === 'fecha-especifica') {
          type = calendarType.singleDateCalendar;
          dates = language.date;
        } else {
          type = calendarType.rangeDatesCalendar;
          dates = language.date;
        }
        let calendar = new OdiseaCalendar(type, dates, odiseaLang, odiseaId);
        this.odiseaCalendarService.create(calendar);
      });
    });

    this.snackBar.open('Todo ha sido guardado', 'Cerrar');
    this.router.navigate(['/home']);
  }
}
