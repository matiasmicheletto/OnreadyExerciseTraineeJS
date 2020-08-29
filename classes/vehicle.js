"use strict";

const tools = require('../tools/tools.js');

class Vehicle{

    constructor(brand, model, price, doors, cc){
        this.brand = brand;
        this.model = model;
        this.price = price;
        if(doors) this.doors = doors;
        if(cc) this.cc = cc;
    }

    printInfo(){ 
        // Imprime todos los atributos

        tools.printAttr("Marca", this.brand, " // ");
        tools.printAttr("Modelo", this.model, " // ");
        tools.printAttr("Puertas", this.doors, " // ");
        tools.printAttr("Cilindrada", this.cc, " // ", (s)=>s+"c");
        tools.printAttr("Precio", this.price, "\n", tools.formatMoney);
    }
}

module.exports = Vehicle;