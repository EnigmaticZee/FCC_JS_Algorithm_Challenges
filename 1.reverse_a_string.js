//Reverse the string "Hello"

//Method 1 By Using Built In Functions
function reverseString(str) {
return  str.split('').reverse().join('');
}

reverseString("hello");

//Method 2 From Scratch

function reverseString(str) {
	var reverse = '';
	for(var i = str.length - 1; i >= 0; i--){
	  reverse += str[i];
	}
	return reverse;
}

reverseString('hello');