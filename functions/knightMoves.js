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

    // queue for BFS
    let quene = [];

    // 2-d array for recording visited positions, and initially mark all the vertices as not visited
    let rows = 8;
    let cols = 8;
    let visited = new Array(rows);
    for (let i = 0; i < rows; i++) {
        visited[i] = new Array(cols);
        for (let j = 0; j < cols; j++) {
            visited[i][j] = false;
        }
    }

    // array to keep track of the traversal to the current node (put in the start node)
    let result = [];

    // mark the position of start node as visited
    visited[start[0]][start[1]] = true;
    // record the position of start node into the path
    result.push(start);
    quene.push([result, start]);

    // Iterate over the queue
    while(quene.length > 0) {
        const current = quene.shift();
        const result = current[0];
        const position = current[1];

        if((position[0] === end[0]) && (position[1] === end[1])) {
            return result;
        }

        // get all adjacent vertices of the dequeued vertex current, and enquene all vertices into quene
        const nextPositions = getNext(position, visited);

        if (nextPositions.length > 0) {
            // enquene all unvisited adjacent vertices
            for(const nextPos of nextPositions) {
                    // mark the position of next node as visited
                    visited[nextPos[0]][nextPos[1]] = true;

                    // record the position of next node into the path
                    const nextResult = [...result];
                    nextResult.push(nextPos);

                    quene.push([nextResult, nextPos]);
                }
            }
    }
}

// check range of coordinates is between 0 and 7
function checkPosition(coordinate) {
    if(coordinate < 0 || coordinate > 7){
        return false;
    }
    return true;
}

// retrieve all unvisited positions knight can move to
function getNext(start, visited) {
    let nextPositions = [];

    // all posible directions knight can move to
    const moves = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    for (const [dx, dy] of moves) {
        const nextX = start[0] + dx;
        const nextY = start[1] + dy;

        if(checkPosition(nextX) && checkPosition(nextY) && !visited[nextX][nextY]) {
            nextPositions.push([nextX, nextY]);
        }
    }

    return nextPositions;
}