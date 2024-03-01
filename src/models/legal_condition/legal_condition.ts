export class LegalCondition {
    Id: string
    Name: string
    CountryWhitelist: string[]
    CountryBlacklist: string[]
    constructor({id, name, countryWhitelist, countryBlacklist}: {
        id: string,
        name: string,
        countryWhitelist: string[],
        countryBlacklist: string[]
    }) {
        this.Id = id;
        this.Name = name;
        this.CountryWhitelist = countryWhitelist;
        this.CountryBlacklist = countryBlacklist;
    }

    static fromJSON = (legalCondition: Map<string, any>) : LegalCondition => {
        return new LegalCondition({
            id: legalCondition["id"],
            name: legalCondition["name"],
            countryWhitelist: legalCondition["countryWhitelist"],
            countryBlacklist: legalCondition["countryBlacklist"],
        });
    }
}