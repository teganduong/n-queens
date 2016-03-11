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

  var r, c;

  r = 0;
  c = 0;

  var size = n;

  // place an intitial marker
  board.togglePiece(r, c);
  // move column position one to right
  c++;

  console.log('board1: ', board);
  console.log('start position after placing first piece: row: ', r, 'col: ',c);
  debugger;
  
  // start testing
  // loop through columns
  for (c; c < size; c++) {
    // check for row conflict
    // if row conflict..
    if (board.hasRowConflictAt(r)) {
      // move to new row and start again
      r++;
      continue;
    }
    // if no row conflict, check for column conflict.
    // if column conflict...
    if (board.hasRowConflictAt(c)) {
      // start again
      continue;
    }
    // if no column conflict...
    // set location to 1
    board.togglePiece(r, c); 
    // start again
    continue;
  }

  find();













  // var solution = function(n) {
  //    this.makeEmptyMatrix(n);

  // var makeAllcombinations = function(n) {
  //   var positions = [1, 1, 1, 1];
  //   var sequences = [];

  //   var makeSequences = function(sequencesToGo, results) {
  //     if (sequencesToGo === 0) {
  //       return sequences.push(results);
  //     }

  //     for (var i = 0; i < positions.length; i++) {
  //       var currentPosition = position[i];
  //       makeSequences(sequencesToGo - 1, results.concat(currentPosition));
  //     }
  //   };
  //   makeSequences(n, []);
  //   return sequences;
  // };

  // allCombinations = makeSequences(n);
  // debugger;
  // console.log(allCombinations);


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

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
