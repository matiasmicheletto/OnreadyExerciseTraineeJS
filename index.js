"use strict";

const Vehicle = require('./classes/vehicle.js');
const CarDealer = require('./classes/cardealer.js');

let mCarDealer = new CarDealer();

// Cargar lista de vehiculos e imprimir resultados de ejercicios
mCarDealer.loadFromFile("./data/vehiculos.json")
    .then(function(msg){
        exercise1();
        exercise2();
        exercise3();
    })
    .catch(function(err){
        console.warn(err);
    });


/// Ejercicios ///

function exercise1(){
    // Imprimir lista completa de vehiculos y sus atributos

    mCarDealer.list.forEach(vehicle => {
        vehicle.print(Vehicle.printFormat.LONG);
    });
}

function exercise2(){
    // Imprimir resultado de consultas

    process.stdout.write("=============================\n");
        
    process.stdout.write("Vehículo más caro: ");
    mCarDealer.sortBy("price","desc")[0].print(Vehicle.printFormat.SHORT);
    
    process.stdout.write("Vehículo más barato: ");
    mCarDealer.sortBy("price")[0].print(Vehicle.printFormat.SHORT);

    process.stdout.write("Vehículo que contiene en el modelo la letra ‘Y’: ");
    let searchResult = mCarDealer.findInList("Y")
    if(searchResult.length > 0) 
        searchResult[0].print(Vehicle.printFormat.SHORT_PRICE);
    else
        process.stdout.write("-- No se encontraron --\n");
}

function exercise3(){
    // Imprimir lista de vehiculos ordenados por precio (ejercicio opcional)

    process.stdout.write("=============================\n");

    process.stdout.write("Vehículos ordenados por precio de mayor a menor:\n");
    
    mCarDealer.sortBy("price", "desc").forEach(v=>{v.print(Vehicle.printFormat.SHORT)});
}

