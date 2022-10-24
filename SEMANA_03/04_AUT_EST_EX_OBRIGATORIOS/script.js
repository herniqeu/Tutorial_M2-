const gravidade = 10

function tempo(velocidade,gravidade){
        return velocidade / gravidade 
}

function hmax(velocidade,gravidade){
        return (velocidade ** 2)/(2*gravidade)
}
    
function tempoevelocidade(){
        velocidade = parseFloat(document.getElementById('velocidade').value)

        document.getElementById("tempo").innerHTML = "O tempo é: " + tempo(velocidade,10) 
        document.getElementById("alturamaxima").innerHTML = "A altura máxima é: " + hmax(velocidade,10)
}

function delta(a,b,c){
        return ((b**2)-4*a*c)
}
    
function xv(a,b){
            return (-b/(2*a))
}
    
function yv(a,b,c){
            return (-delta(a,b,c)/(4*a))
}
        
function valorxveyv(){
        a = parseFloat(document.getElementById('valora').value)
        b = parseFloat(document.getElementById('valorb').value)
        c = parseFloat(document.getElementById('valorc').value)
    
    
        document.getElementById("valorxv").innerHTML = "O valor de Xv é:" + xv(a,b)
        document.getElementById("valoryv").innerHTML = "O valor de Yv é:" + yv(a,b,c)
}

function FahrenheitCelsius(fahrenheit){
        return (fahrenheit-32)*(5/9)
}
    
function CelsiusFahrenheit(celsius){
        return ((celsius*(9/5)) + 32)
}
    
function celsiusf(){
        temperatura = parseFloat(document.getElementById('fname1').value)
        document.getElementById("temperaturafinal").innerHTML = CelsiusFahrenheit(temperatura)
}
    
function fahrenheitc(){
        temperatura = parseFloat(document.getElementById('temperatura').value)
        document.getElementById("temperaturafinal").innerHTML = FahrenheitCelsius(temperatura)
}

function Kwh(){
        quantidadeKwh = parseFloat(document.getElementById('Kwhconsumido').value)
        precoKwh = parseFloat(document.getElementById('unitarioKwh').value)
    
        if(quantidadeKwh > 100.0 && quantidadeKwh <= 200.0){
            var valor = ((quantidadeKwh * precoKwh) * 1.25)
        }
        else if(quantidadeKwh > 200.0){
            var valor = ((quantidadeKwh * precoKwh) * 1.5)
        }
        else{
            var valor = ((quantidadeKwh * precoKwh))
        }
        document.getElementById("valorKwh").innerHTML = "O valor é :" + valor
}
    