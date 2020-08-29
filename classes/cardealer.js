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
                        let v = new Vehicle(el.brand, el.model, el.price, el.doors, el.cc)
                        that.list.push(v);
                    });

                    return fulfill("Se cargaron "+that.list.length+" nuevos vehículos exitosamente!");
                }
            });    
        })
        
    }

    printAll(vehicles){
        this.list.forEach(vehicle => {
            vehicle.printInfo();
        })
    }
}

module.exports = CarDealer;