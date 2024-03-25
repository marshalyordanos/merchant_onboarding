import { Address } from "../address/address"
import { Category } from "../category/category"

export class Department {
    Id: string
    Name: string
    Description: string
    Logo: string
    RegDate: Date
    Addresses: Address[]
    Categories: Category[]
    Services: Service[]
    Offers: Offer[]
    Details: Object
    CreatedAt: Date
    constructor(
        {
            id,
            name,
            description,
            logo,
            regDate,
            addresses,
            categories,
            services,
            offers,
            details,
            createdAt
        }: {
            id: string
            name: string
            description: string
            logo: string
            regDate: Date
            addresses: Address[]
            categories: Category[]
            services: Service[]
            offers: Offer[]
            details: Object
            createdAt: Date
        }) {
        this.Id = id;
        this.Name = name;
        this.Description = description;
        this.Logo = logo;
        this.RegDate = regDate;
        this.Addresses = addresses;
        this.Categories = categories;
        this.Services = services;
        this.Offers = offers;
        this.Details = details;
        this.CreatedAt = createdAt;
    }

    static fromJSON(department: Map<string, any>): Department {
        return new Department({
            id: department["id"],
            name: department["name"],
            description: department["description"],
            logo: department["logo"],
            regDate: department["reg_date"],
            addresses: department["addresses"] && (department["addresses"] as Map<string, any>[]).map((e: Map<string, any>) => Address.fromJSON(e)),
            categories: department["categories"] && department["categories"].map((e: Map<string, any>) => Category.fromJSON(e)),
            services: department["services"] && (department["services"] as Map<string, any>[]).map((e) => Service.fromJSON(e)),
            offers: department["offers"] && (department["offers"] as Map<string, any>[]).map((e: Map<string, any>) => Offer.fromJSON(e)),
            details: department["details"] /* Map later */,
            createdAt: department["created_at"],
        });
    }
}

export class Service {
    Id: string
    Name: string
    Description: string
    Categories: Category[]
    CountryWhitelist: string[]
    CountryBlacklist: string[]
    constructor(
        {
            id,
            name,
            description,
            categories,
            countryWhitelist,
            countryBlacklist,
        }: {
            id: string
            name: string
            description: string
            categories: Category[]
            countryWhitelist: string[]
            countryBlacklist: string[]
        }) {
        this.Id = id;
        this.Name = name;
        this.Description = description;
        this.Categories = categories;
        this.CountryWhitelist = countryWhitelist;
        this.CountryBlacklist = countryBlacklist;
    }

    static fromJSON(service: Map<string, any>): Service {
        return new Service({
            id: service["id"],
            name: service["name"],
            description: service["description"],
            categories:service["categories"] && service["categories"].map((e: Map<string, any>) => Category.fromJSON(e)),
            countryWhitelist: service["country_whitelist"],
            countryBlacklist: service["country_blacklist"],
        });
    }
}

export class Offer {
    Id: string
    constructor({id}:{id: string}) {
        this.Id = id;
    }

    static fromJSON(offer: Map<string, any>): Offer{
        return new Offer({
            id: offer["id"]
        });
    }
}