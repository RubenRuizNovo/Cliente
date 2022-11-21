function parImpar(num) {
    if (num%2 == 0) {
        document.getElementById("p1").innerHTML = "El num introducido es par.";
    }else {
        document.getElementById("p1").innerHTML = "El num introducido es impar.";
    }
    return;
}

function parImparAleatorio() {
    let num;
    for (let index = 0; index < 500; index++) {
        num = Math.floor(Math.random() * (10000 - 1) + 1);
        if (num%2 == 0) {
            document.getElementById("p1").innerHTML += "El num "+ num +" es par.<br>";
        }else {
            document.getElementById("p1").innerHTML += "El num "+ num +" es impar.<br>";
        }
        
    }
    
    return;
}

function crearTabla() {
    document.write("<table><tr><td>1</td><td>2</td><td>3</td></tr><tr><td>4</td><td>5</td><td>6</td></tr></table>");
}

function crearTablaParametros(filas,columnas) {
    if (typeof filas == "undefined") {
        filas = 10;
    }
    if (typeof columnas == "undefined") {
        columnas = 4;
    }
    document.write("<table>");
    for (let index = 0; index < filas; index++) {
        document.write("<tr>");
        for (let index = 0; index < columnas; index++) {
            document.write("<td>Col</td>");
        }
        document.write("</tr>");
        
    }
    document.write("</table>");
}

function tablaConBorde(filas,columnas,color) {
    if (typeof color == "undefined") {
        color = "black";
    }
    
    document.write("<table style='border:"+color+" 3px solid'>");
    for (let index = 0; index < filas; index++) {
        document.write("<tr style='border: "+color+" 1px solid'>");
        for (let index = 0; index < columnas; index++) {
            document.write("<td style='border: "+color+" 1px solid'>Col</td>");
        }
        document.write("</tr>");
        
    }
    document.write("</table>");
}

function tablaConBordeColapse(filas,columnas,color) {
    if (typeof color == "undefined") {
        color = "black";
    }
    document.write("<table style='width: 100%; border:"+color+" 3px solid'>");
    for (let index = 0; index < filas; index++) {
        document.write("<tr style='border: "+color+" 1px solid'>");
        for (let index = 0; index < columnas; index++) {
            document.write("<td style='border: "+color+" 1px solid'>Col</td>");
        }
        document.write("</tr>");
        
    }
    document.write("</table>");
}

function tabla5() {
    let columnas = 4;
    let filas = 10;

    document.write("<table style='border: black 1px solid'>");
    for (let index = 0; index < filas; index++) {
        document.write("<tr>");
        for (let index = 0; index < columnas; index++) {
            document.write("<td>Col</td>");
        }
        document.write("</tr>");
        
    }
    document.write("</table>");
}

function tabla6() {
    let columnas = 10;
    let filas = 20;

    document.write("<table style='border: black 1px solid'>");
    for (let index = 0; index < filas; index++) {
        document.write("<tr>");
        for (let index = 0; index < columnas; index++) {
            document.write("<td>Col</td>");
        }
        document.write("</tr>");
        
    }
    document.write("</table>");
}

function tabla7() {
    for (let index = 0; index < 10; index++) {
        tablaConBorde(5,4);
        document.write("<br>")
        
    }
}

function primo(num) {
    // Casos especiales
	if (num == 0 || num == 1 || num == 4) return false;
	for (let x = 2; x < num / 2; x++) {
		if (num % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}

function esPrimo(num) {
    if(primo(num)){
        document.write(num + " es primo");
    }else {
        document.write(num + " no es primo");
    }
}

function primos10000() {
    for (let index = 1; index <= 10000; index++) {
        if(primo(index)){
            document.write(index + " es primo <br>");
        }
        
    }
}

function factorialRecursivo(num) {
    if (num == 0) {
        return 1;
    } else {
        return num*factorial(num - 1);
    }
}

function factorial(num) {
    let factorial = 1;
    while (num != 0) {
        
        factorial = factorial * num;
        num--;
    }
    return factorial;
}

// parImpar(7);
//parImparAleatorio();
// crearTabla();
// crearTablaParametros(3,2);
// tablaConBordeC(2,3,"blue");
// tablaConBordeColapse(2,3,"blue");
// tabla7();
// primos10000();
document.write("El factorial es: " + factorial(5));
