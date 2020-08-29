"use strict";

module.exports = {

    printAttr: function(name, value, end, formatter){
        // Imprime los atributos de un objeto con formato predefinido

        if(typeof value != "undefined"){
            process.stdout.write(name);
            process.stdout.write(": ");
            if(formatter)
                process.stdout.write(formatter(value));
            else
                process.stdout.write(value.toString());
            process.stdout.write(end);
        }
    },

    formatMoney: function(number, decPlaces, decSep, thouSep) {
        // Formatea cadena de caracteres como moneda
        // fuente: https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
        
        decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
        decSep = typeof decSep === "undefined" ? "." : decSep;
        thouSep = typeof thouSep === "undefined" ? "," : thouSep;
        var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
        var j = (j = i.length) > 3 ? j % 3 : 0;

        return "$" +
            (j ? i.substr(0, j) + thouSep : "") +
            i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
            (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
    }       
}