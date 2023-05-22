export interface ILocation {
    geoHash:string;
    latitude:number;
    longitude:number;

    toJSON():any
}
