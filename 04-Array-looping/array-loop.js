
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var numbers = 0;
var letters = 0;
arr1.forEach(function(item){
    if (typeof item === 'number'){

        numbers++;
    }

    else if (typeof item === 'string'){
        letters++
    }
})

document.write(numbers + '<br>')
document.write(letters)

