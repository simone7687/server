import { Express, Request } from 'express';

// * Si poteva rendere il db un parametro generico
// * ed implementare i metodi CRUD in modo generico
// * ma non l'ho fatto per facilitare la lettura del array durante il debug

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

abstract class ControllerInterface<T, InsertReq> {
    constructor(app: Express, route: string, db: { [id: string]: T }) {
        this.db = db

        // get by id
        app.get<string, any, GenericResult<T>, number>(route + "/:id", (req, res) => {
            try {
                let value = this.getById(req)
                res.send(new GenericResult<T>(value))
            } catch (e) {
                let value = new GenericResult<T>(null, false, e?.toString())
                res.status(500).send(value)
            }
        })
        // get list
        app.get<string, any, GenericResult<T[]>>(route, (req, res) => {
            try {
                let value = this.getList(req)
                res.send(new GenericResult<T[]>(value))
            } catch (e) {
                let value = new GenericResult<T[]>([], false, e?.toString())
                res.status(500).send(value)
            }
        })
        // insert
        app.post<string, any, GenericResult<T>, InsertReq>(route, (req, res) => {
            try {
                let value = this.insert(req)
                res.send(new GenericResult<T>(value))
            } catch (e) {
                let value = new GenericResult<T>(null, false, e?.toString())
                res.status(500).send(value)
            }
        })
        // update
        app.put<string, any, GenericResult<T>, T>(route, (req, res) => {
            try {
                let value = this.update(req)
                res.send(new GenericResult<T>(value))
            } catch (e) {
                let value = new GenericResult<T>(null, false, e?.toString())
                res.status(500).send(value)
            }
        })
        // delete
        app.delete<string, any, GenericResult<boolean>, number>(route + "/:id", (req, res) => {
            try {
                let value = this.delete(req)
                res.send(new GenericResult<boolean>(value))
            } catch (e) {
                let value = new GenericResult<boolean>(false, false, e?.toString())
                res.status(500).send(value)
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
    abstract newObject: (id: number, insertValue: InsertReq) => T

    validator(value: T) {
        return true
    }

    abstract getById: (req: Request<any, GenericResult<T>, number>) => T
    abstract getList: (req: Request) => T[]

    insert(req: Request<any, GenericResult<T>, InsertReq>): T {
        let body: InsertReq = req.body
        let id = this.newId()
        let value: T = this.newObject(id, body)
        this.db[id.toString()] = value
        return value
    }

    abstract update: (req: Request<any, GenericResult<T>, T>) => T
    abstract delete: (req: Request<any, GenericResult<boolean>, number>) => boolean
}

export default ControllerInterface;
