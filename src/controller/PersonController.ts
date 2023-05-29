import { Express } from 'express';
import { Person, PersonRequest } from "../models/Person";
import ControllerInterface from "./ControllerInterface";
import { House } from '../models/House';

export class PersonController extends ControllerInterface<Person, PersonRequest>{
    constructor(app: Express, route: string, db: { [id: string]: Person }, dbHouse: { [id: string]: House }) {
        super(app, route, db)
        this.dbHouse = dbHouse
    }

    dbHouse: { [id: string]: House }
    newObject: (id: number, insertValue: PersonRequest) => Person = (id: number, insertValue: PersonRequest) => {
        return new Person(id, insertValue)
    }
    validator(value: Person): boolean {
        // There can’t be 2 people with the same Email
        let email = value.email
        Object.values(this.db).forEach((person) => {
            if (person.email && person.email.length > 0 && person.email == email) {
                throw new Error("There can’t be 2 people with the same Email")
            }
        })
        if (value.idHouse) {
            if (!this.dbHouse[value.idHouse.toString()]) {
                throw new Error("House not found")
            }
        }
        return true
    }
}