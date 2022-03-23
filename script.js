function insert(num){
    /*Observação: quando o usuário clicar em um número qualquer e se clicar em outro número, ele vai excluir o número anterior.
    
        Vamos criar uma concatenação entre os números,
    
    Para isso, vamos precisar armazenas os números digitados em algum lugar como uma variável

    */
    var numero = document.getElementById('textarea').innerHTML;
    console.log(numero)
    /*Estamos selecionando o elemento Html e estamos alterando o valor dentro do elemento html atráves do innerHtml*/
    /*O valor alterado dentro do textarea é a concatenação do valor dentro da variável e dá função*/
    document.getElementById('textarea').innerHTML = numero + num;
}



/*Vamos Criar uma função para que quando o usuário clicar no botão "C" ele limpe a tela*/
/*Não use a função com name "clear" pois ocorre conflito com o html, use "clean" para limpar */
function limpar(){
    /*Vamos apenas alterar o valor para 'vazio/nada' que a finalidade é a mesma*/
    document.getElementById('textarea').innerHTML = '';
}




function calcular(){
    var resultado = document.getElementById('textarea').innerHTML;
    /*se tiver coisa dentro dentro do textarea, ele vai executar a operação caso contrária, não vai ter nada para calcular*/
    /*quem faz o calculo todo é o evalresultado()*/
    if(resultado){
        /* estudar eval*/
        document.getElementById('textarea').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('textarea').innerHTML = '';
    }
}