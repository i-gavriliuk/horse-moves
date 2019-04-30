const matchMap = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
  4: 'E',
  5: 'F',
  6: 'G',
  7: 'H',
};

// The function generates and returns a chessboard of a given size (by default 8x8)
const createBoard = function createChessboardGivenSize(size = 8, initVal = null) {
  const board = [];
  for (let i = 0; i < size; i += 1) {
    const row = [];
    for (let j = 0; j < size; j += 1) {
      row[j] = initVal;
    }
    board[i] = row;
  }
  return board;
};

// The function accepts the board and the initial position of the figure
// and returns the board with possible moves
const markPosition = function identifyingPossiblePositions(board, initPos) {
  const markedBoard = board;
  if (initPos[0] - 1 >= 0 && initPos[1] + 2 <= 7) {
    markedBoard[initPos[0] - 1][initPos[1] + 2] = true;
  }
  if (initPos[0] - 1 >= 0 && initPos[1] - 2 >= 0) {
    markedBoard[initPos[0] - 1][initPos[1] - 2] = true;
  }
  if (initPos[0] + 1 <= 7 && initPos[1] - 2 >= 0) {
    markedBoard[initPos[0] + 1][initPos[1] - 2] = true;
  }
  if (initPos[0] + 1 <= 7 && initPos[1] + 2 <= 7) {
    markedBoard[initPos[0] + 1][initPos[1] + 2] = true;
  }

  if (initPos[0] - 2 >= 0 && initPos[1] + 1 <= 7) {
    markedBoard[initPos[0] - 2][initPos[1] + 1] = true;
  }
  if (initPos[0] - 2 >= 0 && initPos[1] - 1 >= 0) {
    markedBoard[initPos[0] - 2][initPos[1] - 1] = true;
  }
  if (initPos[0] + 2 <= 7 && initPos[1] + 1 <= 7) {
    markedBoard[initPos[0] + 2][initPos[1] + 1] = true;
  }
  if (initPos[0] + 2 <= 7 && initPos[1] - 1 >= 0) {
    markedBoard[initPos[0] + 2][initPos[1] - 1] = true;
  }
  return markedBoard;
};

// Function accepts board with possible moves and returns an array
// of two-element arrays containing the coordinates of possible moves
const getMoves = function getAllAvailableMoves(board) {
  const moves = [];
  for (let i = 0; i < board.length; i += 1) {
    const row = board[i];
    for (let j = 0; j < row.length; j += 1) {
      if (board[i][j]) {
        moves.push([i, j]);
      }
    }
  }
  return moves;
};

// The function converts moves from the coordinates
// of the form 0...7x0...7 to the form A...Hx1...8
const getAlgRepr = function getAlgebraicRepresentationOfMoves(moves) {
  const algebraicMoves = [];
  for (let i = 0; i < moves.length; i += 1) {
    const squares = moves[i];
    algebraicMoves.push(matchMap[squares[0]] + (squares[1] + 1));
  }
  return algebraicMoves;
};

// The function takes the position of the figure as `A3` and returns an array
// of two coordinates as [0, 2] (the origin point shifts to [0, 0])
const getNumericRepr = function getNumericRepresentationOfSquareCoordinate(squareCoord) {
  const fistCoord = Number(Object.keys(matchMap).find(key => matchMap[key] === squareCoord[0]));
  const secondCoord = Number(squareCoord[1]) - 1;
  return [fistCoord, secondCoord];
};

const userInput = 'D4'.toUpperCase();
const initialPosition = getNumericRepr(userInput);

const chessBoard = createBoard();
const boardWithPosition = markPosition(chessBoard, initialPosition);
const availableMoves = getMoves(boardWithPosition);
const algebraicMoves = getAlgRepr(availableMoves);

console.log(algebraicMoves.join(' '));
