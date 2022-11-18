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

function generacionCombinacion() {
    // .setAttribute('value','My default value');
    let arr = combinacion();
    arr = ordenarArr(arr);
    console.log(arr);
    document.getElementById('num1').value=arr[0];
    document.getElementById('num2').value=arr[1];
    document.getElementById('num3').value=arr[2];
    document.getElementById('num4').value=arr[3];
    document.getElementById('num5').value=arr[4];
    document.getElementById('num6').value=arr[5];
}

function nCombinaciones(num) {
    for (let i = 0; i < num; i++) {
        let arr = combinacion();
        arr = ordenarArr(arr);
        console.log(arr);
        document.write("<div class='combinacion'>");
        document.write("<p>c1 <input type='number' value='"+ arr[0] + "'>" +
        "<input type='number' value='"+ arr[1] + "'>" +
        "<input type='number' value='"+ arr[2] + "'>" +
        "<input type='number' value='"+ arr[3] + "'>" +
        "<input type='number' value='"+ arr[4] + "'>" +
        " <input type='number' value='"+ arr[5] + "'>" +"</p>"+
        "<input type='button' value='Elegir' onclick='insertarValores("+ arr+")'>");
        document.write("</div>");
    }
}

function insertarValores(a1,a2,a3,a4,a5,a6){
    //
    document.getElementById('num1').value=a1;
    document.getElementById('num2').value=a2;
    document.getElementById('num3').value=a3;
    document.getElementById('num4').value=a4;
    document.getElementById('num5').value=a5;
    document.getElementById('num6').value=a6;
}

function comprobarResultado(){
    let comGanadora = combinacion();
    comGanadora = ordenarArr(comGanadora);
    let arr = [document.getElementById('num1').value,document.getElementById('num2').value,document.getElementById('num3').value,document.getElementById('num4').value,document.getElementById('num5').value,document.getElementById('num6').value];
    arr = ordenarArr(arr);
    let win = true;
    for (let i = 0; i < comGanadora.length && win == true; i++) {
        if (!(win[i] == arr[i])) {
            win = false;
        }
        
    }

    if (win) {
        document.getElementById("combinacionGanadora").innerHTML = "La combinacion ganadora es: " + comGanadora[0] + "," + comGanadora[1] + "," + comGanadora[2] + "," + comGanadora[3] + "," + comGanadora[4] + "," + comGanadora[5] + ".";
        document.getElementById("tuCombinacion").innerHTML = "La combinacion apostada es: " + arr[0] + "," + arr[1] + "," + arr[2] + "," + arr[3] + "," + arr[4] + "," + arr[5] + ".";
        document.getElementById("resolucion").innerHTML = "Has Ganado. Enhorabuena."
    }else {
        document.getElementById("combinacionGanadora").innerHTML = "La combinacion ganadora es: " + comGanadora[0] + "," + comGanadora[1] + "," + comGanadora[2] + "," + comGanadora[3] + "," + comGanadora[4] + "," + comGanadora[5] + ".";
        document.getElementById("tuCombinacion").innerHTML = "La combinacion apostada es: " + arr[0] + "," + arr[1] + "," + arr[2] + "," + arr[3] + "," + arr[4] + "," + arr[5] + ".";
        document.getElementById("resolucion").innerHTML = "Has Perdido. Intentelo de nuevo...."
    }
}

function ordenarArr(arr) {
    return arr.sort(function(a, b){return a-b});
}

nCombinaciones(50);

