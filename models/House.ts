import { BaseModel } from "./BaseModel";

export interface NewHouseRequest {
    name: string;
    city: string;
    address: string;
    costructionDate: Date;
}

export class House extends BaseModel<NewHouseRequest> {
    constructor(id: number, value: NewHouseRequest) {
        super(id, value)
        this.name = value.name ? value.name : ""
        this.city = value.city ? value.city : ""
        this.address = value.address ? value.address : ""
        this.costructionDate = value.costructionDate ? value.costructionDate : new Date()
    }
    name: string = ""
    city: string = ""
    address: string = ""
    costructionDate: Date = new Date()
}