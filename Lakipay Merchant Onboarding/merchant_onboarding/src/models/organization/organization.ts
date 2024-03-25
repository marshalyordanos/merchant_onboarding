import { Category } from "../category/category"
import { LegalCondition } from "../legal_condition/legal_condition"
import { Department } from "../department/department"
import { OrganizationTax } from "../tax/tax"
import { VerificationStatus } from "../verification_status/verification_status"

export class Organization {
    Id: string
    Name: string
    Description: string
    Capital: number
    RegDate: Date
    Country: string
    Category: Category
    LegalCondition: LegalCondition
    Logo: string
    Taxes: OrganizationTax[] | null
    Associates: Associate[] | null
    Departments: Department[]
    Details: Object
    Status: VerificationStatus
    CreatedAt: Date
    constructor(
        {
            id,
            name,
            description,
            capital,
            regDate,
            country,
            category,
            legalCondition,
            logo,
            taxes,
            associates,
            departments,
            details,
            status,
            createdAt
        }: {
            id: string
            name: string
            description: string
            capital: number
            regDate: Date
            country: string
            category: Category
            legalCondition: LegalCondition
            logo: string
            taxes: OrganizationTax[]
            associates: Associate[]
            departments: Department[]
            details: Object
            status: VerificationStatus
            createdAt: Date
        }) {
        this.Id = id;
        this.Name = name;
        this.Description = description;
        this.Logo = logo;
        this.Capital = capital;
        this.RegDate = regDate;
        this.Country = country;
        this.Category = category;
        this.LegalCondition = legalCondition;
        this.Taxes = taxes;
        this.Associates = associates;
        this.Departments = departments;
        this.Details = details;
        this.Status = status;
        this.CreatedAt = createdAt;
    }

    static fromJSON(organization: Map<string, any>): Organization {
        
        return new Organization({
            id: organization["id"],
            name: organization["name"],
            description: organization["description"],
            logo: organization["logo"],
            capital: organization["capital"],
            regDate: new Date(organization["reg_date"]),
            country: organization["country"],
            category: Category.fromJSON(organization["category"]),
            legalCondition: !!organization["legal_condition"] ? LegalCondition.fromJSON(organization["legal_condition"]) : null,
            taxes: organization["taxes"] && (organization["taxes"] as Map<string, any>[]).map((e) => OrganizationTax.fromJSON(e)),

            // taxes: organization["taxes"] && (organization["taxes"] as Map<string, any>[]).map((e) => OrganizationTax.fromJSON(e)),
            associates: organization["associates"] && (organization["associates"] as Map<string, any>[]).map((e) => Associate.fromJSON(e)),
            departments: organization["departments"].map((e: Map<string, any>) => Department.fromJSON(e)),
            details: organization["details"],
            status: organization["status"] && VerificationStatus.fromJSON(organization["status"]),
            createdAt: organization["created_at"]
        });
    }
}

export class Associate {
    UserId: string
    Position: string
    constructor(
        {
            userId,
            position
        }: {
            userId: string,
            position: string
        }) {
        this.UserId = userId;
        this.Position = position;
    }

    static fromJSON(associate: Map<string, any>): Associate {
        return new Associate({
            userId: associate["user_id"],
            position: associate["position"]
        });
    }
}

export class EthBusOrg {
    
    constructor(parameters) {
        
    }
}