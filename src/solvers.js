/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


window.findNRooksSolution = function(n) {
  
  var board = new Board({ n: n });

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({ n: n });

  // create helper function to find a rooks solution
  var findSolution = function(row) {
    // base case: if end of all rows (at last row)
    if (row === n) {
      // increment solutionCount
      solutionCount++;
      // return (stop)
      return;
    }

    // iterate over possible decisions (each spot on board)
    for (var i = 0; i < n; i++) {
      // place a piece using toggle
      board.togglePiece(row, i);
      // check if placement of piece has any conflicts
      if (!board.hasAnyRooksConflicts()) {
        // if not, recurse findSolution w/ remaining rows
        findSolution(row + 1);
      }

      // else (if piece placement has rook conflicts)
      // unplace (untoggle) piece
      board.togglePiece(row, i);
    }
  };

  // implement findSolution starting w/ row 0
  findSolution(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
