import { Timestamp } from '@angular/fire/firestore';
import { calendarType } from '../interfaces/odisea-calendar.interface';
import { OdiseaCalendar } from '../models/odisea-calendar.model';
import { ILanguage } from '../interfaces/language.interface';

type DateArray = Array<string>;
type DateRange = { endDate: Timestamp; startDate: Timestamp };
type DateTimestamp = Timestamp;

type DateCalendar = DateArray | DateRange | DateTimestamp;
/**
 * OdiseaCalendarDto represents a data transfer object for an Odisea calendar.
 * It contains the properties related to an Odisea calendar.
 */
export class OdiseaCalendarDto {
  private id: string;
  private calendarType: calendarType;
  private dates: DateCalendar;
  private language: ILanguage;
  private odiseaId: string;

  /**
   * Constructs a new OdiseaCalendarDto object.
   * @param id The id of the Odisea calendar.
   * @param calendarType The type of the calendar.
   * @param dates The dates of the calendar.
   * @param language The language of the calendar.
   * @param odiseaId The id of the Odisea associated with the calendar.
   */
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

  /**
   * Gets the id of the Odisea calendar.
   * @returns The id of the Odisea calendar.
   */
  public getId(): string {
    return this.id;
  }

  /**
   * Gets the type of the calendar.
   * @returns The type of the calendar.
   */
  public getCalendarType(): calendarType {
    return this.calendarType;
  }

  /**
   * Sets the type of the calendar.
   * @param calendarType The new type for the calendar.
   */
  public setCalendarType(calendarType: calendarType): void {
    this.calendarType = calendarType;
  }

  /**
   * Gets the dates of the calendar.
   * @returns The dates of the calendar.
   */
  public getDates(): DateCalendar {
    return this.dates;
  }

  /**
   * Sets the dates of the calendar.
   * @param dates The new dates for the calendar.
   */
  public setDates(dates: DateCalendar): void {
    this.dates = dates;
  }

  /**
   * Gets the language of the calendar.
   * @returns The language of the calendar.
   */
  public getLanguage(): ILanguage {
    return this.language;
  }

  /**
   * Sets the language of the calendar.
   * @param language The new language for the calendar.
   */
  public setLanguage(language: ILanguage): void {
    this.language = language;
  }

  /**
   * Gets the id of the Odisea associated with the calendar.
   * @returns The id of the Odisea associated with the calendar.
   */
  public getOdiseaId(): string {
    return this.odiseaId;
  }

  /**
   * Sets the id of the Odisea associated with the calendar.
   * @param odiseaId The new id for the Odisea associated with the calendar.
   */
  public setOdiseaId(odiseaId: string): void {
    this.odiseaId = odiseaId;
  }

  /**
   * Converts the OdiseaCalendarDto object to an OdiseaCalendar object.
   * @returns A new OdiseaCalendar object with the same properties as the OdiseaCalendarDto.
   */
  public getOdiseaCalendar(): OdiseaCalendar {
    return new OdiseaCalendar(
      this.calendarType,
      this.dates,
      this.language,
      this.odiseaId
    );
  }
}
