function insert(num){
    
    var numero = document.getElementById('textarea').innerHTML;
    console.log(numero)
    document.getElementById('textarea').innerHTML = numero + num;
}

function limpar(){
    document.getElementById('textarea').innerHTML = '';
}


function calcular(){
    var resultado = document.getElementById('textarea').innerHTML;
 
    if(resultado){
        document.getElementById('textarea').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('textarea').innerHTML = '';
    }
}
