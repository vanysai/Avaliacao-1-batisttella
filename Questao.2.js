<!DOCTYPE html>
<html lang="pt.br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>

    <link rel="icon" type="image/x-icon" href="https://i0.wp.com/sociedadejedi.com.br/wp-content/uploads/2016/03/simbolo-1.jpg">
<style>
    body {
         margin: 0;
    }

    header {
        background-color: #a05bd9;
        padding: 10px;
    }
    
    header h1 {
        text-align: center;
        color: floralwhite;
    }

</style>
</head>
<body bgcolor="#c2a0f2">
    <h1 align="center">Calculadora</h1>
    <input type="number" id="x" placeholder="Digite o valor de X">
    <br><br>
    <input type="number" id="y" placeholder="Digite o valor de Y">
    <br><br>
    <input type="number" id="z" placeholder="Resultado" readonly>
    <button type="button" onclick="somar()"> + </button>
    <button type="button" onclick="diminuir()"> - </button>
    <button type="button" onclick="multiplicar()"> * </button>
    <button type="button" onclick="dividir()"> / </button>
    <button type="button" onclick="potencia()">**</button>
    <button type="button" onclick="raize()">math(sqrt)</button>
    <button type="button" onclick="resto()">%</button>
    <br></br>
    <div>
        <button type="button" onclick="Limpar()"></button>        
    </div>
   


    <script>
        const somar = function() {
            let x = parseInt(document.getElementById('x').value); 
            let y = parseInt(document.getElementById('y').value);
            let z = document.getElementById('z');
            z.value = x + y;
        }
        const diminuir = function() {
            let x = parseInt (document.getElementById('x').value);
            let y = parseInt (document.getElementById('y').value);
            let z = document.getElementById('z');
            z.value = x - y;
        }
         
        const multiplicar= function() {
            let x = parseInt (document.getElementById('x').value);
            let y = parseInt (document.getElementById('y').value);
            let z = document.getElementById('z');
            z.value = x * y; 
        }
  
        const dividir= function() {
            let x = parseInt (document.getElementById('x').value);
            let y = parseInt (document.getElementById('y').value);
            let z = document.getElementById('z');
            z.value = x / y; 
        }
        const potencia= function() {
            let x =  parseInt (document.getElementById('x').value);
            let y =  parseInt (document.getElementById('y').value);
            let z = document.getElementById('z');
            z.value = x ** y;
        }
        const raize = function(){
            let x = parseInt (document.getElementById('x').value);
            let z = document.getElementById('z');
            z.value = Math.sqrt(x);
        } 
        const resto= function() {
            let x = parseInt (document.getElementById('x').value);
            let y = parseInt (document.getElementById('y').value);
            let z =document.getElementById('z');
            z.value = x % y;
        }
        const limpar= function() {
            document.getElementById('x').value = "limpar"
            document.getElementById('y').value = "limpar"
            document.getElementById('z').value = "limpar"
        }    
    </script>

</body>
</html>
