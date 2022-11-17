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


    console.log(combinacion[0]);
    console.log(combinacion[1]);
    console.log(combinacion[2]);
    console.log(combinacion[3]);
    console.log(combinacion[4]);
    console.log(combinacion[5]);
    
    function comparar ( a, b ){ return a - b; }
    combinacion.sort(comparar);


    document.getElementById("n1").innerHTML = combinacion[0];
    document.getElementById("n2").innerHTML = combinacion[1];
    document.getElementById("n3").innerHTML = combinacion[2];
    document.getElementById("n4").innerHTML = combinacion[3];
    document.getElementById("n5").innerHTML = combinacion[4];
    document.getElementById("n6").innerHTML = combinacion[5];

}

combinacion();