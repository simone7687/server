export class House {
    constructor(id: number, name: string, city: string, address: string, costructionDate: Date) {
        this.id = id
        this.name = name
        this.city = city
        this.address = address
        this.costructionDate = costructionDate
    }
    id: number
    name: string = ""
    city: string = ""
    address: string = ""
    costructionDate: Date = new Date()
}