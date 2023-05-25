import express, { Express } from 'express';
import { HouseController } from "./controller/HouseController";
import { PersonController } from "./controller/PersonController";
import { House } from "./models/House";
import { Person } from "./models/Person";

var bodyParser = require('body-parser')
var houses: { [id: string]: House } = {}
var persons: { [id: string]: Person } = {}
const app: Express = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// house
new HouseController(app, "/house", houses)
// person
new PersonController(app, "/person", persons)

app.listen(port, () => console.log(`App listening on port ${port}!`));
