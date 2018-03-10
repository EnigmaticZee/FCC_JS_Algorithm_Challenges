//Using Recursion

function factorialize(num) {
  if (num === 0){ return 1;}
  return num * factorialize(num - 1);
}

factorialize(5);

//Using For


function factorialize(num) {
  var result = 1;
for (var i = 1; i <= num; i++)
result *= i; return result; 
}

factorialize(5);
