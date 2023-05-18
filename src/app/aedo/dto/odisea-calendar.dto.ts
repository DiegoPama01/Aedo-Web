import { Timestamp } from '@angular/fire/firestore';
import { calendarType } from '../interfaces/odisea-calendar.interface';
import { OdiseaCalendar } from '../models/odisea-calendar.model';
import { ILanguage } from '../interfaces/language.interface';

type DateArray = Array<string>;
type DateRange = { endDate: Timestamp; startDate: Timestamp };
type DateTimestamp = Timestamp;

type DateCalendar = DateArray | DateRange | DateTimestamp;

export class OdiseaCalendarDto {
    private id: string;
    private calendarType: calendarType;
    private dates: DateCalendar
    private language: ILanguage;
    private odiseaId: string;
  
    constructor(
      id: string,
      calendarType: calendarType,
      dates: DateCalendar,
      language: ILanguage,
      odiseaId: string
    ) {
      this.id = id;
      this.calendarType = calendarType;
      this.dates = dates;
      this.language = language;
      this.odiseaId = odiseaId;
    }
  
    public getId(): string {
      return this.id;
    }
  
    public getCalendarType(): calendarType {
      return this.calendarType;
    }
  
    public setCalendarType(calendarType: calendarType): void {
      this.calendarType = calendarType;
    }
  
    public getDates():DateCalendar {
      return this.dates;
    }
  
    public setDates(dates: DateCalendar): void {
      this.dates = dates;
    }
  
    public getLanguage(): ILanguage {
      return this.language;
    }
  
    public setLanguage(language: ILanguage): void {
      this.language = language;
    }
  
    public getOdiseaId(): string {
      return this.odiseaId;
    }
  
    public setOdiseaId(odiseaId: string): void {
      this.odiseaId = odiseaId;
    }
  
    public getOdiseaCalendar(): OdiseaCalendar {
      return new OdiseaCalendar(this.calendarType, this.dates, this.language, this.odiseaId);
    }
  }