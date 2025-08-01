const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(arr) {
	let x = 0;
  for(i of arr){
    x = x + i;
  }
  return x;
};

const multiply = function(arr) {
  	let x = 1;
  for(i of arr){
    x = x * i;
  }
  return x;
};

const power = function(a,b) {
	let x = b;
  let y = 1;
  while(x>0){
    y = y*a;
    --x;
  }
  return y;
};

const factorial = function(a) {
  let x = a;
  let y = 1;
  if(a===0){
    return 1;
  }
  else if(a<=0){
    return 'undefined'
  }else if(a>0){

    while(x>0){
    y = y*x;
    --x;
    }
    return y;
  }
  
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
