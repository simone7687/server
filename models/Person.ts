export class Person {
    constructor(id: number, firstName: string, surname: string, email: string, phoneNumber: string, cityOfBirthday: string, dateOfBirth: Date, idHouse: number) {
        this.id = id
        this.firstName = firstName
        this.surname = surname
        this.email = email
        this.phoneNumber = phoneNumber
        this.cityOfBirthday = cityOfBirthday
        this.dateOfBirth = dateOfBirth
        this.idHouse = idHouse
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