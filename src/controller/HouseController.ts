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
    validator(value: House): boolean {
        // There can’t be 2 houses with the same City + Address
        let city = value.city
        let address = value.address
        Object.values(this.db).forEach((house) => {
            if (house.city == city && house.address == address) {
                throw new Error("There can’t be 2 houses with the same City + Address")
            }
        })
        return true
    }
}