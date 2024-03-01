
export class VerificationStatus {
    Id: string
    Verified: boolean
    Status: string
    Message: string
    constructor(
        {
            id,
            verified,
            status,
            message
        }: {
            id: string,
            verified: boolean,
            status: string,
            message: string
        }) {
        this.Id = id;
        this.Verified = verified;
        this.Status = status;
        this.Message = message;
    }

    static fromJSON(verificationStatus: Map<string, any>): VerificationStatus {
        return new VerificationStatus({
            id: verificationStatus["id"],
            verified: verificationStatus["verified"],
            status: verificationStatus["status"],
            message: verificationStatus["message"]
        });
    }
}