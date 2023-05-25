export interface PersonRequest {
    firstName: string
    surname: string
    email: string
    phoneNumber: string
    cityOfBirthday: string
    dateOfBirth: Date | undefined
    idHouse: number | undefined
}

export class Person {
    constructor(id: number, value: PersonRequest) {
        this.id = id
        this.firstName = value.firstName ? value.firstName : ""
        this.surname = value.surname ? value.surname : ""
        this.email = value.email ? value.email : ""
        this.phoneNumber = value.phoneNumber ? value.phoneNumber : ""
        this.cityOfBirthday = value.cityOfBirthday ? value.cityOfBirthday : ""
        this.dateOfBirth = value.dateOfBirth ? value.dateOfBirth : new Date()
        this.idHouse = value.idHouse
    }
    id: number
    firstName: string = ""
    surname: string = ""
    email: string = ""
    phoneNumber: string = ""
    cityOfBirthday: string = ""
    dateOfBirth: Date | undefined
    idHouse: number | undefined
}