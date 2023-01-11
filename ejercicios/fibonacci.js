
const num = 6;
function fibonacci(numero){

const fibo = [ 1 , 1 ];

for(let i =2 ; i < numero; i++){

    fibo.push(fibo[ i - 1 ] + fibo[ i - 2 ]);

}
return fibo;
}


const f = fibonacci(num);
console.log(f);
