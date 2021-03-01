for(i = 0; i <= 100; i++){
    if(i % 3 == 0){
        document.write(`fizz <br>`)
    }

    else if(i % 5 == 0) {
        document.write(`buzz <br>`)
    }
    else if (i % 15 == 0){
        document.write(`fizbuzz`)
    }
}