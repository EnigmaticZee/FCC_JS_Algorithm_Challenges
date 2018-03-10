
function palindrome(str) {
  var format = /[\W_]/g; //g = global
  var newStr = str.toLowerCase().replace(format, "");
  console.log(newStr);
  var formattedStr = newStr.split('').reverse().join('');
  
  if (str === formattedStr){return true;}
  
  return false;
}



palindrome("race car");
