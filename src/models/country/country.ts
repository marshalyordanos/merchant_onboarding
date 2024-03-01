export class Country {
    Id: string
    Name: string
    DefaultName: string
    Iso2: string
    Flag: string

    constructor({ id, name, defaultName, iso2, flag }: { id: string, name: string, defaultName: string, iso2: string, flag: string }) {
        this.Id = id;
        this.Name = name;
        this.DefaultName = defaultName;
        this.Iso2 = iso2;
        this.Flag = flag;
    }

    static fromJSON = (country: Map<string, any>): Country => {
        return new Country({
            id: country["id"],
            name: country["name"],
            defaultName: country["default_name"],
            iso2: country["iso2"],
            flag: country["flag"]
        });
    }

}

export const CountryFlags = {
    "ET": "🇪🇹",
    "KE": "🇰🇪",
    "US": "🇺🇸",
};