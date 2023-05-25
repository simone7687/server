export class House {
    constructor(id: number, name: string, city: string, address: string, costructionDate: Date) {
        this.id = id
        this.name = name ? name : ""
        this.city = city ? city : ""
        this.address = address ? address : ""
        this.costructionDate = costructionDate ? costructionDate : new Date()
    }
    id: number
    name: string = ""
    city: string = ""
    address: string = ""
    costructionDate: Date = new Date()
}

export interface HouseHousePost {
    name: string;
    city: string;
    address: string;
    costructionDate: Date;
}