var string = prompt()


//The function returns the last char of the string
function getLastChar(string) {
  return string.charAt(string.length - 1);
}

//The function returns the string without last char
function getStringWithoutLastChar(string) {
  return string.substring(0, string.length - 1);
}

//The function reverses the string
function reverseString(string) {
  var stringReverseVariable = '';

  for (var i = string.length - 1; i >= 0; i--) {
    stringReverseVariable = stringReverseVariable + string.charAt(i);
  }

  return stringReverseVariable;
}

//The function removes extra spaces in the string
function removingExtraSpaces(string) {
  var F = 'Y';
  var correctSentence = '';
  
  for (var i = 0; i < string.length - 1; i++) {
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

console.log('Последний символ строки:', getLastChar(string));
console.log('Без последнего символа строки:', getStringWithoutLastChar(string));
console.log('Зеркальное отображение строки:', reverseString(string));
console.log('Удаление лишних пробелов в строке:', removingExtraSpaces(string));