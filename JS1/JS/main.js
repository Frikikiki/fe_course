var string = 'Hello, World';
var uncorrectString = '     Hello, boys    and     girls   ';


//Функция возвращает последний символ строки
function last(string) {
  return string.charAt(string.length - 1);
}

//Функция возвращает строку без последнего символа
function withoutLast(string) {
  return string.substring(0, string.length - 1);
}

//Функция зеркально отображает строку
function reverseString(string) {
  var stringReverseVariable = '';

  for (i = string.length - 1; i >= 0; i--) {
    stringReverseVariable = stringReverseVariable + string.charAt(i);
  }

  return stringReverseVariable;
}

//Функция удаляет лишние пробелы в строке
function removingSpaces(string) {
  var F = 'Y';
  var correctSentence = '';
  
  for (i=0; i < string.length - 1; i++) {
	if ((string.charAt(i) == ' ') && (string.charAt(i+1) != ' ') && (F == 'N')) {
	  correctSentence += ' ';
	}
	if (string.charAt(i+1) != ' ') {
	  correctSentence += string.charAt(i+1);
	  F = 'N';
	}
  }
  
  return correctSentence;
}

console.log('Последний символ строки:', last(string));
console.log('Без последнего символа строки:', withoutLast(string));
console.log('Зеркальное отображение строки:', reverseString(string));
console.log('Удаление лишних пробелов в строке:', removingSpaces(uncorrectString));