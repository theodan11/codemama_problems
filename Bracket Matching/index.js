function main (input) {
    let msg =  "Brackets are balanced."
    let end_pointer = 0
    let table = new Map([
        ["(", ")"],
        ["{", "}"],
        ["[", "]"],
        ])
    
    for(let i = 0; i < input.length / 2; i++){
    // console.log(msg)
      end_pointer = input.length - 1 - i
      let val = table.get(input[i])
      
      if(val !== input[end_pointer] ){
        msg = "Brackets are not balanced."
        // console.log(input[i] , val)
        return msg
      }
      
      
    }
    
    return msg
    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    
    let result = main(input.trim());
  console.log(result)
});