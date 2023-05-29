## Download
```shell
git clone https://github.com/simone7687/server-c
```

## Installazione
```shell
npm i
```

## Come avviare l'applicazione 
```shell
npm install -g ts-node
ts-node-esm ./src/app.ts 
```

## Modelli json
House:
```json
{
    id: 0,
    name: "",
    city: "",
    address: "",
    costructionDate: null
}
```

Person:
```json
{
    id: 0,
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "",
    cityOfBirthday: "",
    dateOfBirth: null,
    idHouse: null
}
```

## Operazioni disponibili
- baseurl per house:    
  `http://localhost:5000/api/house`
- baseurl per person:    
  `http://localhost:5000/api/person`
### Ottenere un solo elemento tramite id
GET `{baseurl}/:id`
### Ottenere la lista completa
GET  `{baseurl}`
### Numerare la lista corrente
GET  `{baseurl}/enumerator`
### Aggiungere un elemento
POST  `{baseurl}`       
richiede un body con un elemento che si vuole inserire: [Modelli di esempio](#modelli-json)
### Modificare un elemento
PUT  `{baseurl}/:id`     
richiede un body con un elemento che si vuole aggiornare: [Modelli di esempio](#modelli-json)
### Eliminare un elemento
DELETE  `{baseurl}/:id`