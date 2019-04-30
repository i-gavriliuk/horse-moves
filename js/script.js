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

const getAlgRepr = function getAlgebraicRepresentationOfMoves(moves) {
  const algebraicMoves = [];
  for (let i = 0; i < moves.length; i += 1) {
    const squares = moves[i];
    algebraicMoves.push(matchMap[squares[0]] + (squares[1] + 1));
  }
  return algebraicMoves;
};

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
