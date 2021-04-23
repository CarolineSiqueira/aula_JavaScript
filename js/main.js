/*var nome = "Caroline Siqueira";
alert("Bem vindo "+ nome);
var frase = "Curso de JavaScript";
console.log(frase.toUpperCase());
alert(frase.replace("Curso", "aula"));*/




/*var lista = ["maça","pêra","laranja"];
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join("|"));



var frutas=[{nome:"banana", cor:"amarela"},{nome:"uva", cor:"roxa"},{nome:"morango", cor:"vermelho"}]
console.log(frutas);
console.log(frutas[2].cor);



var idade= prompt("Qual a sua idade?");
if( idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade")
};



var count= 0;
while(count <= 5){
    console.log(count);
    count ++;
}



var count;
for(count=0; count<=5; count ++){
    alert(count);
}



var date = new Date();
//alert(date.getMonth()+1);
alert(date.getHours());



function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert (soma(5, 10));
alert  (setReplace("Vai Japão", "Japão", "Brasil"));



function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }   
    return validar;
}

var idade = prompt("Qual é a sua idade?");
console.log(validaIdade(idade));

*/

function clicar(){
    document.getElementById("agradecimento").innerHTML = "Obrigado pela inscrição!";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado(a) pela inscrição!");
}

function redirecionar(){
    window.open("http://vemsegura.epizy.com/"); //abre outra janela
    window.location.href ="http://vemsegura.epizy.com/"; // abre na mesma janela
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"
    //alert ("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada")

}

function funcaoChange(elemento){
    console.log(elemento.value)
}

