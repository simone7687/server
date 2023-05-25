import express, { Express, Request, Response } from 'express';
import { House } from "./models/House";

const app: Express = express();
const port = 3000;

var houses: House[] = []

// Creation of a house or a person
app.post('/houses', (req: Request, res: Response) => {
    let house = new House(1, "House 1", "City 1", "Address 1", new Date())
    houses.push(house)
    res.send(house)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
