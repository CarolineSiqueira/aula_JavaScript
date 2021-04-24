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



