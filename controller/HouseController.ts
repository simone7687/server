import { Express } from 'express';
import { House, HouseRequest } from "../models/House";
import ControllerInterface from "./ControllerInterface";

export class HouseController extends ControllerInterface<House, HouseRequest>{
    constructor(app: Express, route: string, db: { [id: string]: House }) {
        super(app, route, db)
    }
    newObject: (id: number, insertValue: HouseRequest) => House = (id: number, insertValue: HouseRequest) => {
        return new House(id, insertValue)
    }
}