export interface HouseRequest {
    name: string;
    city: string;
    address: string;
    costructionDate: Date;
}

export class House {
    constructor(id: number, value: HouseRequest) {
        this.id = id
        this.name = value.name ? value.name : ""
        this.city = value.city ? value.city : ""
        this.address = value.address ? value.address : ""
        this.costructionDate = value.costructionDate ? value.costructionDate : new Date()
    }
    id: number
    name: string = ""
    city: string = ""
    address: string = ""
    costructionDate: Date = new Date()
}