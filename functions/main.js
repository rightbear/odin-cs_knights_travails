#!/usr/bin/node

import { knightMoves } from "./knightMoves.js"

knightMoves([0,0],[1,2]);      // [ 0, 0 ], [ 1, 2 ]
knightMoves([0,0],[3,3]);      // [ 0, 0 ], [ 2, 1 ], [ 3, 3 ]
knightMoves([3,3],[0,0]);      // [ 3, 3 ], [ 1, 2 ], [ 0, 0 ]
knightMoves([0,0],[7,7]);      // [ 0, 0 ], [ 2, 1 ], [ 4, 2 ], [ 6, 3 ], [ 7, 5 ], [ 5, 6 ], [ 7, 7 ]
knightMoves([3,3],[4,3]);      // [ 3, 3 ], [ 5, 4 ], [ 3, 5 ], [ 4, 3 ]