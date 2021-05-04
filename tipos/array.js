//Alterar item em um array
let shopping = ['blusa','calça','carrinho','sapato'];
shopping[0] = 'camisa';

//Acessando um array dentro de outro 
let random = ['tree', 795, [0,1,2]];
random[2][2];

//Incluindo um intem no array
var lista = ["maça","pêra","laranja"];
lista.push("uva"); 

lista.pop();//exclui o último intem

lista.join("|") //Separando os itens 

lista.toString() //Mostra os itens fora do array

lista.unshift('banana'); //Incluir item no início do array

let removedItem = lista.shift(); //Remover o primeiro item do array

var frutas=[{nome:"banana", cor:"amarela"},{nome:"uva", cor:"roxa"},{nome:"morango", cor:"vermelho"}]
console.log(frutas);
console.log(frutas[2].cor);

// retorna as substrings entre o separador como itens em uma matriz.
let myData = 'Rio de Janeiro,São Paulo,Minas Gerais,Rio Grande do Sul,Paraíba,Santa Catarina';

//Convertendo String em Array
let myArray = myData.split(',');

myArray[myArray.length-1]; // o último item da matriz

//Convertendo Array em String com join() (você pode especificar separadores diferentes)
let myNewString = myArray.join(',');
myNewString;

//Convertendo Array em String com toString()
let dogNames = ['Rocket','Flash','Bella','Slugger'];
dogNames.toString(); // Rocket,Flash,Bella,Slugger
