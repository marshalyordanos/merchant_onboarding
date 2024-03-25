import { VerificationStatus } from "../verification_status/verification_status"

enum TaxableEntity {
    PAYER,
    PAYEE
}

export class Tax {
    Id: string
    Name: string
    Description: string
    Rate: number
    From: TaxableEntity
    CountryWhitelist: string[]
    CountryBlacklist: string[]
    constructor(
        {
            id,
            name,
            description,
            rate,
            from,
            countryWhitelist,
            countryBlacklist
        }: {
            id: string,
            name: string,
            description: string,
            rate: number,
            from: TaxableEntity,
            countryWhitelist: string[],
            countryBlacklist: string[],
        }) {
        this.Id = id;
        this.Name = name;
        this.Description = description;
        this.Rate = rate;
        this.From = from;
        this.CountryBlacklist = countryWhitelist;
        this.CountryWhitelist = countryBlacklist;
    }

    static fromJSON(tax: Map<string, any>): Tax {
        return new Tax({
            id: tax["id"],
            name: tax["name"],
            description: tax["description"],
            rate: tax["rate"],
            from: tax["from"],
            countryWhitelist: tax["country_whitelist"],
            countryBlacklist: tax["country_blacklist"],
        });
    }
}


export class OrganizationTax {
    Tax: Tax
    File: string
    Status: VerificationStatus
    constructor(
        {
            tax,
            file,
            status
        }: {
            tax: Tax,
            file: string,
            status: VerificationStatus
        }) {
        this.Tax = tax;
        this.File = file;
        this.Status = status;
    }

    static fromJSON(orgTax: Map<string, any>): OrganizationTax {
        return new OrganizationTax({
            tax: Tax.fromJSON(orgTax["tax"]),
            file: orgTax["file"],
            status: orgTax["status"] && VerificationStatus.fromJSON(orgTax["status"])
        });
    }
}
