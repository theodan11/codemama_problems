function main(input) {
    let c = Number(input)
    let f = ((c * 9 / 5) + 32).toFixed(2)
    console.log(`The temperature in Fahrenheit is: ${f}`)

}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});