import bodyParser from "body-parser";
import express, { Express } from 'express';
import { House, HouseHousePost } from "./models/House";

const app: Express = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var houses: House[] = []
var housesLastUsedId: number = 0;

// Creation of a house
app.post<string, any, House, HouseHousePost>('/house', (req, res) => {
    housesLastUsedId++

    const house = new House(
        housesLastUsedId,
        req.body?.name,
        req.body?.city,
        req.body?.address,
        req.body?.costructionDate,
    );

    houses.push(house);
    res.send(house);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
