/**
 * Represents a location.
 * @interface
 */
export interface ILocation {
  /** The geohash of the location. */
  geoHash: string;
  /** The latitude coordinate of the location. */
  latitude: number;
  /** The longitude coordinate of the location. */
  longitude: number;

  /**
   * Converts the location to a JSON object.
   * @returns {any} The JSON representation of the location.
   */
  toJSON(): any;
}
