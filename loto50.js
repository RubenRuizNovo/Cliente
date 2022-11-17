function combinacion() {
    let numerosArrays = [];
    let numero;
    let combinacion = [];

    for (let i = 0; i < 6; i++) {
        
        flag = false;
        do {
            numero = Math.floor(Math.random() * (49 - 1) + 1);
            if (!numerosArrays.includes(numero)) {
                combinacion.push(numero);
                numerosArrays.push(numero);
                flag = true;
            }
        } while (!flag);
    }
    return combinacion;
}

function nCombinaciones(num) {
    for (let i = 0; i < num; i++) {
        let arr = combinacion();
        document.write("<h4 class='com'> Combinacion " + (i+1) + "</h4>");
        document.write("<div class='combinacion'>");
        document.write("<p> Numero 1: <input type='number' value='"+ arr[0] + "'>" +
        " Numero 2: <input type='number' value='"+ arr[1] + "'>" +
        " Numero 3: <input type='number' value='"+ arr[2] + "'>" +
        " Numero 4: <input type='number' value='"+ arr[3] + "'>" +
        " Numero 5: <input type='number' value='"+ arr[4] + "'>" +
        " Numero 6: <input type='number' value='"+ arr[5] + "'>" +"</p>");
        document.write("</div>");
    }
}

nCombinaciones(50);