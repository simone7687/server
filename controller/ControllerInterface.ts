import { Express } from 'express';

class GenericResult<T> {
    constructor(result: T | null, success: boolean = true, message: string = "") {
        this.result = result
        this.success = success
        this.message = message
    }
    result: T | null = null
    success: boolean = false
    message: string = ""
}

abstract class ControllerInterface<T, ValueModel> {
    constructor(app: Express, route: string, db: { [id: string]: T }) {
        this.db = db

        // get by id
        app.get<string, { id: number }, GenericResult<T>, number>(route + "/:id", (req, res) => {
            try {
                let value = this.getById(req.params.id)
                res.send(new GenericResult<T>(value))
            } catch (e) {
                res.status(500).send(this.catch<T>(e))
            }
        })
        // get list
        app.get<string, any, GenericResult<T[]>>(route, (req, res) => {
            try {
                let value = this.getList()
                res.send(new GenericResult<T[]>(value))
            } catch (e) {
                res.status(500).send(this.catch<T[]>(e))
            }
        })
        // insert
        app.post<string, any, GenericResult<T>, ValueModel>(route, (req, res) => {
            try {
                let body = req.body
                let value = this.insert(body)
                res.send(new GenericResult<T>(value))
            } catch (e) {
                res.status(500).send(this.catch<T>(e))
            }
        })
        // update
        app.put<string, { id: number }, GenericResult<T>, ValueModel>(route + "/:id", (req, res) => {
            try {
                let body = req.body
                let value = this.update(req.params.id, body)
                res.send(new GenericResult<T>(value))
            } catch (e) {
                res.status(500).send(this.catch<T>(e))
            }
        })
        // delete
        app.delete<string, { id: number }, GenericResult<boolean>, number>(route + "/:id", (req, res) => {
            try {
                let value = this.delete(req.params.id)
                res.send(new GenericResult<boolean>(value))
            } catch (e) {
                res.status(500).send(this.catch<boolean>(e))
            }
        })
    }
    persons = {};

    db: { [id: string]: T }
    private lastUsedId: number = 0

    protected newId() {
        this.lastUsedId++
        return this.lastUsedId
    }

    protected catch<Tcatch>(e: any): GenericResult<Tcatch> {
        let message = ""
        if (e instanceof Error) {
            message = e.message
        }
        return new GenericResult<Tcatch>(null, false, message)
    }

    abstract newObject: (id: number, insertValue: ValueModel) => T

    validator(value: T) {
        return true
    }

    getById(id: number): T {
        if (!this.db[id.toString()]) {
            throw new Error("Id not found")
        }
        return this.db[id.toString()]
    }

    getList(): T[] {
        return Object.values(this.db)
    }

    insert(regInsert: ValueModel): T {
        let id = this.newId()
        let value: T = this.newObject(id, regInsert)
        if (!this.validator(value)) {
            throw new Error("Invalid object")
        }
        this.db[id.toString()] = value
        return value
    }

    update(id: number, value: ValueModel): T {
        if (!this.db[id.toString()]) {
            throw new Error("Id not found")
        }
        let obj = this.newObject(id, value)
        if (!this.validator(obj)) {
            throw new Error("Invalid object")
        }
        this.db[id.toString()] = obj
        return obj
    }

    delete(id: number): boolean {
        if (!this.db[id.toString()]) {
            throw new Error("Id not found")
        }
        delete this.db[id.toString()]
        return true
    }
}

export default ControllerInterface;
