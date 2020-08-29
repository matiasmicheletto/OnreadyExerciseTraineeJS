"use strict";

const Vehicle = require('./vehicle.js');
const fs = require('fs');

class CarDealer {
    
    constructor(){
        this.list = [];
    }
    
    loadFromFile(path){
        // Carga una lista de vehiculos desde un archivo local

        let that = this;
        return new Promise(function(fulfill, reject){
            fs.readFile(path, (err, data) => {
                if (err)
                    return reject("El archivo \""+path+"\" no se encontró!");
                else{
                    let objList = JSON.parse(data);

                    objList.forEach(el => {
                        let vehicle = new Vehicle(el.brand, el.model, el.price, el.doors, el.cc)
                        that.list.push(vehicle);
                    });

                    return fulfill("Se cargaron "+that.list.length+" nuevos vehículos exitosamente!");
                }
            });    
        })
        
    }

    printAll(vehicles){
        // Imprime lista de vehiculos en formato largo

        this.list.forEach(vehicle => {
            vehicle.print(Vehicle.printFormat.LONG);
        });
    }

    findInList(key){
        // Busca la clave "key" entre todos los atributos y devuelve la lista de matches

        let result = [];

        this.list.forEach(vehicle => {
            for(var attr in vehicle){
                if(vehicle[attr].toString().includes(key))
                    result.push(vehicle);
            }
        });

        return result;
    }

    sortBy(key, desc){
        // Ordena la lista de vehiculos por clave "key"

        if(desc == "desc")
            return this.list.sort((a, b) => (a[key] < b[key]) ? 1 : -1);
        else
            return this.list.sort((a, b) => (a[key] > b[key]) ? 1 : -1);
    }
}

module.exports = CarDealer;