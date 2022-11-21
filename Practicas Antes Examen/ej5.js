function ej5() {
    let flag = false;
    let message = "Dime una palabra";
    let palabras = Array();
    while(!flag) {
        result = window.prompt(message, "");
        if (result == "" || result == null) {
            flag = true;
        }else {
            palabras.push(result);
        }
        
    }

    document.write(palabras);
}

ej5();