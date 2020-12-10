export default class App {

    factorial(numero) {
        let multiplicacion = 1;

        for(let i = 1; i <= numero; i = i + 1) {
            multiplicacion = multiplicacion * i;
        }
        return multiplicacion;
    }


    convertirAString(numero) {
        let i = 1;
        let string = "";

        while(i <= numero) {
            string = string + "*";
            i ++;

        }
        return string;
    }

    obtenerDivisibles(numero) {
        let i = 1;
        let divisible = 0;

        do{
            if(numero % i === 0) {
                divisible ++;
                i ++;

            } else {
                i ++;
            }

        }
        while(i <= numero);
        return divisible;
    }

    elevar(numero, potencia) {
        let i = 1;
        let total = 1;

        while(i <= potencia) {
            total = total * numero;
            i ++;
        }
        return total;


        
        
        
}
}

let app = new App();

console.log("Probando factorial");
console.log(app.factorial(5));

console.log("Probando convertirAString");
console.log(app.convertirAString(5));

console.log("Probando obtenerDivisibles");
console.log(app.obtenerDivisibles(6));

console.log("Probando elevar");
console.log(app.elevar(3, 4));






