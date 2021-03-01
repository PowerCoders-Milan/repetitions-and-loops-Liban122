// write your code below
var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
x.forEach(function(y){
    document.write(y + '*' + 9+ '=' +y*9+ '<br>')
})



function allTable(num){
   for(i=1 ; i <= 9 ; i++){
    
    document.write(num + '*'+ i + '= ' + num*i + '<br>');
   }
}

allTable(6);