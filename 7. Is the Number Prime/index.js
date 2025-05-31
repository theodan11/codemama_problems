function main (input) {
    let numb = Number(input)

    if(numb === 1){
      
       return false;
    }
    else if(numb === 2 || numb ===3 ){
      return true
    }
    else if (numb % 2 === 0 || numb % 3 === 0 ){
      return false;
  
    }else{
     
      for(let i = 5; i<=Math.sqrt(numb); i += 6){
      if( (numb% i === 0 ) || numb% ((i+ 2)=== 0)){
       
         return false
      }
    }
    return true
    }
    
    
    
}

let input = "";
let result = false
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
  
  result = main(input.trim());
  // console.log(input)

if(result){
  console.log(`${input} is a prime number.`)
}else{
   console.log(`${input} is not a prime number.`)
}
});

