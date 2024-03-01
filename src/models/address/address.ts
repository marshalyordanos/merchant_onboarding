export class Address {
    Id: string
    Title: string
    Phones: string[]
    Emails: string[]
    Websites: string[]
    Locations: Location[]
    constructor(
        {
            id,
            title,
            phones,
            emails,
            websites,
            locations
        }: {
            id: string
            title: string
            phones: string[]
            emails: string[]
            websites: string[]
            locations: Location[]
        }) {
        this.Id = id;
        this.Title = title;
        this.Phones = phones;
        this.Emails = emails;
        this.Websites = websites;
        this.Locations = locations;
    }

    static fromJSON(address: Map<string, any>): Address{
        return new Address({
            id: address["id"],
            title: address["title"],
            phones: address["phones"],
            emails: address["emails"],
            websites: address["websites"],
            locations: address["locations"].map((e: Map<string, any>) => Location.fromJSON(e))
        });
    }
}

enum LocationType {
    GEO,
    RELATIVE,
    LOCAL,
}

export class Location {
    Type: LocationType
    Details: Object
    constructor(
        {
            type,
            details
        }: {
            type: LocationType,
            details: Object
        }) {
        this.Type = type;
        this.Details = details;
    }

    static fromJSON(location: Map<string, any>): Location {
        return new Location({
            type: location["type"],
            details: (() => { 
                switch (location["type"]) {
                    case LocationType.GEO:
                        return GeoLocation.fromJSON(location["details"]);                
                    default:
                        return null;
                }
             })()
        });
    }
}

export class GeoLocation {
    Lat: number
    Lng: number
    constructor(
        {
            lat,
            lng
        }: {
            lat: number,
            lng: number
        }) {
        this.Lat = lat;
        this.Lng = lng;
    }

    static fromJSON(location: Map<string, any>): GeoLocation {
        return new GeoLocation({
            lat: location["lat"],
            lng: location["lng"]
        });
    }
}
