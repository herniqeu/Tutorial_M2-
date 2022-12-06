function getValues(){
    let a = parseFloat(document.getElementById("input1").value);
    let b = parseFloat(document.getElementById("input2").value);
    let c = parseFloat(document.getElementById("input3").value);
    return [a,b,c]
}

function outputValues(x){
    document.getElementById("result").innerHTML = x;
}
//-----------------------------------------
var presentFuture = 1;

function valorPresente(){
    $("#input1p").text("Coloque o valor presente");
    var presentFuture = 1;
}

function valorFuturo(){
    $("#input1p").text("Coloque o valor futuro");
    var presentFuture = 0;
}

function calculating1(){
    list = getValues();
    let a = list[0];
    let b = list[1];
    let c = list[2];

    if (presentFuture == 1){
        outputValues(a / ( (1 + b) ** c));
    }
    else{
        outputValues(a * ( (1 + b) ** c));
    }
}
//-----------------------------------------
function calculating2(){
    list = getValues();
    let a = list[0];
    let b = list[1];
    let c = list[2];

    fees = a * b * c ;
    amount = b * (1 + c * a);
    outputValues(fees + " " + amount);
} 
//-----------------------------------------
function crazy(){
    let result = "";
    sCrazy = document.getElementById("input1").value;
    for (let i = 0; i < sCrazy.length; i++){

        result += (sCrazy[i] + "\n" + ' '.repeat(i+1) );
    }
    outputValues(result);
}
//-----------------------------------------
function binary(){
    let binary = "";
    i = parseInt(document.getElementById("input1").value);
    
    while(i > 0){
        if(i % 2 == 0){
            binary = "0" + binary;
        }
        else {
            binary = "1" + binary;
        }

        i = Math.floor(i / 2);
    }

    outputValues(binary);
}

