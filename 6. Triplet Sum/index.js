function main (list, sum) {
    let hashMap = {}
    let hashfilter = {}
    list = list.split(' ').map((n)=>Number(n))
    // sum = Number(sum)
    // console.log(list, sum)
    for (i in list){
      hashMap[list[i]] = 0
    }
    
    for(i in list){
      let sub = (sum - list[i])
      if (sub in hashMap){
        hashfilter[sub] = 1
        // console.log()
        sum = sub
      }
    }
    
   let values = Object.keys(hashfilter) 
    // console.log(values)
    let result ="" 
    for (let i in values){
      result += `${values[i]} `
    }
    
    console.log(result)
  }
  
  let input = "";
  process.stdin.on('data', (chunk) => {
      input += chunk;
  });
  
  process.stdin.on('end', () => {
      input = input.split("\n")
      // console.log(input[2])
      // console.log(input[1], input[2])
      main(input[1], input[2]);
  });