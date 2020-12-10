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
}

let app = new App();

console.log("Probando factorial");
console.log(app.factorial(5));

console.log("Probando convertirAString");
console.log(app.convertirAString(5));


