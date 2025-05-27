// function fac(num){
//     if(num === 1) return 1

//     return num * fac(num-1)
// }

function main (input) {
    let num = Number(input)
    let result = 1 
    for(let i = num; i>0; i--){
         result *= i
    }
     console.log(result)
 }
 
 let input = "";
 process.stdin.on('data', (chunk) => {
     input += chunk;
 });
 
 process.stdin.on('end', () => {
     main(input.trim());
 });