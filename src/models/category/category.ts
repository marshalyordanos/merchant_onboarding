export class Category {
    Id: string
    Name: string
    Description: string
    Icon: string
    Parents: string[]
    CountryWhitelist: string[]
    CountryBlacklist: string[]
    Options: Option[]
    Hidden: boolean

    constructor({
        id,
        name,
        description,
        icon,
        parents,
        countryWhitelist,
        countryBlacklist,
        options,
        hidden
    }: {
        id: string,
        name: string,
        description: string,
        icon: string,
        parents: string[],
        countryWhitelist: string[],
        countryBlacklist: string[],
        options: Option[],
        hidden: boolean
    }) {
        this.Id = id;
        this.Name = name;
        this.Description = description;
        this.Icon = icon;
        this.Parents = parents;
        this.CountryWhitelist = countryWhitelist;
        this.CountryBlacklist = countryBlacklist;
        this.Options = options;
        this.Hidden = hidden;
    }

    static fromJSON = (category: Map<string, any>): Category => {
        return new Category({
            id: category["id"],
            name: category["name"],
            description: category["description"],
            icon: category["icon"],
            parents: category["parents"],
            countryWhitelist: category["country_whitelist"],
            countryBlacklist: category["country_blacklist"],
            options:  category["options"] && (category["options"] as any[]).map((e: Map<string, any>) => Option.fromJSON(e)),
            hidden: category["hidden"],
        });
    }
}

export class Option {
    Id: string
    Name: string
    Description: string
    DataType: string
    RepresentedIn: string
    Values: string[]
    AllowCustomValue: boolean
    Validator: any
    constructor(
        {
            id,
            name,
            description,
            dataType,
            representedIn,
            values,
            allowCustomValue,
            validator
        }: {
            id: string,
            name: string,
            description: string,
            dataType: string,
            representedIn: string,
            values: string[],
            allowCustomValue: boolean,
            validator: any
        }) {
        this.Id = id;
        this.Name = name;
        this.Description = description;
        this.DataType = dataType;
        this.RepresentedIn = representedIn;
        this.Values = values;
        this.AllowCustomValue = allowCustomValue;
        this.Validator = validator;
    }

    static fromJSON = (option: Map<string, any>): Option => {
        return new Option({
            id: option["id"],
            name: option["name"],
            description: option["description"],
            dataType: option["data_type"],
            representedIn: option["represented_in"],
            values: (option["values"] as unknown) as string[],
            allowCustomValue: option["allow_custom_value"],
            validator: option["validator"],
        })
    }
}