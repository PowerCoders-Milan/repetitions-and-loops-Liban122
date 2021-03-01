// odd or even reporter

// write a for loop to iterate from 0 to 20

  // check if the current is even or odd

  // report the result to the screen
  
for(i = 0; i <= 20; i++){
  
  if(i % 2 === 0){
    console.log(i)
  }

  else{
    console.log('Its odd')
  }
}

var x = 0
while(x <= 20){
  if(x % 2 === 0){
    console.log(x)
  }

  else{
    console.log('Its odd')
  }
  x++
}


do{
  if(x % 2 === 0){
    console.log(x)
  }

  else{
    console.log('Its odd')
  }
  x++
} while(x <= 20)