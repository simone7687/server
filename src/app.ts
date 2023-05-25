import bodyParser from "body-parser";
import express, { Express } from 'express';
import { HouseController } from "./controller/HouseController";
import { PersonController } from "./controller/PersonController";
import { House } from './models/House';
import { Person } from "./models/Person";

// env
let dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8080;

// db
var houses: { [id: string]: House } = {}
var persons: { [id: string]: Person } = {}

const app: Express = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// house
new HouseController(app, "/api/house", houses)
// person
new PersonController(app, "/api/person", persons)

app.listen(port, () => console.log(`⚡️[server]: Server is running on port ${port}!`));