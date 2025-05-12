function nthFibo(num) {
  // few fibonacci sequence collected from wiki
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

  // f0 = 0, f1 = 1, f2 = 1
  // fn = fn-1 + fn-2

  // https://r-knott.surrey.ac.uk/fibonacci/fibformula.html

  // Fib(n) =  	Phin − (−Phi)−n
  // =   	Phin − ( −phi)n

  // √5	√5
  // let nth = 0;
  // let a = b = 0
  // for (let i = 1; i <= num; i++) {
  //   if (i === 1) {
  //     a = 1;

  //     nth = a

  //   } else if (i === 2) {
  //     b = 1
  //     nth = a
  //   } else {
  //     a = b
  //     b = nth
  //     nth = a + b;
  //   }


  // }

  // console.log(nth.toString())

  let Phi = (Math.sqrt(5) + 1) / 2
  let phi = (Math.sqrt(5) - 1) / 2
  let nthFib = BigInt(Math.floor(((Math.pow(Phi, num) - (Math.pow(-phi, num))) / Math.sqrt(5))))
  console.log(nthFib.toString())

}


function main(input) {
  let num = Number(input)
  nthFibo(num)
}

let input = "";
process.stdin.on('data', (chunk) => {
  input += chunk;
});

process.stdin.on('end', () => {
  main(input.trim());
});