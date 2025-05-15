function main (listNum, sum) {
  
  let f = 0
  let m = 0
  let l = 0
  for (let i = 0; i<= listNum.length - 1; i++){
    let j = i + 1;
    let k = listNum.length - 1;
    let complement = sum - listNum[i]
    while(j<=k){
      let jk = listNum[j] + listNum[k]
      if(jk < complement){
        j ++
      }else if(jk > complement){
        k --
      }else{
        f = i
        m = j
        l = k
        // console.log(listNum)
        // console.log(i, j, k)
       return [listNum[i], listNum[j], listNum[k]]
      }
      
    }
  }
  
  // console.log(listNum[f], listNum[m], listNum[l])
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    input = input.split("\n")
    // console.log(input[2])
    // console.log(input[1], input[2])
    let listNum = input[1].split(' ').map(n=>Number(n)).sort((a, b)=> a - b)
    // console.log(listNum)
    let result = main(listNum, input[2]);
    console.log(`${result[0]} ${result[1]} ${result[2]}`)
});