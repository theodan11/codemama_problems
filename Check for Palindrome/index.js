function main (input) {
    let end_pointer = 0
    let palindrom = false
     for(let i = 0; i<input.length; i++){
       end_pointer = input.length - 1 - i
       if(input[i] === input[end_pointer] ){
         palindrom = true
         
       }else if(i === end_pointer || i > end_pointer){
         break
       }
       else{
         palindrom = false
        break
       }
       
    // console.log(palindrom)
     }
   return palindrom
     
  }
  
  let input = "";
  process.stdin.on('data', (chunk) => {
      input += chunk;
  });
  
  process.stdin.on('end', () => {
      let isPalin = main(input.trim());
      
      if(isPalin){
        console.log(`${input} is a palindrome number`)
      }else{
        console.log(`${input} is not a palindrome number`)
      }
  });