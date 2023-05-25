import { Express } from 'express';
import { Person, PersonRequest } from "../models/Person";
import ControllerInterface from "./ControllerInterface";

export class PersonController extends ControllerInterface<Person, PersonRequest>{
    constructor(app: Express, route: string, db: { [id: string]: Person }) {
        super(app, route, db)
    }
    newObject: (id: number, insertValue: PersonRequest) => Person = (id: number, insertValue: PersonRequest) => {
        return new Person(id, insertValue)
    }
}