function main(input) {
    let [a, b] = input.split(' ')
    let area = Math.floor((Number(a) * Number(b)) / 2)
    console.log(area)

}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});