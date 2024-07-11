const express = require("express");

const PORT = 25000;
const beers = require("./beers.js");

const app = express();
// console.log(beers);

app.get("/", (request, response) => {
  response.send("this is my first route");
});


app.get("/beers", (request, response) => {
  response.json(beers)
})


app.get("/beer/:id", (request, response) => {
  let {id} = request.params
  response.json(beers.filter(beer => {
    return beer.id === parseInt(id)
  }))
})

app.get("/beerss/:name", (request, response) => {
  let {name} = request.params
  response.json(beers.filter(beer => {
    return beer.name === name
  }))
})


app.post


app.listen(PORT, () => {
  console.log(`user connected on port: ${PORT}`);
});