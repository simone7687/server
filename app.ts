import bodyParser from "body-parser";
import express, { Express } from 'express';
import { House } from "./models/House";
import { Person } from "./models/Person";

const app: Express = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var houses: { [id: string]: House } = {}
var persons: { [id: string]: Person } = {}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
