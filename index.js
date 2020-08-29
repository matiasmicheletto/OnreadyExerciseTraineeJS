const CarDealer = require('./classes/cardealer.js');

let mCarDealer = new CarDealer();

mCarDealer.loadFromFile("./data/vehiculos.json")
    .then(function(msg){
        mCarDealer.printAll();
    })
    .catch(function(err){
        console.warn(err);
    });
