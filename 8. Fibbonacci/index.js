function nthFibo(num) {
    // few fibonacci sequence collected from wiki
    // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

    // f0 = 0, f1 = 1, f2 = 1
    // fn = fn-1 + fn-2
    const MOD = 1000000007n;
    let a = 0n;
    let b = 1n;
    let nth = 0n;
    if(num === 1){
      return a
    }else if( num === 2){
      return b
    }else{
      
      for (let i = 3; i<=num + 1; i++){
        
       
        nth = (a + b ) % MOD
        a = b
        b = nth
 

      }
            // console.log(nth)
              return nth
    }
    

}


function main(input) {
    let num = Number(input)
   let res =  nthFibo(num)
   console.log(res.toString())
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
