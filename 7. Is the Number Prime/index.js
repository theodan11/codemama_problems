function main (input) {
    let numb = Number(input)
    
    if (numb% 2 !== 0){
      console.log(`${numb} is a prime number.`)
    }else{
      console.log(`${numb} is not a prime number.`)
    }
    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});