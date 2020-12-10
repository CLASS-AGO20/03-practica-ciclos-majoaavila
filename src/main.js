export default class App {
    factorial(numero) {
        let multiplicacion = 1;

        for(let i = 1; i <= numero; i = i + 1) {
            multiplicacion = multiplicacion * i;
        }
        
        return multiplicacion;
    }
}

let app = new App();

console.log("Probando factorial");
console.log(app.factorial(5));
