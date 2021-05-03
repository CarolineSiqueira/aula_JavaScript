//Retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log('Quantidade de letras: ${textSize}');

//Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split ('x');
console.log('\nArray com as posições separadas pelo demilitador:',splittedText);

//Busca por um valor e substitui por outro
const replaceText = 'Texto'.replace ('Text', 'txeT');
console.log('\nSubstituição de valor:', replaceText);

//Retorna a fatia de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra da string:', lastChar);

const allWhithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última:');

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da primeira letra menos a última:', secondToEnd);

//Retorna N caracteres a partir de uma posição
const twoCharBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas primeiras letras são:', twoCharBeforeFirstPos);


let browserType = 'mozilla';
browserType.length; //retornar o número 7, porque "mozilla" tem 7 caracteres

browserType[browserType.length-1]; //Para recuperar o último caractere de qualquer string

browserType.indexOf('zilla'); // descobrir se uma string menor está presente dentro de uma maior.Isso nos dá um resultado de 2, porque a substring "zilla" começa na posição

browserType.slice(0,3); // Isso retorna "moz" - o primeiro parâmetro é a posição do caractere para começar a extrair e o segundo parâmetro é a posição do caractere após o último a ser extraído.A fatia acontece da primeira posição, até, mas não incluindo, a última posição.
//O segundo parâmetro de slice()é opcional: se você não incluí-lo, a fatia termina no final da string original. 

browserType.replace('moz','van'); //a string que você deseja substituir e a string pela qual deseja substituí-la.

browserType = browserType.replace('moz','van'); //Atualiza o valor da string.


let radData = 'My NaMe Is MuD';
radData.toLowerCase(); //Muda para minúcula
radData.toUpperCase(); // Muda para maiúscula 



