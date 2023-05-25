export class BaseModel<NewRequest> {
    constructor(id: number, value: NewRequest) {
        this.id = id
    }
    id: number
}