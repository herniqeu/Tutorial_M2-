function tabuada(){
    let x = parseInt(document.getElementById("tabuada1").value);
    let y = parseInt(document.getElementById("tabuada2").value);
    let z = parseInt(document.getElementById("tabuada3").value);

    let tabuada = []
    
    for (let i = 1; i <= 10; i++){
        for (let j = 1; j <= 10; j++){
            tabuada.push(i + "X" + j)
        }
    }

    let comeca = (x-1)*10+y-1;
    let termina = (x-1)*10+z-1;
    let final = "";

    for (let i = comeca; i <= termina; i++){
        final += tabuada[i] + " , ";
    }

    document.getElementById("tabuadamostrar").innerHTML = final;

    // :)
}
//------------------------------------------------------------
function palindromo(){
    let numero = document.getElementById("numero").value;
    let boleano = true;

    tamanhoString = (numero.length-1)
    tamanhoString1 = Math.ceil(numero.length/2)

    for (let i = 0; i < tamanhoString1; i++){
        if (numero[i] != numero[tamanhoString-i]){
            boleano = false;
            break;
        }
    }

    if (boleano == true){
        final = "é palíndromo :)";
    }
    else{
        final = "não é palíndromo";
    }

    document.getElementById("resultado1").innerHTML = "O número " + final;

}
//------------------------------------------------------------
function umdoistrespi(){
    let x = parseInt(document.getElementById("numero").value);
    let maximo = Math.floor(x/3);
    let final = "";


    for (let i = 0; i < maximo; i++){
        final += (3*i+1) + "-" + (3*i+2) + "-" + (3*i+3) + " PI "; 
    }

    document.getElementById("resultado1").innerHTML = final + "";
}
//------------------------------------------------------------
function azulejo(){
    alturaParede = parseFloat(document.getElementById("alturaparede").value) * 100
    alturaAzulejo = parseFloat(document.getElementById("alturaazulejo").value)

    larguraParede = parseFloat(document.getElementById("larguraparede").value) * 100
    larguraAzulejo = parseFloat(document.getElementById("larguraazulejo").value)

    totalLargura = Math.ceil(larguraParede / larguraAzulejo) 
    totalAltura = Math.ceil(alturaParede / alturaAzulejo)

    total = (totalLargura * totalAltura)*1.05;

    document.getElementById("resultado1").innerHTML = total + "";
}

