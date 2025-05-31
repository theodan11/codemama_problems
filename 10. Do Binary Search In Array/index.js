function main(lists, num) {
    let listarr = lists.split(" ").map((n)=>Number(n));
    num = Number(num)
    let left, right, mid;
    left = 0;
    right = listarr.length - 1;
    
    // console.log(right)
    // console.log(listarr)
    
    while(left<=right){
        mid = Math.floor((left + right) / 2);

        if(listarr[mid]< num){
            left = mid + 1;
            // console.log(listarr[mid])
        }else if(listarr[mid]>num){
            right = mid - 1;
            // console.log(listarr[mid])
        }else{
            console.log(mid);
            // console.log(listarr[mid])
            return mid
        }
    }
     console.log("Element not found");

}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    input = input.trim().split("\n");
    // console.log(input)
    main(input[1], input[2]);
    // main("10 20 30 40 50", 60)
});

// let lists = "";
// process.stdin.on('data', (chunk) => {
//     lists += chunk;
// });

// process.stdin.on('end', () => {
//     lists.trim();
// });

// let num = "";
// process.stdin.on('data', (chunk) => {
//     num += chunk;
// });

// process.stdin.on('end', () => {
//     num = Number(num.trim());
//     main(lists, num);
// });