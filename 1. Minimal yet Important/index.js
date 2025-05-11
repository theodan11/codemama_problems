function main(input) {

    listOfNumber = input.split(' ')
    listOfNumber = listOfNumber.map((num) => Number(num))

    let compare = listOfNumber.sort((a, b) => a - b)
    // listOfNumber.sort()



    console.log(compare[0])
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});