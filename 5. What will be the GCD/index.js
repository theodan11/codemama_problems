function main (input) {
    let list = input.split(" ").map((n) => Number(n))
    console.log(list)
    
    let gcd = 1
    for(let i = 2; i<= list[0]; i++){
      if(list[0] % i  === 0 && list[1] % i ===0){
        gcd = i;
      }
      
    }
    console.log(gcd)
    
    
 }
 
 let input = "";
 process.stdin.on('data', (chunk) => {
     input += chunk;
 });
 
 process.stdin.on('end', () => {
     main(input.trim());
 });