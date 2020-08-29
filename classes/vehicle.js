"use strict";

const tools = require('../tools/tools.js');

const formats = { // Formatos de impresion de atributos
    SHORT: 0,
    LONG: 1,
    SHORT_PRICE: 2
}   

class Vehicle{

    constructor(brand, model, price, doors, cc){
        this.brand = brand;
        this.model = model;
        this.price = price;
        if(doors) this.doors = doors;
        if(cc) this.cc = cc;
    }

    static get printFormat() {
        return formats;
    }

    print(format){
        // Imprime los atributos con distintos formatos

        switch(format){
            case formats.SHORT:
                tools.printAttr("", this.brand, " ");
                tools.printAttr("", this.model, "\n");
                break;
            case formats.LONG:
                tools.printAttr("Marca: ", this.brand, " // ");
                tools.printAttr("Modelo: ", this.model, " // ");
                tools.printAttr("Puertas: ", this.doors, " // ");
                tools.printAttr("Cilindrada: ", this.cc, " // ", (s)=>s+"c");
                tools.printAttr("Precio: ", this.price, "\n", tools.formatMoney);
                break;
            case formats.SHORT_PRICE:
                tools.printAttr("", this.brand, " ");
                tools.printAttr("", this.model, " ");
                tools.printAttr("", this.price, "\n", tools.formatMoney);
                break;
            default: 
                break;
        }
        
    }
}

module.exports = Vehicle;