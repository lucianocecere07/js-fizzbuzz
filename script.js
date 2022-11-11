//stampa numeri 1-100, *3(fizz), *5(buzz), *3*5(fizzbuzz)
//stampa numeri 1-100
//if i%3==0 fizz, else if i%5==0 buzz, else if 1&&2 fizzbuzz, else
for(let i = 1; i <= 100; i++){
    if(i %3 == 0 && i %5 == 0){
        console.log("FizzBuzz");
    } else if(i %3 == 0){
        console.log("Fizz");
    } else if(i %5 == 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}