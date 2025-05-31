function main (inum, arrList) {
    // console.log(inum, arrList)
    
    for (let i = 0; i<inum; i++){
      str = arrList[i].trim()
      
      const charMap = {}
      let queue = []
      // console.log
     
      for(let j = 0; j< str.length; j++){
        // console.log(str[j])
        let char = str[j]
        
        if(charMap[char] === undefined){
          charMap[char] = 1
          queue.push(char)
        }else{
          charMap[char] ++
        }
        
        // console.log(charMap)
        // console.log(queue)
      }
      let msg = "N"
      for(let i = 0; i<queue.length; i++){
        let front = queue[i]
        // console.log(queue[i])
        if(charMap[front] === 1){
          msg = front
          break
        }
      }
      console.log(msg)
      
    }
  }
  
  let input = "";
  process.stdin.on('data', (chunk) => {
      input += chunk;
  });
  
  process.stdin.on('end', () => {
      input = input.trim()
      let [inum, ...arrList ]=input.split("\n")
      main(inum, arrList);
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  