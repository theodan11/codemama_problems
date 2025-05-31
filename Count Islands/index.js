
function bfs(row, col, visited, grid, n, m){
    let q = []
    visited[row][col] = 1
    q.push([row, col])
    // console.log(q)
    // console.log(visited)
    while (q.length > 0){
      // let nw = q[0][0]
      // let mw = q[0][1]
      
      let [nw, mw] = q.shift()
      // console.log(q[0][0], q[0][1], "q")
      // q.splice(0, 1)
      let direction = [[-1, 0], [1, 0], [0, 1], [0, -1]]
      
      for (let i = 0; i < direction.length; i++){
        let nrow = nw + direction[i][0]
          let ncol = mw + direction[i][1]
          
          if(nrow >= 0 && nrow < n && ncol >= 0 && ncol < m && visited[nrow][ncol] === 0 && grid[nrow][ncol] === "."){
            visited[nrow][ncol] = 1
            q.push([nrow, ncol])
          }
      }
    
      
      // for(let delrow = - 1; delrow <= 1; delrow ++){
      //   for(let delcol = -1; delcol <= 1; delcol ++){
      //     let nrow = nw + delrow
      //     let ncol = mw + delcol
      //     if(nrow >= 0 && nrow < n && ncol >= 0 && ncol <= m && visited[nrow][ncol] === 0 && grid[nrow][ncol] === "."){
      //       visited[nrow][ncol] = 1
      //       q.push([nrow, ncol])
      //     }
      //   }
      // }
    }
}

function main (dim, grid) {
    let [n, m] = dim.trim().split(" ").map(n=>Number(n))
    // let n = 5
    // let m = 8
    
    let visited = Array.from({length: n}, ()=> Array(m).fill(0)) //created arrays with 0's
    // console.log(visited)
    // console.log(n, m , grid )
    // console.log(typeof n, typeof m)
    let count = 0
    
  
    
    for(let row = 0; row < n; row++){
      for(let col = 0; col < m; col++){
          if((visited[row][col] === 0) && (grid[row][col] === ".")){
            count ++
            bfs(row, col, visited, grid, n, m)
          }
      }
    }
    console.log(count)
    return count
    
    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    input = input.split("\n")
    let grid = input.splice(1)
    // input = input.split(" , ")
    // console.log(input)
    // console.log(grid[1][2])
    main(input[0], grid);
});