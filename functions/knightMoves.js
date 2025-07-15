export { knightMoves };

function knightMoves(start, end) {
    // check format of start and end positions
    if(!Array.isArray(start) || !Array.isArray(end)) {
        console.log("The start and end positions should be a pair of coordinates like [x, y]");
        return null;
    }

    // check range of coordinates in start and end positions
    if(!checkPosition(start[0]) || !checkPosition(start[1]) || !checkPosition(end[0]) || !checkPosition(end[1])){
        console.log("The x and y coordinates of start and end positions should be between 0 and 7");
        return null;
    }

    // create an array to store the traversal
    let result = [];

    // Create a queue for BFS
    let quene= [];

    // Create a 2-d array for recording visited positions, and initially mark all the vertices as not visited
    let rows = 8;
    let cols = 8;
    let visited = new Array(rows);

    for (let i = 0; i < rows; i++) {
        visited[i] = new Array(cols);
        for (let j = 0; j < cols; j++) {
            visited[i][j] = false;
        }
    }

    // Mark source node as visited and enqueue it
    visited[start[0]][start[1]] = true;

    return visited;
}

// check range of coordinates is between 0 and 7
function checkPosition(coordinate) {
    if(coordinate < 0 || coordinate > 7){
        return false;
    }
    return true;
}