/**
 * @license
 * Copyright (c) 2023, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
/* eslint-disable */
export const WHITE = 'w'
export const BLACK = 'b'

export const PAWN = 'p'
export const MINISTER = 'm'
export const KNIGHT = 'n'
export const BISHOP = 'b'
export const ROOK = 'r'
export const QUEEN = 'q'
export const KING = 'k'
export const MONK = 'g'
export const UNITE = 'u'

export type Color = 'w' | 'b'
export type PieceSymbol = 'p' | 'm' | 'n' | 'b' | 'r' | 'q' | 'k' | 'g' | 'u'

// prettier-ignore
export type Square =
   'a10' |  'b10' |  'c10' |  'd10' |  'e10' |  'f10' |  'g10' |  'h10' |  'i10' |  'j10' |
   'a9'  |  'b9'  |  'c9'  |  'd9'  |  'e9'  |  'f9'  |  'g9'  |  'h9'  |  'i9'  |  'j9'  |
   'a8'  |  'b8'  |  'c8'  |  'd8'  |  'e8'  |  'f8'  |  'g8'  |  'h8'  |  'i8'  |  'j8'  |
   'a7'  |  'b7'  |  'c7'  |  'd7'  |  'e7'  |  'f7'  |  'g7'  |  'h7'  |  'i7'  |  'j7'  |
   'a6'  |  'b6'  |  'c6'  |  'd6'  |  'e6'  |  'f6'  |  'g6'  |  'h6'  |  'i6'  |  'j6'  |
   'a5'  |  'b5'  |  'c5'  |  'd5'  |  'e5'  |  'f5'  |  'g5'  |  'h5'  |  'i5'  |  'j5'  |
   'a4'  |  'b4'  |  'c4'  |  'd4'  |  'e4'  |  'f4'  |  'g4'  |  'h4'  |  'i4'  |  'j4'  |
   'a3'  |  'b3'  |  'c3'  |  'd3'  |  'e3'  |  'f3'  |  'g3'  |  'h3'  |  'i3'  |  'j3'  |
   'a2'  |  'b2'  |  'c2'  |  'd2'  |  'e2'  |  'f2'  |  'g2'  |  'h2'  |  'i2'  |  'j2'  |
   'a1'  |  'b1'  |  'c1'  |  'd1'  |  'e1'  |  'f1'  |  'g1'  |  'h1'  |  'i1'  |  'j1' 

// prettier-ignore
// eslint-disable-next-line
// const SquareCode: Record<Square, number> = {
//   a10: 90, b10: 91, c10: 92, d10: 93, e10: 94, f10: 95, g10: 96, h10: 97, i10: 98, j10: 99,
//   a9:  80, b9:  81, c9:  82, d9:  83, e9:  84, f9:  85, g9:  86, h9:  87, i9:  88, j9:  89,
//   a8:  70, b8:  71, c8:  72, d8:  73, e8:  74, f8:  75, g8:  76, h8:  77, i8:  78, j8:  79,
//   a7:  60, b7:  61, c7:  62, d7:  63, e7:  64, f7:  65, g7:  66, h7:  67, i7:  68, j7:  69,
//   a6:  50, b6:  51, c6:  52, d6:  53, e6:  54, f6:  55, g6:  56, h6:  57, i6:  58, j6:  59,
//   a5:  40, b5:  41, c5:  42, d5:  43, e5:  44, f5:  45, g5:  46, h5:  47, i5:  48, j5:  49,
//   a4:  30, b4:  31, c4:  32, d4:  33, e4:  34, f4:  35, g4:  36, h4:  37, i4:  38, j4:  39,
//   a3:  20, b3:  21, c3:  22, d3:  23, e3:  24, f3:  25, g3:  26, h3:  27, i3:  28, j3:  29,
//   a2:  10, b2:  11, c2:  12, d2:  13, e2:  14, f2:  15, g2:  16, h2:  17, i2:  18, j2:  19,
//   a1:   0, b1:   1, c1:   2, d1:   3, e1:   4, f1:   5, g1:   6, h1:   7, i1:   8, j1:   9
// } 

// prettier-ignore
// eslint-disable-next-line
const SquareCode: Record<Square, number> = {
  a10:  0, b10:  1, c10:  2, d10:  3, e10:  4, f10:  5, g10:  6, h10:  7, i10:  8, j10:  9,
  a9:  10, b9:  11, c9:  12, d9:  13, e9:  14, f9:  15, g9:  16, h9:  17, i9:  18, j9:  19,
  a8:  20, b8:  21, c8:  22, d8:  23, e8:  24, f8:  25, g8:  26, h8:  27, i8:  28, j8:  29,
  a7:  30, b7:  31, c7:  32, d7:  33, e7:  34, f7:  35, g7:  36, h7:  37, i7:  38, j7:  39,
  a6:  40, b6:  41, c6:  42, d6:  43, e6:  44, f6:  45, g6:  46, h6:  47, i6:  48, j6:  49,
  a5:  50, b5:  51, c5:  52, d5:  53, e5:  54, f5:  55, g5:  56, h5:  57, i5:  58, j5:  59,
  a4:  60, b4:  61, c4:  62, d4:  63, e4:  64, f4:  65, g4:  66, h4:  67, i4:  68, j4:  69,
  a3:  70, b3:  71, c3:  72, d3:  73, e3:  74, f3:  75, g3:  76, h3:  77, i3:  78, j3:  79,
  a2:  80, b2:  81, c2:  82, d2:  83, e2:  84, f2:  85, g2:  86, h2:  87, i2:  88, j2:  89,
  a1:  90, b1:  91, c1:  92, d1:  93, e1:  94, f1:  95, g1:  96, h1:  97, i1:  98, j1:  99
} 

export const DEFAULT_POSITION =
  'r3Kq3r/2mbnnbm2/pppppppppp/10/10/10/10/PPPPPPPPPP/2MBNNBM2/R3kQ3R w - 0 1'

export type Piece = {
  color: Color
  type: PieceSymbol
}

type InternalMove = {
  color: Color
  from: number
  to: number
  piece: PieceSymbol
  captured?: PieceSymbol
  promotion?: PieceSymbol
  flags: number
}

interface History {
  move: InternalMove
  kings: Record<Color, number>
  queens: Record<Color, number>
  turn: Color
  // castling: Record<Color, number>
  epSquare: number
  halfMoves: number
  moveNumber: number
}

export type Move = {
  color: Color
  from: Square
  to: Square
  piece: PieceSymbol
  captured?: PieceSymbol
  promotion?: PieceSymbol
  flags: string
  // san: string
  lan: string
  before: string
  after: string
}

const EMPTY = -1

const FLAGS: Record<string, string> = {
  NORMAL: 'n',
  CAPTURE: 'c',
  BIG_PAWN: 'b',
  EP_CAPTURE: 'e',
  PROMOTION: 'p',
  UNITE_WIN: 'u',
  QTAKE_WIN: 'q',
  // KSIDE_CASTLE: 'k',
  // QSIDE_CASTLE: 'q',
}

// prettier-ignore
export const SQUARES: Square[] = [
    'a10', 'b10', 'c10', 'd10', 'e10', 'f10', 'g10', 'h10', 'i10', 'j10',
    'a9', 'b9', 'c9', 'd9', 'e9', 'f9', 'g9', 'h9', 'i9', 'j9',
    'a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8', 'i8', 'j8',
    'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7', 'i7', 'j7',
    'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6', 'i6', 'j6',
    'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5', 'i5', 'j5',
    'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4', 'i4', 'j4',
    'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3', 'i3', 'j3',
    'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2', 'i2', 'j2',
    'a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1', 'i1', 'j1'
]

const BITS: Record<string, number> = {
  NORMAL: 1,
  CAPTURE: 2,
  BIG_PAWN: 4,
  EP_CAPTURE: 8,
  PROMOTION: 16,
  UNITE_WIN: 32,
  QTAKE_WIN: 64,
  // KSIDE_CASTLE: 32,
  // QSIDE_CASTLE: 64,
}

const PAWN_OFFSETS = {
  b: [10, 20, 11, 9],
  w: [-10, -20, -11, -9],
}

// How many squares to add to the current position for next legal move?
const PIECE_OFFSETS = {
  n: [-19, -21, -8, 12, 21, 19, 8, -12],
  b: [-9, -11, 11, 9],
  r: [-10, 1, -1, 10],
  q: [-11, -10, -9, -1, 1, 9, 10, 11],
  k: [-11, -10, -9, -1, 1, 9, 10, 11],
  m: [-11, -10, -9, -1, 1, 9, 10, 11],
  g: [-11, -10, -9, -1, 1, 9, 10, 11],
  u: [],
}


const SYMBOLS = 'pnmbgruqkPNBRQKMGU'

const PROMOTIONS: PieceSymbol[] = [BISHOP, KNIGHT, ROOK, MONK, MINISTER]

// const RANK_1 = 7
// const RANK_2 = 6
// /*
//  * const RANK_3 = 5
//  * const RANK_4 = 4
//  * const RANK_5 = 3
//  * const RANK_6 = 2
//  */
// const RANK_7 = 1
// const RANK_8 = 0

const RANK_1 = 0    
const RANK_2 = 1   
const RANK_3 = 2 
const RANK_4 = 3
const RANK_5 = 4
const RANK_6 = 5
const RANK_7 = 6
const RANK_8 = 7
const RANK_9 = 8
const RANK_10 = 9

const SECOND_RANK = { b: RANK_8, w: RANK_3 }

const TERMINATION_MARKERS = ['1-0', '0-1', '1/2-1/2', '*']

// Extracts the zero-based rank (number 0-9) of a SquareCode.
function rank(square: number): number {
  return (9 - Math.floor(square / 10))
}

// Extracts the zero-based file (letter a-j but in number form) of a SquareCode.
function file(square: number): number {
  return square % 10
}

function isDigit(c: string): boolean {
  //return '0123456789'.indexOf(c) !== -1
  return !isNaN(parseInt(c, 10)) 
}

// function isWithinBounds(square: number): boolean {
//   return 
// }

// Converts a SquareCode to algebraic notation.
function algebraic(square: number): Square {
  const f = file(square)
  const r = rank(square)+1
  return ('abcdefghij'.substring(f, f + 1) +
    r) as Square
}

function swapColor(color: Color): Color {
  return color === WHITE ? BLACK : WHITE
}

function expandFenEmptySquares(fen: string): string {
  return fen
    .replace(/10/g, "1111111111")
    .replace(/9/g, "111111111")
    .replace(/8/g, "11111111")
    .replace(/7/g, "1111111")
    .replace(/6/g, "111111")
    .replace(/5/g, "11111")
    .replace(/4/g, "1111")
    .replace(/3/g, "111")
    .replace(/2/g, "11");
}

export function validateFen(fen: string) {
  // 1st criterion: 5 space-seperated fields? (\s is whitespace character)
  const tokens = fen.split(/\s+/)
  // console.log("tokens: ",tokens);
  if (tokens.length !== 5) {
    return {
      ok: false,
      error: 'Invalid FEN: must contain five space-delimited fields',
    }
  }

  // 2nd criterion: move number field is a integer value > 0?
  const moveNumber = parseInt(tokens[4], 10) // convert string to number in base 10
  if (isNaN(moveNumber) || moveNumber <= 0) {
    return {
      ok: false,
      error: 'Invalid FEN: move number must be a positive integer',
    }
  }

  // 3rd criterion: half move counter is an integer >= 0?
  const halfMoves = parseInt(tokens[3], 10)
  if (isNaN(halfMoves) || halfMoves < 0) {
    return {
      ok: false,
      error:
        'Invalid FEN: half move counter number must be a non-negative integer',
    }
  }

  // 4th criterion: 3rd field is a valid e.p.-string?
  if (!/^(-|[abcdefghij][47])$/.test(tokens[2])) { // en passant skips over the 4th and 7th rank
    return { ok: false, error: 'Invalid FEN: en-passant square is invalid' }
  }

  // 5th criterion: 2nd field is "w" (white) or "b" (black)?
  if (!/^(w|b)$/.test(tokens[1])) {
    return { ok: false, error: 'Invalid FEN: side-to-move is invalid' }
  }

  // 6th criterion: 1st field contains 10 rows?
  const rows = tokens[0].split('/')
  //const rows = (expandFenEmptySquares(tokens[0])).split('/')
  if (rows.length !== 10) {
    return {
      ok: false,
      error: "Invalid FEN: piece data does not contain 10 '/'-delimited rows",
    }
  }

  // 7th criterion: every row is valid?
  for (let i = 0; i < rows.length; i++) {
    // check for right sum of fields AND not two numbers in succession
    let sumFields = 0
    let previousWasNumber = false

    for (let k = 0; k < rows[i].length; k++) {
      if (isDigit(rows[i][k])) {
        if (previousWasNumber) {
          // if previous number was one, and current is 0, interpret as 10 and not 1 and 0.
          if (rows[i][k-1] === '1' && rows[i][k] == '0') {
              // just need to add 9 to make up a count of 10, since previous iteration should have added 1 already
              sumFields += 9
              continue
          }
          else {
            return {
              ok: false,
              error: 'Invalid FEN: piece data is invalid (consecutive number found that is not 10)',
            }
          }
          
        }
        sumFields += parseInt(rows[i][k], 10)
        previousWasNumber = true
      } else {
        if (!/^[prunmbqgkPMURNBQKG]$/.test(rows[i][k])) {
          return {
            ok: false,
            error: 'Invalid FEN: piece data is invalid (invalid piece)',
          }
        }
        sumFields += 1
        previousWasNumber = false
      }
    }
    if (sumFields !== 10) {
      return {
        ok: false,
        error: 'Invalid FEN: piece data is invalid (too many/few squares in rank)',
      }
    }
  }

  // 9th criterion: is en-passant square legal (for the right colour)?
  if (
    (tokens[2][1] == '4' && tokens[1] == 'w') ||
    (tokens[2][1] == '7' && tokens[1] == 'b')
  ) {
    return { ok: false, error: 'Invalid FEN: illegal en-passant square' }
  }

  // 10th criterion: is there a maximum of 1 unite pieces?
  const uniteRegex = /[Uu]/g;
  const hasUnite = uniteRegex.test(tokens[0]);
  if (hasUnite) {
    const uniteCount = (tokens[0].match(uniteRegex) || []).length;
    if (uniteCount > 1) {
      return { ok: false, error: `Invalid FEN: ${uniteCount} unite pieces found, instead of 1` }
    }
  }
  else {
    // 11th criterion: does chess position contain exact two kings?
    const kings = [
      { color: 'white', regex: /K/g },
      { color: 'black', regex: /k/g },
    ]

    for (const { color, regex } of kings) {
      if (!regex.test(tokens[0])) {
        console.log("Errored FEN: ", tokens[0]);
        return { ok: false, error: `Invalid FEN: missing ${color} king` }
      }

      if ((tokens[0].match(regex) || []).length > 1) {
        console.log("Errored FEN: ", tokens[0]);
        return { ok: false, error: `Invalid FEN: too many ${color} kings` }
      }
    }
  }

  // 12th criterion: are any pawns on the first or tenth rows?
  if (
    Array.from(rows[0] + rows[9]).some((char) => char.toUpperCase() === 'P')
  ) {
    return {
      ok: false,
      error: 'Invalid FEN: some pawns are on the edge rows',
    }
  }

  return { ok: true }
}

// this function is used to uniquely identify ambiguous moves
function getDisambiguator(move: InternalMove, moves: InternalMove[]) {
  const from = move.from
  const to = move.to
  const piece = move.piece

  let ambiguities = 0
  let sameRank = 0
  let sameFile = 0

  for (let i = 0, len = moves.length; i < len; i++) {
    const ambigFrom = moves[i].from
    const ambigTo = moves[i].to
    const ambigPiece = moves[i].piece

    /*
     * if a move of the same piece type ends on the same to square, we'll need
     * to add a disambiguator to the algebraic notation
     */
    if (piece === ambigPiece && from !== ambigFrom && to === ambigTo) {
      ambiguities++

      if (rank(from) === rank(ambigFrom)) {
        sameRank++
      }

      if (file(from) === file(ambigFrom)) {
        sameFile++
      }
    }
  }

  if (ambiguities > 0) {
    if (sameRank > 0 && sameFile > 0) {
      /*
       * if there exists a similar moving piece on the same rank and file as
       * the move in question, use the square as the disambiguator
       */
      return algebraic(from)
    } else if (sameFile > 0) {
      /*
       * if the moving piece rests on the same file, use the rank symbol as the
       * disambiguator
       */
      return algebraic(from).charAt(1)
    } else {
      // else use the file symbol
      return algebraic(from).charAt(0)
    }
  }

  return ''
}

function addMove(
  moves: InternalMove[],
  color: Color,
  from: number,
  to: number,
  piece: PieceSymbol,
  captured: PieceSymbol | undefined = undefined,
  flags: number = BITS.NORMAL,
) {
  const r = rank(to)
  // don't push duplicate moves
  if (moves.includes({color,from,to,piece,captured,flags})) {
    return;
  }
  
  if (piece === PAWN && (r === RANK_1 || r === RANK_10)) {
    for (let i = 0; i < PROMOTIONS.length; i++) {
      const promotion = PROMOTIONS[i]
      moves.push({
        color,
        from,
        to,
        piece,
        captured,
        promotion,
        flags: flags | BITS.PROMOTION,
      })
    }
  } else {
    moves.push({
      color,
      from,
      to,
      piece,
      captured,
      flags,
    })
  }
}

// function inferPieceType(san: string) {
//   let pieceType = san.charAt(0)
//   if (pieceType >= 'a' && pieceType <= 'j') {
//     const matches = san.match(/[a-j]\d.*[a-j]\d/)
//     if (matches) {
//       return undefined
//     }
//     return PAWN
//   }
//   // pieceType = pieceType.toLowerCase() // for castling
//   // if (pieceType === 'o') {
//   //   return KING
//   // }
//   return pieceType as PieceSymbol
// }

// // parses all of the decorators out of a SAN string
// function strippedSan(move: string) {
//   return move.replace(/=/, '').replace(/[+#]?[?!]*$/, '')
// }

function trimFen(fen: string): string {
  /*
   * remove last two fields (HalfMove and fullmove) in FEN string as they're not needed when checking
   * for repetition
   */
  return fen.split(' ').slice(0, 3).join(' ')
}

export class Chess {
  private _board = new Array<Piece>(100)
  private _turn: Color = WHITE
  private _header: Record<string, string> = {}
  private _kings: Record<Color, number> = { w: EMPTY, b: EMPTY } // square that kings are on
  private _queens: Record<Color, number> = { w: EMPTY, b: EMPTY } // square that queens are on
  private _kingControllers: Record<Color, Color> = { w: BLACK, b: WHITE } // who controls white and black kings?
  private _epSquare = -1
  private _halfMoves = 0
  private _moveNumber = 0
  private _history: History[] = []
  private _comments: Record<string, string> = {}
  // private _castling: Record<Color, number> = { w: 0, b: 0 }
  private _positionCounts: Record<string, number> = {}
  private _isStalemate: boolean = false;

  constructor(fen = DEFAULT_POSITION) {
    // this.load(fen=fen,{skipValidation: true});

    // preserve headers to save repetition counts
    // this.load(fen=fen, {preserveHeaders:true});
    this.load(fen=fen);
    console.log("FEN: ", fen);
    console.log("RepetitionCount:",this._positionCounts);

    
    // this._updateKingControls();
    // console.log(this._kingControllers);
    // console.log(`Turn ${this._moveNumber}. Legal moves for ${this._turn === BLACK ? "black" : "white"}:`, this.moves({verbose: true, xray: false}));
  }

  private _getKingQueenPos() {
    for (let i = SquareCode.a10; i <= SquareCode.j1; i++) {
      if (this._board[i]) {
        if(this._board[i].type === KING) {
          let pieceColor = this._board[i].color;
          // console.log(pieceColor + " king at " + i);
          // pieceColor === BLACK ? this._kings.b = i : this._kings.w = i;
          this._kings[pieceColor] = i;
          // console.log("getKingQueenPos: " + " king pos:" + this._kings[pieceColor]);
        }
        if(this._board[i].type === QUEEN) {
          let pieceColor = this._board[i].color;
          // console.log(pieceColor + " queen at " + i);
          // pieceColor === BLACK ? this._queens.b = i : this._queens.w = i;
          this._queens[pieceColor] = i;
          // console.log("getKingQueenPos: " + " queen pos:" + this._queens[pieceColor]);
        }
      }
    }
  }

  clear({ preserveHeaders = false } = {}) {
    this._board = new Array<Piece>(100)
    this._kings = { w: EMPTY, b: EMPTY }
    this._queens = { w: EMPTY, b: EMPTY }
    this._kingControllers = { w: BLACK, b: WHITE}
    this._updateKingControls();
    this._turn = WHITE
    // this._castling = { w: 0, b: 0 }
    this._epSquare = EMPTY
    this._halfMoves = 0
    this._moveNumber = 1
    this._history = []
    this._comments = {}
    this._header = preserveHeaders ? this._header : {}

    /*
     * Delete the SetUp and FEN headers (if preserved), the board is empty and
     * these headers don't make sense in this state. They'll get added later
     * via .load() or .put()
     */
    delete this._header['SetUp']
    delete this._header['FEN']

    /*
     * Instantiate a proxy that keeps track of position occurrence counts for the purpose
     * of repetition checking. The getter and setter methods automatically handle trimming
     * irrelevent information from the fen, initialising new positions, and removing old
     * positions from the record if their counts are reduced to 0.
     */
    this._positionCounts = new Proxy({} as Record<string, number>, {
      get: (target, position: string) =>
        position === 'length'
          ? Object.keys(target).length // length for unit testing
          : target?.[trimFen(position)] || 0,
      set: (target, position: string, count: number) => {
        const trimmedFen = trimFen(position)
        if (count === 0) delete target[trimmedFen]
        else target[trimmedFen] = count
        return true
      },
    })
  }

  removeHeader(key: string) {
    if (key in this._header) {
      delete this._header[key]
    }
  }

  load(fen: string, { skipValidation = false, preserveHeaders = false } = {}) {
    let tokens = fen.split(/\s+/)

    // append commonly omitted fen tokens
    if (tokens.length >= 2 && tokens.length < 5) {
      const adjustments = ['-', '-', '0', '1']
      fen = tokens.concat(adjustments.slice(-(5 - tokens.length))).join(' ')
    }

    tokens = fen.split(/\s+/)

    if (!skipValidation) {
      const { ok, error } = validateFen(fen)
      if (!ok) {
        throw new Error(error)
      }
    }

    const position = tokens[0]
    let square = 0

    this.clear({ preserveHeaders })

    for (let i = 0; i < position.length; i++) {
      const piece = position.charAt(i)
      if (piece === '/') {
        // square += 10 // add nothing as there is only a 100 square board
        continue
      } else if (isDigit(piece)) {
        // console.log(`${piece} is digit`);
        // check for '1' '0' for 10 digit
        if (piece === '1' && i+1 < position.length && position.charAt(i+1) == '0') {
          square += 10
          i += 1
          continue
        }
        square += parseInt(piece, 10)
      } else {
        const color = piece < 'a' ? WHITE : BLACK // check ascii for uppercase letters for white
        // console.log(`Putting ${piece} on ${algebraic(square)} ${square}`);
        
        this._put(
          { type: piece.toLowerCase() as PieceSymbol, color },
          algebraic(square),
        )
        square++
      }
    }

    this._turn = tokens[1] as Color

    this._epSquare = tokens[2] === '-' ? EMPTY : SquareCode[tokens[2] as Square]
    this._halfMoves = parseInt(tokens[3], 10)
    this._moveNumber = parseInt(tokens[4], 10)

    this._updateSetup(fen)
    this._positionCounts[fen]++
  }

  fen() {
    let empty = 0
    let fen = ''
    let count = 0
    for (let i = SquareCode.a10; i <= SquareCode.j1; i++) {
      // if there is a piece on this square
      if (this._board[i]) {
        if (empty >0) {
          fen += empty;
          empty = 0;
        }
        const { color, type: piece } = this._board[i];
        fen += color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
      }
      else {
        empty++;
      }
      if (file(i) == 9 && i !== SquareCode.a10) {
        if (empty > 0) {
          fen += empty;
        }
        empty = 0;
        if (i !== SquareCode.j1) {
          fen += '/';
        }
        
      }
      //console.log(fen);
    }

    let epSquare = '-'
    /*
     * only print the ep square if en passant is a valid move (pawn is present
     * and ep capture is not pinned)
     */
    if (this._epSquare !== EMPTY) {
      // const bigPawnSquare = this._epSquare + (this._turn === WHITE ? 16 : -16)
      const bigPawnSquare = this._epSquare + (this._turn === WHITE ? 10 : -10)
      const squares = [bigPawnSquare + 1, bigPawnSquare - 1]

      for (const square of squares) {
        // is the square off the board?
        // if (square & 0x88) {
        //   continue
        // }
        if (!(Math.abs(rank(square) - rank(bigPawnSquare)) <= 1)) continue;

        const color = this._turn

        // is there a pawn that can capture the epSquare?
        if (
          this._board[square]?.color === color &&
          this._board[square]?.type === PAWN
        ) {
          // if the pawn makes an ep capture, does it leave it's king in check?
          // this._makeMove({
          //   color,
          //   from: square,
          //   to: this._epSquare,
          //   piece: PAWN,
          //   captured: PAWN,
          //   flags: BITS.EP_CAPTURE,
          // })
          // // const isLegal = !this._isKingAttacked(color)
          // // const isLegal = (!(this._isQueenAttacked(color) && this._canKingReuniteQueen(swapColor(color))));
          // this._undoMove()
          epSquare = algebraic(this._epSquare)

          // if ep is legal, break and set the ep square in the FEN output
          // if (isLegal) {
          //   epSquare = algebraic(this._epSquare)
          //   break
          // }
          // epSquare = algebraicut(this._epSquare)
          // break
          
        }
      }
    }

    return [
      fen,
      this._turn,
      // castling,
      epSquare,
      this._halfMoves,
      this._moveNumber,
    ].join(' ')
  }

  /*
   * Called when the initial board setup is changed with put() or remove().
   * modifies the SetUp and FEN properties of the header object. If the FEN
   * is equal to the default position, the SetUp and FEN are deleted the setup
   * is only updated if history.length is zero, ie moves haven't been made.
   */
  private _updateSetup(fen: string) {
    if (this._history.length > 0) return

    if (fen !== DEFAULT_POSITION) {
      this._header['SetUp'] = '1'
      this._header['FEN'] = fen
    } else {
      delete this._header['SetUp']
      delete this._header['FEN']
    }
  }

  reset() {
    this.load(DEFAULT_POSITION)
  }

  get(square: Square) {
    return this._board[SquareCode[square]] || false
  }

  put({ type, color }: { type: PieceSymbol; color: Color }, square: Square) {
    if (this._put({ type, color }, square)) {
      // this._updateCastlingRights()
      this._updateEnPassantSquare();
      this._updateKingControls();
      this._updateSetup(this.fen());
      return true
    }
    return false
  }

  private _put(
    { type, color }: { type: PieceSymbol; color: Color },
    square: Square,
  ) {
    // console.log("Putting piece in _put");
    // check for piece
    if (SYMBOLS.indexOf(type.toLowerCase()) === -1) {
      return false
    }

    // check for valid square
    if (!(square in SquareCode)) {
      return false
    }

    const sq = SquareCode[square]

    // don't let the user place more than one king
    if (
      type == KING &&
      !(this._kings[color] == EMPTY || this._kings[color] == sq)
    ) {
      return false
    }

    const currentPieceOnSquare = this._board[sq]

    // if one of the kings will be replaced by the piece from args, set the `_kings` respective entry to `EMPTY`
    if (currentPieceOnSquare && currentPieceOnSquare.type === KING) {
      this._kings[currentPieceOnSquare.color] = EMPTY
    }

    this._board[sq] = { type: type as PieceSymbol, color: color as Color }

    if (type === KING) {
      this._kings[color] = sq
    }

    return true
  }

  remove(square: Square) {
    const piece = this.get(square);
    delete this._board[SquareCode[square]];
    if (piece && piece.type === KING) {
      this._kings[piece.color] = EMPTY;
    }
    if (piece && piece.type === QUEEN) {
      this._queens[piece.color] = EMPTY;
    }

    // this._updateCastlingRights()
    this._updateEnPassantSquare();
    this._updateKingControls();
    this._updateSetup(this.fen());

    return piece;
  }

  private _updateEnPassantSquare() {
    if (this._epSquare === EMPTY) {
      return
    }

    // const startSquare = this._epSquare + (this._turn === WHITE ? -16 : 16)
    // const currentSquare = this._epSquare + (this._turn === WHITE ? 16 : -16)
    const startSquare = this._epSquare + (this._turn === WHITE ? -10 : 10)
    const currentSquare = this._epSquare + (this._turn === WHITE ? 10 : -10)
    const attackers = [currentSquare + 1, currentSquare - 1]

    if (
      this._board[startSquare] !== null ||
      this._board[this._epSquare] !== null ||
      this._board[currentSquare]?.color !== swapColor(this._turn) ||
      this._board[currentSquare]?.type !== PAWN
    ) {
      this._epSquare = EMPTY
      return
    }

    const canCapture = (square: number) =>
      // !(square & 0x88) &&
      (Math.abs(rank(startSquare) - rank(currentSquare)) <= 1) &&
      this._board[square]?.color === this._turn &&
      this._board[square]?.type === PAWN

    if (!attackers.some(canCapture)) {
      this._epSquare = EMPTY
    }
  }

  private _updateKingControls() {
    this._getKingQueenPos();
    let whiteKingPos = this._kings[WHITE];
    let blackKingPos = this._kings[BLACK];

    let blackAttacksWhiteKing = this._numTimesAttacked({color: BLACK, square: whiteKingPos, xray: true});
    let whiteAttacksWhiteKing = this._numTimesAttacked({color: WHITE, square: whiteKingPos, xray: true});

    let whiteAttacksBlackKing = this._numTimesAttacked({color: WHITE, square: blackKingPos, xray: true});
    let blackAttacksBlackKing = this._numTimesAttacked({color: BLACK, square: blackKingPos, xray: true});

    // Compare number of times black and white attack the white king
    if (whiteAttacksWhiteKing >= blackAttacksWhiteKing) {
      this._kingControllers[WHITE] = WHITE;
    }
    else {
      this._kingControllers[WHITE] = BLACK;
    }

    if (blackAttacksBlackKing >= whiteAttacksBlackKing) {
      this._kingControllers[BLACK] = BLACK;
    }
    else {
      this._kingControllers[BLACK] = WHITE;
    }
    // console.log(`Black attacks black king: ${blackAttacksBlackKing}`);
    // console.log(`Black attacks white king: ${blackAttacksWhiteKing}`);
    // console.log(`White attacks black king: ${whiteAttacksBlackKing}`);
    // console.log(`White attacks white king: ${whiteAttacksWhiteKing}`);
    // console.log("King controllers: ");
    // console.log(this._kingControllers);
  }

  // Does a piece on square1 attack a piece on square2?
  private _squareAttacks(square1index: number, square2index: number): boolean {
    const {type, color} = this._board[square1index];
    if (type === PAWN) {
      if ((PAWN_OFFSETS[color][2]+square1index === square2index ||
          PAWN_OFFSETS[color][3]+square1index === square2index) &&(
          (Math.abs(rank(square1index) - rank(square2index)) <= 1))) {
            return true;
          }
    }
    else {
      const moves = this._moves({square: algebraic(square1index)});
    
      for (let i=0; i<moves.length; i++) {
        if(moves[i].to === square2index) {
          return true;
        }
      }
    }
    return false;
  }
  // color = attacking color
  private _numTimesAttacked({color,square,xray}: {color: Color, square: number,xray: boolean}): number {
    let numTimesAttacked = 0;
    const moves = this._generateMoves({xray: xray, moveColor: color});

    // get all non-pawn moves
    for (let i=0; i<moves.length; i++){     
      if (moves[i].to === square) {
        numTimesAttacked++;
      }
    }
    // get pawn attacks
    for (let from = SquareCode.a10; from <= SquareCode.j1; from++) {
      // empty square or piece not in our control, skip
      if(!this._board[from]) {
        continue;
      }
      else if(this._board[from].type === PAWN && this._board[from].color === color) {
        if(square === (from+PAWN_OFFSETS[color][2]) || square === (from+PAWN_OFFSETS[color][3])) {
          numTimesAttacked++;
        }
      }
    }

    return numTimesAttacked;
  }

  // private _isKingAttacked(kingColor: Color) {
  //   const square = this._kings[kingColor];
  //   return square === -1 ? false : this._numTimesAttacked(swapColor(kingColor), square)
  // }
  private _canKingReuniteQueen(kingColor: Color) {
    const kingSquare = this._kings[kingColor];
    const queenSquare = this._queens[kingColor];
    return (kingSquare === -1  || queenSquare === -1) ? false : 
    (this._squareAttacks(queenSquare, kingSquare));
  }

  private _isQueenAttacked(queenColor: Color) {
    const square = this._queens[queenColor];

    return square === -1 ? false : this._numTimesAttacked({color:swapColor(queenColor), square: square, xray: false});
  }

  // isAttacked(square: Square, attackedBy: Color): boolean {
  //   return (this._numTimesAttacked({color: attackedBy, square: SquareCode[square], xray: false}) > 0) ? true : false;
  // }

  // isCheck() {
  //   return (this._canKingReuniteQueen(BLACK) || 
  //           this._isQueenAttacked(BLACK) || 
  //           this._canKingReuniteQueen(WHITE) || 
  //           this._isQueenAttacked(WHITE));
  // }

  // inCheck(colour:Color=this._turn): boolean {
  //   const otherColour = swapColor(colour);
  //   // console.log(colour + " can kingreuniteQueen: " + this._canKingReuniteQueen(colour));
  //   // console.log(colour + " can queenBeTaken: " + this._isQueenAttacked(colour));
  //   // console.log(otherColour + " can kingreuniteQueen: " + this._canKingReuniteQueen(otherColour));
  //   // console.log(otherColour + " can queenBeTaken: " + this._isQueenAttacked(otherColour));
  //   return (this._canKingReuniteQueen(colour) || <boolean>this._isQueenAttacked(colour));
  // }

  isUniteMate() {
    return this.fen().toLowerCase().includes('u') ? true : false;
  }

  isQueenTakenMate() {
    // return this._queens.b === -1 || this._queens.w === -1;
    // check for 2 queens in FEN
    return (this.fen().toLowerCase().split('q').length - 1) !== 2;
  }

  isCheckmate() {
    return this.isUniteMate() || this.isQueenTakenMate();
  }

  isStalemate() {
    // return !this.isCheckmate() && this._moves().length === 0
    return this._isStalemate;
  }

  private _getRepetitionCount() {
    return this._positionCounts[this.fen()]
  }

  isThreefoldRepetition(): boolean {
    return this._getRepetitionCount() >= 3
  }

  isDraw() {
    if (      this._halfMoves >= 100 || // 50 moves per side = 100 half moves
    this.isStalemate() ||
    this.isThreefoldRepetition()) {
      console.log("GAME IS A DRAW");
    }
    
    return (
      this._halfMoves >= 100 || // 50 moves per side = 100 half moves
      this.isStalemate() ||
      this.isThreefoldRepetition()
    )
  }

  isGameOver() {
    return this.isCheckmate() || this.isStalemate() || this.isDraw()
  }

  // does the specified colour control the piece at given square?
  pieceInControlByColour(colour: Color, square: number): boolean {
    if (!this._board[square]) {
      return false;
    }
    const { type, color } = this._board[square];
    // check if specified colour controls king
    if (type === KING) {
      if (this._kingControllers[color] === colour) {
        return true;
      }
    }
    // same colour pieces are controlled by player
    else if (color === colour) {
      return true;
    }
    return false;
  }

  // Used for detecting attacks through blocking pieces. Finds what common squares do two piece attack?
  // private _intersectionOfAttackingSquares(aSquare: number, bSquare: number, offset: number, a: Set<number>, b: Set<number>) {
  //   console.log("a: ",a);
  //   console.log("b:", b);
  //   const intersection = new Set([...a].filter(x => b.has(x)));
  //   const sameDirection = new Set([...intersection].filter(x => Math.abs(x-aSquare) % offset === 0));
  //   console.log("intersection of attacks for square: ", aSquare , " through square: ", bSquare);
  //   console.log(sameDirection);
  //   return sameDirection;
  //   // return intersection;
  // }
  private _intersectionOfSets(set1: Set<any>, set2: Set<any>): Set<any> {
    return new Set([...set1].filter(x => set2.has(x)));
  } 
  private _unionOfSets(set1: Set<any>, set2: Set<any>): Set<any> {
    return new Set([...set1, ...set2]);
  } 
  
  private _attacksInDirectionOnEmptyBoard(from: number, offset: number): Set<number>{
    let moves = new Set<number>();
    // empty square, return empty set
    if (!this._board[from]) {
      return moves;
    }
    const { type, color } = this._board[from];
    
    let to: number;
    
    let offsetList: number[];
    // get index of direction in OFFSETS
    if (type === PAWN) {
      offsetList = PAWN_OFFSETS[color].slice(2,4);
    }
    else {
      offsetList = PIECE_OFFSETS[type];
    }
    let index = offsetList.indexOf(offset);

    // is the current offset legal for this piece?
    if (index >=0) {
      if (type === PAWN) {
        to = from + offsetList[index];

        // ensure to is on the board and subtraction doesn't wrap over to next row
        if (!(to >=0 && to <= 99 && (Math.abs(rank(from) - rank(to)) <= 1) && Math.abs(file(from) - file(to)) <= 1)) return moves;

        // legal move, add to set
        moves.add(to);
        return moves;
      }
      else {
        to = from;
        let count = 0
        while (true) {
          to += offset
          count +=1
          // if (to & 0x88) break
          const notSameRank = Math.abs(rank(from) - rank(to)) > 0;
          const notSameFile = Math.abs(file(from) - file(to)) > 0;
          // need to account for going off the edge of board
          if (type === KING && (Math.abs(file(from) - file(to)) > 1 || Math.abs(rank(from) - rank(to)) > 1)) break;

          // check that knight movement doesn't go out of bounds
          if (type === KNIGHT ) {
            const absDifference = Math.abs(from - to)
            if ((absDifference === 19 || absDifference === 21 || absDifference === 8 || absDifference === 12) 
                && Math.abs(file(from) - file(to)) > 2) break;
          }

          // horizontal movement must stay on same rank
          if (Math.abs(offset) === 1 && notSameRank) break;

          // vertical movement must stay on same file
          if (Math.abs(offset) === 10 && notSameFile) break;
          
          // diagonal movement must not be on same file or rank
          const diagonal = Math.abs(offset) === 9 || Math.abs(offset) === 11;
          if (diagonal && (Math.abs(rank(from) - rank(to)) !== count || Math.abs(file(from) - file(to)) !== count)) break;

          if (!(to >=0 && to <= 99)) break;

          moves.add(to);

          /* break, if knight, minister or king to avoid recounting offsets */
          if (type === KNIGHT || type === KING || (type === MINISTER && count >=2)) break
        }
      }
    }
    return moves; // empty set if offset not legal for piece, or the to spaces if legal

  }

  // searches through the legal moves and returns all moves that don't jump over pieces
  private _movesFromAtoB(from: number, legalMovesEmptyBoard: Set<number>, offset: number): [Set<number>, number] {
    let moves = new Set<number>();
    const color = this.pieceInControlByColour(WHITE,from) ? WHITE : BLACK;
    let to = from;
    while(legalMovesEmptyBoard.has(to + offset)) {
      to = to + offset;
      if (!this._board[to]) {
        moves.add(to);
      }
      // opponent piece that is not KING
      else if (this.pieceInControlByColour(swapColor(color),to) && this._board[to].type !== KING){
        // can take the attacking square
        moves.add(to);
        break;
      }

      else if (this._board[to].type === KING && this._board[from].type === QUEEN && this._board[from].color === this._board[to].color  || 
        this._board[to].type === QUEEN && this._board[from].type === KING && this._board[from].color === this._board[to].color) {
        moves.add(to);
        break;
      }
      
      // own piece blocking
      else {
        break;
      }
    }
    
    return [moves,to]; // where to is considered as "last move"
  }

  private _convertSquareSetToInternalMoves(from: number, setAtoB: Set<number>, moveColor: Color, moveType: PieceSymbol, xray: boolean) {
    let moves: InternalMove[] = [];
    for(let to of setAtoB) {
      if (!this._board[to]) {
        addMove(moves,moveColor,from,to,moveType);
      }
      else if ((this._board[to].type === KING && this._board[from].type === QUEEN || 
                this._board[to].type === QUEEN && this._board[from].type === KING) &&
                this._board[from].color === moveColor && this._board[to].color === moveColor) {
          addMove(moves,moveColor,from,to,moveType,this._board[to].type,BITS.UNITE);
          // addMove(moves,moveColor,from,to,moveType,this._board[to].type, BITS.CAPTURE);
          // addMove(moves,moveColor,from,to,moveType,undefined,BITS.UNITE);
      }
      // else if (this._board[to].type === QUEEN && this._board[from].color === swapColor(moveColor)) {
      //   addMove(moves,moveColor,from,to,moveType,this._board[to].type,BITS.QTAKE_WIN);
      // }
      else if (this._board[to].type !== KING) {
        // piece here is capturable
        addMove(moves,moveColor,from,to,moveType,this._board[to].type,BITS.CAPTURE);
      }

      else if (xray) {
        addMove(moves,moveColor,from,to,moveType);
      }
    }
    return moves;
  }

  // recursive function if xray to include blocking
  private _getMovesForPieceInDirection(from: number, offset: number, legalMovesEmptyBoard: Set<number>, xray: boolean): InternalMove[] {
    let moves: InternalMove[] = [];
    // if (xray) {
    //   moves = new Set<number>();
    // }
    // else {
    //   moves = [];
    // }
    // empty square, return empty set
    if (!this._board[from]) {
      return moves;
    }
    const { type, color } = this._board[from];

    // moves in direction
    const Amoves = legalMovesEmptyBoard;

    // moves from square A to square B in same direction
    // Bsquare is last item in AtoB
    const [AtoB,Bsquare] = this._movesFromAtoB(from, Amoves, offset);
    // console.log("AtoB:", AtoB);

    moves = this._convertSquareSetToInternalMoves(from, AtoB,color,type,xray);
    // console.log("AtoB moves:", moves);

    // moves are just movesFromAtoB if we don't want xray or if there are no other moves in range
    if (!xray || Bsquare === from) {
      return moves;
    }
    
    // let BsquareSet = new Set<number>().add(Bsquare);

    // add to xray list move that attacks blocking piece
    if (this._board[Bsquare] && this.pieceInControlByColour(swapColor(color),Bsquare)){
      addMove(moves,color,from,Bsquare,type,this._board[Bsquare].type,BITS.CAPTURE);
      return moves;
    }
    else if (this._board[Bsquare]) {
      addMove(moves,color,from,Bsquare,type,this._board[Bsquare].type,BITS.CAPTURE);
    }
    

    // console.log("Bsquare:",Bsquare);

    const Bmoves = this._attacksInDirectionOnEmptyBoard(Bsquare,offset);
    // console.log("Bmoves:",Bmoves);

    let B_onwards = new Set<number>();
    const AandB = this._intersectionOfSets(Amoves,Bmoves);

    // console.log("AandB:",AandB);
    for (let value of AandB) {
      B_onwards.add(value);
      if (!this._board[value]) {
        continue;
      }
      // opponent piece
      else if (this.pieceInControlByColour(swapColor(color),value)) {
        break;
      }
      else {
        // another own piece blocking (C), get AandBtoC union Csquare
        const B_nextList = this._getMovesForPieceInDirection(Bsquare, offset, AandB,true); // recursive
        // get to locations
        const B_nextTo = B_nextList.map(obj => obj.to);
        const B_next: Set<number> = new Set<number>(B_nextTo);
        // console.log("B square:",Bsquare, " B_next: ", B_next);
        // console.log("B square:",Bsquare, "First B_onwards:",B_onwards);
        B_onwards = this._unionOfSets(B_onwards,B_next);
        // if (B_next instanceof Set) {
        //   B_onwards = this._unionOfSets(B_onwards,B_next);
        // }
        break; // stop looping through rest of values
      }
    }
    // console.log("B square:",Bsquare, "B_onwards:",B_onwards);

    moves = [...moves, ...this._convertSquareSetToInternalMoves(from,B_onwards,color,type,xray)];

    // return this._intersectionOfSets(AtoB,B_onwards);
    // console.log("Xray moves for piece on square: ", from, ": ", moves);
    return moves;
  }

  // Returns a set of legal attacking moves of the piece on the given (from) squareNumber on a board with no other pieces
  // private _attacksOnEmptyBoard(from: number): Set<number>{
  //   let moves = new Set<number>();
  //   // empty square, return empty set
  //   if (!this._board[from]) {
  //     return moves;
  //   }
  //   const { type, color } = this._board[from];
    
  //   let to: number;
  //   // pawn is special case because not all legal moves are attacking moves
  //   if (type === PAWN) {
  //     // pawn captures
  //     for (let j = 2; j < 4; j++) {
  //       to = from + PAWN_OFFSETS[color][j];

  //       // ensure to is on the board and subtraction doesn't wrap over to next row
  //       if (!(to >=0 && to <= 99 && (Math.abs(rank(from) - rank(to)) <= 1) && Math.abs(file(from) - file(to)) <= 1)) continue;

  //       // legal move, add to set
  //       moves.add(to);
  //     }
  //   }
  //   else {
  //     // piece  is not a pawn, check all directions for next move
  //     for (let j = 0, len = PIECE_OFFSETS[type].length; j < len; j++) {
  //       const offset = PIECE_OFFSETS[type][j];

  //       to = from;
  //       let count = 0
  //       while (true) {
  //         to += offset
  //         count +=1
  //         // if (to & 0x88) break
  //         const notSameRank = Math.abs(rank(from) - rank(to)) > 0;
  //         const notSameFile = Math.abs(file(from) - file(to)) > 0;
  //         // need to account for going off the edge of board
  //         if (type === KING && (Math.abs(file(from) - file(to)) > 1 || Math.abs(rank(from) - rank(to)) > 1)) break;

  //         // check that knight movement doesn't go out of bounds
  //         if (type === KNIGHT ) {
  //           const absDifference = Math.abs(from - to)
  //           if ((absDifference === 19 || absDifference === 21 || absDifference === 8 || absDifference === 12) 
  //               && Math.abs(file(from) - file(to)) > 2) break;
  //         }

  //         // horizontal movement must stay on same rank
  //         if (Math.abs(offset) === 1 && notSameRank) break;

  //         // vertical movement must stay on same file
  //         if (Math.abs(offset) === 10 && notSameFile) break;
          
  //         // diagonal movement must not be on same file or rank
  //         const diagonal = Math.abs(offset) === 9 || Math.abs(offset) === 11;
  //         if (diagonal && (Math.abs(rank(from) - rank(to)) !== count || Math.abs(file(from) - file(to)) !== count)) break;

  //         if (!(to >=0 && to <= 99)) break;

  //         moves.add(to);

  //         /* break, if knight, minister or king to avoid recounting offsets */
  //         if (type === KNIGHT || type === KING || (type === MINISTER && count >=2)) break
  //       }
  //     }
  //   } 
  //   return moves;  
  // }


  //moves(): string[]
  //moves({ square }: { square: Square }): string[]
  //moves({ piece }: { piece: PieceSymbol }): string[]

  //moves({ square, piece }: { square: Square; piece: PieceSymbol }): string[]

  moves({ verbose, square }: { verbose: true; square?: Square }): Move[]
 // moves({ verbose, square }: { verbose: false; square?: Square }): string[]
  // moves({
  //   verbose,
  //   square,
  // }: {
  //   verbose?: boolean
  //   square?: Square
  // }): string[] | Move[]

  moves({ verbose, piece }: { verbose: true; piece?: PieceSymbol }): Move[]
  //moves({ verbose, piece }: { verbose: false; piece?: PieceSymbol }): string[]
  // moves({
  //   verbose,
  //   piece,
  // }: {
  //   verbose?: boolean
  //   piece?: PieceSymbol
  // }): string[] | Move[]

  moves({
    verbose,
    square,
    piece,
  }: {
    verbose: true
    square?: Square
    piece?: PieceSymbol
  }): Move[]
  // moves({
  //   verbose,
  //   square,
  //   piece,
  // }: {
  //   verbose: false
  //   square?: Square
  //   piece?: PieceSymbol
  // }): string[]
  // moves({
  //   verbose,
  //   square,
  //   piece,
  // }: {
  //   verbose?: boolean
  //   square?: Square
  //   piece?: PieceSymbol
  // }): string[] | Move[]

  moves({ square, piece }: { square?: Square; piece?: PieceSymbol }): Move[]
  moves({xray}: {xray?: boolean}): Move[]
  moves({verbose, xray}: {verbose?: boolean, xray?: boolean} ): Move[]

  moves({
    verbose = false,
    square = undefined,
    piece = undefined,
    color = this._turn,
    xray = false,
  }: { verbose?: boolean; 
       square?: Square; 
       piece?: PieceSymbol; 
       color?: Color | undefined;
       xray?: boolean;
    } = {}) {
    this._updateKingControls();
    if (verbose) {
      const moves = this._moves({ piece: piece, square: square, moveColor: color })
      return moves.map((move) => this._makePretty(move))
    }
    return this._moves({piece,square, moveColor: color, xray});
    // else {
    //   // Outputs a string
    //   return moves.map((move) => this._moveToSan(move, moves))
    // }
  }

  private _moves({
    legal = true, /* whether to return only legal moves */
    piece = undefined,
    square = undefined,
    moveColor = this._turn,
    xray = false, /* whether to include pieces that can see through another piece */
  }: {
    legal?: boolean
    piece?: PieceSymbol
    square?: Square
    moveColor?: Color | undefined
    xray?: boolean
  } = {}) {
    this._updateKingControls();
    return this._generateMoves({legal,piece,square,moveColor,xray});
  }


  private _generateMoves({
    legal = true, /* whether to return only legal moves */
    piece = undefined,
    square = undefined,
    moveColor = this._turn,
    xray = false, /* whether to include pieces that can see through another piece */
  }: {
    legal?: boolean
    piece?: PieceSymbol
    square?: Square
    moveColor?: Color | undefined
    xray?: boolean
  } = {}) {
    // only generate moves when game isn't over
    if (this.isCheckmate() || this.isDraw()) {
      return [];
    }

    const forSquare = square ? (square.toLowerCase() as Square) : undefined
    const forPiece = piece?.toLowerCase()

    let moves: InternalMove[] = []
    const us = moveColor
    const them = swapColor(us)

    let firstSquare = SquareCode.a10
    let lastSquare = SquareCode.j1
    let singleSquare = false

    // are we generating moves for a single square?
    if (forSquare) {
      // illegal square, return empty moves
      if (!(forSquare in SquareCode)) {
        return []
      } else {
        firstSquare = lastSquare = SquareCode[forSquare]
        singleSquare = true
      }
    }
    
    for (let from = firstSquare; from <= lastSquare; from++) {
      // empty square or piece not in our control, skip
      if (!this._board[from]) {
        continue;
      }
      if (this.pieceInControlByColour(us,from)) {
        
        const { type, color } = this._board[from];
        if (type === KING) {
          // console.log(us, " controls ", color, " king on ", from, ", generating moves for", moveColor);
        }
        
        let to: number
        if (type === PAWN) {
          if (forPiece && forPiece !== type) continue

          // single square, non-capturing
          to = from + PAWN_OFFSETS[us][0]
          if (!this._board[to]) {
            addMove(moves, color, from, to, PAWN)
            // double square
            to = from + PAWN_OFFSETS[us][1]
            // Make sure if double square, we're on the 2nd rank and next square is empty
            if (SECOND_RANK[us] === rank(from) && !this._board[to]) {
              addMove(moves, color, from, to, PAWN, undefined, BITS.BIG_PAWN);
            }
          }

          // pawn captures
          for (let j = 2; j < 4; j++) {
            to = from + PAWN_OFFSETS[us][j]
            // if (to & 0x88) continue
            // ensure to is on the board and subtraction doesn't wrap over to next row
            if (!(to >=0 && to <= 99 && (Math.abs(rank(from) - rank(to)) <= 1))) continue;

            if (this._board[to]?.color === them) {
              if (this._board[to]?.type === KING) continue
              addMove(
                moves,
                color,
                from,
                to,
                PAWN,
                this._board[to].type,
                BITS.CAPTURE,
              )
            } else if (to === this._epSquare) {
              addMove(moves, color, from, to, PAWN, PAWN, BITS.EP_CAPTURE);
            }
          }

        } 
        // else not a pawn
        else {
          // we found a piece that is not a pawn, check all directions for next move
          for (let j = 0, len = PIECE_OFFSETS[type].length; j < len; j++) {
            const offset = PIECE_OFFSETS[type][j];
            const movesEmptyBoard = this._attacksInDirectionOnEmptyBoard(from,offset);
            // console.log("Moves in direction: ", offset, "from: " , from, " : ", movesEmptyBoard);

            let pieceMoves = this._getMovesForPieceInDirection(from,offset,movesEmptyBoard,xray);
            // console.log("Piece moves from: ", from, ": ", pieceMoves);
            moves = [...moves, ...pieceMoves];
            // if (pieceMoves instanceof Set) {
            //   // getMovesForPiece returns set of items if xray
            //   for (let square of pieceMoves) {
            //     addMove(moves, color, from, square, type); // Consider adding a new flag: BITS.XRAY                    
            //   }
            // }
            // else {
            //   // pieceMoves returns a list of InternalMoves
            //   // combine with current list of moves
            //   moves.push(...pieceMoves);
            // }
                
          }


          // get all legal squares not including piece blockage
          // let rangingSquares = this._attacksOnEmptyBoard(from);
          
          // // we found a piece that is not a pawn, check all directions for next move
          // for (let j = 0, len = PIECE_OFFSETS[type].length; j < len; j++) {
          //   const offset = PIECE_OFFSETS[type][j];

          //   to = from;
          //   let count = 0
            
          //   // let blockingPieces: number[] = [];
          //   let currPieceRange: number[] = [];
          //   // loop until move is not legal (off the board)
          //   while (rangingSquares.has(to+offset)) {
          //     to = to+offset;
          //     // if there is a piece
          //     if (this._board[to]) {
          //       // if it is opponent colour, we can capture it.
          //       if (!this.pieceInControlByColour(us,to) && this._board[to].type !== KING) {
          //         addMove(moves,color,from,to,type,this._board[to].type,BITS.CAPTURE);
          //         break;
          //       }
          //       // case where KING unites QUEEN (WIN!)
          //       else if (this._board[to].type === KING && this._board[to].color === us && 
          //         this._board[from].type === QUEEN && this._board[from].color === us) {
          //         addMove(moves,color,from,to,type,this._board[to].type,BITS.UNITE_WIN);
          //         break;
          //       }
          //       // case where our piece takes their queen (WIN!)
          //       else if (to === this._queens[them]) {
          //         addMove(moves,color,from,to,type,this._board[to].type,BITS.QTAKE_WIN);
          //         break;
          //       }
          //       else if (!xray || !this.pieceInControlByColour(us,to)) break; // if we don't want to search through pieces, or piece not in our control
          //       else {
          //         /**********************
          //          * 
          //          * BEGIN XRAY
          //          * 
          //         ***********************/
          //         // no xray for king since it only has range of 1
          //         if (type === KING) {
          //           continue;
          //         }
                  
          //         // get rangingSquares for this blocking piece if xray on
          //         let blockingRangingSquares = this._attacksOnEmptyBoard(to);
                  
          //         // get intersection of blocking pieces
          //         let intersection = this._intersectionOfAttackingSquares(from,to,offset,rangingSquares,blockingRangingSquares);
          //         // also include the piece that is blocking space
          //         intersection.add(to);
                  
          //         // add each intersection add the move to movelist
          //         for (let square of intersection) {
          //           addMove(moves, color, from, square, type); // Consider adding a new flag: BITS.XRAY                    
          //         }
          //         break;
          //       }
                
          //     }
          //     // no piece blocking, add as possible move
          //     else {
          //       addMove(moves, color, from, to, type);
          //       currPieceRange.push(to);
          //     }          
            // }
          
        }

      }

      
    }
    const uniqueMoves = moves.reduce((result, item) => {
      const exists = result.some((existingItem) =>
          existingItem.from === item.from && 
          existingItem.to === item.to && 
          existingItem.promotion === item.promotion
      );
      if (!exists) {
          result.push(item);
      }
      return result;
  }, [] as InternalMove[]);
  
  if (uniqueMoves.length === 0 && singleSquare === false) {
    // Stalemate
    this._isStalemate = true;
  }
  // Now `uniqueMoves` contains objects where both attributes are not duplicate values.
  
    // return moves;
    // console.log("Unique moves:", uniqueMoves);
  return uniqueMoves;

    /*
     * return all pseudo-legal moves (this includes moves that allow the king
     * to be captured)
     */
    // if (!legal || this._kings[us] === -1) {
    //   return moves
    // }

    // // filter out illegal moves
    // const legalMoves = []

    // // TODO: add other illegal move conditions
    // for (let i = 0, len = moves.length; i < len; i++) {
    //   this._makeMove(moves[i])
    //   if (!(this._isQueenAttacked(us) && this._canKingReuniteQueen(them))) {
    //     legalMoves.push(moves[i])
    //   }
    //   this._undoMove()
    // }

    // return legalMoves
  }

  move(
    move: string | { from: string; to: string; promotion?: string },
    { strict = false }: { strict?: boolean } = {},
  ) {
    /*
     * The move function can be called with in the following parameters:
     *
     * .move('Nxb7')       <- argument is a case-sensitive SAN string
     *
     * .move({ from: 'h7', <- argument is a move object
     *         to :'h8',
     *         promotion: 'q' })
     * .move({ from: 17, <- argument is number relative to board array (in this case h9 to i9)
     *          to: 18
     *        })
     *
     *
     * An optional strict argument may be supplied to tell chess.js to
     * strictly follow the SAN specification.
     */

    let moveObj = null

    // if (typeof move === 'string') {
    //   moveObj = this._moveFromSan(move, strict)
    // } else 
    if (typeof move === 'object') {
        // this._updateKingControls();
        const moves = this._moves();
        console.log("move() moves:",moves);
        // convert the pretty move object to an ugly move object
        for (let i = 0, len = moves.length; i < len; i++) {
          if (isDigit(move.from) && isDigit(move.to)) {
            if ((Number(move.from) === Number(moves[i].from)) &&
              (Number(move.to) === Number(moves[i].to)) &&
              (!('promotion' in moves[i]) || move.promotion === moves[i].promotion)) {
                moveObj = moves[i]
              break
              }
          }
          else if (
            move.from === algebraic(moves[i].from) &&
            move.to === algebraic(moves[i].to) &&
            (!('promotion' in moves[i]) || move.promotion === moves[i].promotion)
          ) {
            moveObj = moves[i]
            break
          }
        }
      // }
    }
    // failed to find move
    if (!moveObj) {
      // if (typeof move === 'string') {
      //   throw new Error(`Invalid move: ${move}`)
      // } else {
      //   throw new Error(`Invalid move: ${JSON.stringify(move)}`)
      // }
      return null;
    }

    /*
     * need to make a copy of move because we can't generate SAN after the move
     * is made
     */
    const prettyMove = this._makePretty(moveObj)

    this._makeMove(moveObj)
    this._positionCounts[prettyMove.after]++
    return prettyMove
  }

  private _push(move: InternalMove) {
    this._history.push({
      move,
      kings: { b: this._kings.b, w: this._kings.w },
      queens: { b: this._queens.b, w: this._queens.w },
      turn: this._turn,
      // castling: { b: this._castling.b, w: this._castling.w },
      epSquare: this._epSquare,
      halfMoves: this._halfMoves,
      moveNumber: this._moveNumber,
    })
  }

  private _makeMove(move: InternalMove) {
    const us = this._turn
    const them = swapColor(us)
    this._push(move) // add move to history

    // Check for unite win
    if ((move.captured === KING && move.piece === QUEEN) || (move.captured === QUEEN && move.piece === KING)) {
      if (this._board[move.to] && this._board[move.to].color === this._board[move.from].color) {
        // console.log("unite win!!");
        this._board[move.to] = { type: UNITE, color: move.color };
        
        // delete this._board[move.from];
      }
      
    }
    else {
      this._board[move.to] = this._board[move.from]
      // if we moved the king
      if (this._board[move.to].type === KING) {
        this._kings[us] = move.to;
        // console.log(us + " king moved to: " +  this._kings[us]);
      }
      // if we moved the queen
      if (this._board[move.to].type === QUEEN) {
        this._queens[us] = move.to;
        // console.log(us + " queen moved to: " +  this._queens[us]);
      }
    }

    if (move.flags & BITS.QTAKE_WIN) {
      // alert(us + " took " + them + " queen. \n" + us + " wins!");
    }

    delete this._board[move.from]

    // if ep capture, remove the captured pawn
    if (move.flags & BITS.EP_CAPTURE) {
      if (this._turn === BLACK) {
        // delete this._board[move.to - 16]
        delete this._board[move.to - 10]
      } else {
        // delete this._board[move.to + 16]
        delete this._board[move.to + 10]
      }
    }

    // if pawn promotion, replace with new piece
    if (move.promotion) {
      this._board[move.to] = { type: move.promotion, color: us }
    }

    // if big pawn move, update the en passant square
    if (move.flags & BITS.BIG_PAWN) {
      if (us === BLACK) {
        //this._epSquare = move.to - 16
        this._epSquare = move.to - 10;
      } else {
        //this._epSquare = move.to + 16
        this._epSquare = move.to + 10;
      }
    } else {
      this._epSquare = EMPTY;
    }

    // reset the 50 move counter if a pawn is moved or a piece is captured
    if (move.piece === PAWN) {
      this._halfMoves = 0
    } else if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
      this._halfMoves = 0
    } else {
      this._halfMoves++
    }

    if (us === BLACK) {
      this._moveNumber++
    }
    // this._getKingQueenPos();
    // this._updateKingControls();
    this._turn = them
  }

  undo() {
    const move = this._undoMove()
    if (move) {
      const prettyMove = this._makePretty(move)
      this._positionCounts[prettyMove.after]--
      return prettyMove
    }
    return null
  }

  private _undoMove() {
    const old = this._history.pop()
    if (old === undefined) {
      return null
    }

    const move = old.move
    // console.log("undoing move!", move);

    const origFromPiece = this._board[move.from];
    const origToPiece = this._board[move.to];

    this._kings = old.kings
    this._queens = old.queens
    this._turn = old.turn
    // this._castling = old.castling
    this._epSquare = old.epSquare
    this._halfMoves = old.halfMoves
    this._moveNumber = old.moveNumber

    const us = this._turn
    const them = swapColor(us)

    this._board[move.from] = this._board[move.to]
    this._board[move.from].type = move.piece // to undo any promotions
    delete this._board[move.to]

    if (move.captured) {
      if (move.flags & BITS.EP_CAPTURE) {
        // en passant capture
        let index: number
        if (us === BLACK) {
          // index = move.to - 16
          index = move.to - 10
        } else {
          // index = move.to + 16
          index = move.to + 10
        }
        this._board[index] = { type: PAWN, color: them }
      }
      // if the old move was queen moves to king square
      else if (move.captured === KING && move.piece === QUEEN) {
        // console.log("Move:",move," is a unite move.");
        // console.log("King pos:",this._kings[move.color]);
        // console.log("Queen pos:",this._queens[move.color]);
        // console.log("From square:", move.from);
        // console.log("To square:", move.to);
        // check if king and queen are same colour
        if (move.from === this._queens[move.color] && move.to === this._kings[move.color]) {
          this._board[move.to] = { type: KING, color: move.color };
          this._board[move.from] = {type: QUEEN, color: move.color};
        }
      }
      // if the old move was king moves to queen square
      else if((move.captured === QUEEN && move.piece === KING)) {
        // console.log("Move:",move," is a unite move.");
        // console.log("King pos:",this._kings[move.color]);
        // console.log("Queen pos:",this._queens[move.color]);
        // console.log("From square:", move.from);
        // console.log("To square:", move.to);
        // check if king and queen are same colour
        if (move.from === this._kings[move.color] && move.to === this._queens[move.color]) {
          this._board[move.to] = { type: QUEEN, color: move.color };
          this._board[move.from] = {type: KING, color: move.color};
        }
      }
      else {
        // regular capture
        // console.log("Regular capture from", move.from, "to: ", move.to);
        this._board[move.to] = { type: move.captured, color: them }
      }
    }

    // if (move.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
    //   let castlingTo: number, castlingFrom: number
    //   if (move.flags & BITS.KSIDE_CASTLE) {
    //     castlingTo = move.to + 1
    //     castlingFrom = move.to - 1
    //   } else {
    //     castlingTo = move.to - 2
    //     castlingFrom = move.to + 1
    //   }

    //   this._board[castlingTo] = this._board[castlingFrom]
    //   delete this._board[castlingFrom]
    // }

    return move
  }

  // pgn({
  //   newline = '\n',
  //   maxWidth = 0,
  // }: { newline?: string; maxWidth?: number } = {}) {
  //   /*
  //    * using the specification from http://www.chessclub.com/help/PGN-spec
  //    * example for html usage: .pgn({ max_width: 72, newline_char: "<br />" })
  //    */

  //   const result: string[] = []
  //   let headerExists = false

  //   /* add the PGN header information */
  //   for (const i in this._header) {
  //     /*
  //      * TODO: order of enumerated properties in header object is not
  //      * guaranteed, see ECMA-262 spec (section 12.6.4)
  //      */
  //     result.push('[' + i + ' "' + this._header[i] + '"]' + newline)
  //     headerExists = true
  //   }

  //   if (headerExists && this._history.length) {
  //     result.push(newline)
  //   }

  //   const appendComment = (moveString: string) => {
  //     const comment = this._comments[this.fen()]
  //     if (typeof comment !== 'undefined') {
  //       const delimiter = moveString.length > 0 ? ' ' : ''
  //       moveString = `${moveString}${delimiter}{${comment}}`
  //     }
  //     return moveString
  //   }

  //   // pop all of history onto reversed_history
  //   const reversedHistory = []
  //   while (this._history.length > 0) {
  //     reversedHistory.push(this._undoMove())
  //   }

  //   const moves = []
  //   let moveString = ''

  //   // special case of a commented starting position with no moves
  //   if (reversedHistory.length === 0) {
  //     moves.push(appendComment(''))
  //   }

  //   // build the list of moves.  a move_string looks like: "3. e3 e6"
  //   while (reversedHistory.length > 0) {
  //     moveString = appendComment(moveString)
  //     const move = reversedHistory.pop()

  //     // make TypeScript stop complaining about move being undefined
  //     if (!move) {
  //       break
  //     }

  //     // if the position started with black to move, start PGN with #. ...
  //     if (!this._history.length && move.color === 'b') {
  //       const prefix = `${this._moveNumber}. ...`
  //       // is there a comment preceding the first move?
  //       moveString = moveString ? `${moveString} ${prefix}` : prefix
  //     } else if (move.color === 'w') {
  //       // store the previous generated move_string if we have one
  //       if (moveString.length) {
  //         moves.push(moveString)
  //       }
  //       moveString = this._moveNumber + '.'
  //     }

  //     moveString =
  //       moveString + ' ' + this._moveToSan(move, this._moves({ legal: true }))
  //     this._makeMove(move)
  //   }

  //   // are there any other leftover moves?
  //   if (moveString.length) {
  //     moves.push(appendComment(moveString))
  //   }

  //   // is there a result?
  //   if (typeof this._header.Result !== 'undefined') {
  //     moves.push(this._header.Result)
  //   }

  //   /*
  //    * history should be back to what it was before we started generating PGN,
  //    * so join together moves
  //    */
  //   if (maxWidth === 0) {
  //     return result.join('') + moves.join(' ')
  //   }

  //   // TODO (jah): huh?
  //   const strip = function () {
  //     if (result.length > 0 && result[result.length - 1] === ' ') {
  //       result.pop()
  //       return true
  //     }
  //     return false
  //   }

  //   // NB: this does not preserve comment whitespace.
  //   const wrapComment = function (width: number, move: string) {
  //     for (const token of move.split(' ')) {
  //       if (!token) {
  //         continue
  //       }
  //       if (width + token.length > maxWidth) {
  //         while (strip()) {
  //           width--
  //         }
  //         result.push(newline)
  //         width = 0
  //       }
  //       result.push(token)
  //       width += token.length
  //       result.push(' ')
  //       width++
  //     }
  //     if (strip()) {
  //       width--
  //     }
  //     return width
  //   }

  //   // wrap the PGN output at max_width
  //   let currentWidth = 0
  //   for (let i = 0; i < moves.length; i++) {
  //     if (currentWidth + moves[i].length > maxWidth) {
  //       if (moves[i].includes('{')) {
  //         currentWidth = wrapComment(currentWidth, moves[i])
  //         continue
  //       }
  //     }
  //     // if the current move will push past max_width
  //     if (currentWidth + moves[i].length > maxWidth && i !== 0) {
  //       // don't end the line with whitespace
  //       if (result[result.length - 1] === ' ') {
  //         result.pop()
  //       }

  //       result.push(newline)
  //       currentWidth = 0
  //     } else if (i !== 0) {
  //       result.push(' ')
  //       currentWidth++
  //     }
  //     result.push(moves[i])
  //     currentWidth += moves[i].length
  //   }

  //   return result.join('')
  // }

  header(...args: string[]) {
    for (let i = 0; i < args.length; i += 2) {
      if (typeof args[i] === 'string' && typeof args[i + 1] === 'string') {
        this._header[args[i]] = args[i + 1]
      }
    }
    return this._header
  }

  // loadPgn(
  //   pgn: string,
  //   {
  //     strict = false,
  //     newlineChar = '\r?\n',
  //   }: { strict?: boolean; newlineChar?: string } = {},
  // ) {
  //   function mask(str: string): string {
  //     return str.replace(/\\/g, '\\')
  //   }

  //   function parsePgnHeader(header: string): { [key: string]: string } {
  //     const headerObj: Record<string, string> = {}
  //     const headers = header.split(new RegExp(mask(newlineChar)))
  //     let key = ''
  //     let value = ''

  //     for (let i = 0; i < headers.length; i++) {
  //       const regex = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/
  //       key = headers[i].replace(regex, '$1')
  //       value = headers[i].replace(regex, '$2')
  //       if (key.trim().length > 0) {
  //         headerObj[key] = value
  //       }
  //     }

  //     return headerObj
  //   }

  //   // strip whitespace from head/tail of PGN block
  //   pgn = pgn.trim()

  //   /*
  //    * RegExp to split header. Takes advantage of the fact that header and movetext
  //    * will always have a blank line between them (ie, two newline_char's). Handles
  //    * case where movetext is empty by matching newlineChar until end of string is
  //    * matched - effectively trimming from the end extra newlineChar.
  //    *
  //    * With default newline_char, will equal:
  //    * /^(\[((?:\r?\n)|.)*\])((?:\s*\r?\n){2}|(?:\s*\r?\n)*$)/
  //    */
  //   const headerRegex = new RegExp(
  //     '^(\\[((?:' +
  //       mask(newlineChar) +
  //       ')|.)*\\])' +
  //       '((?:\\s*' +
  //       mask(newlineChar) +
  //       '){2}|(?:\\s*' +
  //       mask(newlineChar) +
  //       ')*$)',
  //   )

  //   // If no header given, begin with moves.
  //   const headerRegexResults = headerRegex.exec(pgn)
  //   const headerString = headerRegexResults
  //     ? headerRegexResults.length >= 2
  //       ? headerRegexResults[1]
  //       : ''
  //     : ''

  //   // Put the board in the starting position
  //   this.reset()

  //   // parse PGN header
  //   const headers = parsePgnHeader(headerString)
  //   let fen = ''

  //   for (const key in headers) {
  //     // check to see user is including fen (possibly with wrong tag case)
  //     if (key.toLowerCase() === 'fen') {
  //       fen = headers[key]
  //     }

  //     this.header(key, headers[key])
  //   }

  //   /*
  //    * the permissive parser should attempt to load a fen tag, even if it's the
  //    * wrong case and doesn't include a corresponding [SetUp "1"] tag
  //    */
  //   if (!strict) {
  //     if (fen) {
  //       this.load(fen, { preserveHeaders: true })
  //     }
  //   } else {
  //     /*
  //      * strict parser - load the starting position indicated by [Setup '1']
  //      * and [FEN position]
  //      */
  //     if (headers['SetUp'] === '1') {
  //       if (!('FEN' in headers)) {
  //         throw new Error(
  //           'Invalid PGN: FEN tag must be supplied with SetUp tag',
  //         )
  //       }
  //       // don't clear the headers when loading
  //       this.load(headers['FEN'], { preserveHeaders: true })
  //     }
  //   }

  //   /*
  //    * NB: the regexes below that delete move numbers, recursive annotations,
  //    * and numeric annotation glyphs may also match text in comments. To
  //    * prevent this, we transform comments by hex-encoding them in place and
  //    * decoding them again after the other tokens have been deleted.
  //    *
  //    * While the spec states that PGN files should be ASCII encoded, we use
  //    * {en,de}codeURIComponent here to support arbitrary UTF8 as a convenience
  //    * for modern users
  //    */

  //   function toHex(s: string): string {
  //     return Array.from(s)
  //       .map(function (c) {
  //         /*
  //          * encodeURI doesn't transform most ASCII characters, so we handle
  //          * these ourselves
  //          */
  //         return c.charCodeAt(0) < 128
  //           ? c.charCodeAt(0).toString(16)
  //           : encodeURIComponent(c).replace(/%/g, '').toLowerCase()
  //       })
  //       .join('')
  //   }

  //   function fromHex(s: string): string {
  //     return s.length == 0
  //       ? ''
  //       : decodeURIComponent('%' + (s.match(/.{1,2}/g) || []).join('%'))
  //   }

  //   const encodeComment = function (s: string) {
  //     s = s.replace(new RegExp(mask(newlineChar), 'g'), ' ')
  //     return `{${toHex(s.slice(1, s.length - 1))}}`
  //   }

  //   const decodeComment = function (s: string) {
  //     if (s.startsWith('{') && s.endsWith('}')) {
  //       return fromHex(s.slice(1, s.length - 1))
  //     }
  //   }

  //   // delete header to get the moves
  //   let ms = pgn
  //     .replace(headerString, '')
  //     .replace(
  //       // encode comments so they don't get deleted below
  //       new RegExp(`({[^}]*})+?|;([^${mask(newlineChar)}]*)`, 'g'),
  //       function (_match, bracket, semicolon) {
  //         return bracket !== undefined
  //           ? encodeComment(bracket)
  //           : ' ' + encodeComment(`{${semicolon.slice(1)}}`)
  //       },
  //     )
  //     .replace(new RegExp(mask(newlineChar), 'g'), ' ')

  //   // delete recursive annotation variations
  //   const ravRegex = /(\([^()]+\))+?/g
  //   while (ravRegex.test(ms)) {
  //     ms = ms.replace(ravRegex, '')
  //   }

  //   // delete move numbers
  //   ms = ms.replace(/\d+\.(\.\.)?/g, '')

  //   // delete ... indicating black to move
  //   ms = ms.replace(/\.\.\./g, '')

  //   /* delete numeric annotation glyphs */
  //   ms = ms.replace(/\$\d+/g, '')

  //   // trim and get array of moves
  //   let moves = ms.trim().split(new RegExp(/\s+/))

  //   // delete empty entries
  //   moves = moves.filter((move) => move !== '')

  //   let result = ''

  //   for (let halfMove = 0; halfMove < moves.length; halfMove++) {
  //     const comment = decodeComment(moves[halfMove])
  //     if (comment !== undefined) {
  //       this._comments[this.fen()] = comment
  //       continue
  //     }

  //     const move = this._moveFromSan(moves[halfMove], strict)

  //     // invalid move
  //     if (move == null) {
  //       // was the move an end of game marker
  //       if (TERMINATION_MARKERS.indexOf(moves[halfMove]) > -1) {
  //         result = moves[halfMove]
  //       } else {
  //         throw new Error(`Invalid move in PGN: ${moves[halfMove]}`)
  //       }
  //     } else {
  //       // reset the end of game marker if making a valid move
  //       result = ''
  //       this._makeMove(move)
  //       this._positionCounts[this.fen()]++
  //     }
  //   }

  //   /*
  //    * Per section 8.2.6 of the PGN spec, the Result tag pair must match match
  //    * the termination marker. Only do this when headers are present, but the
  //    * result tag is missing
  //    */

  //   if (result && Object.keys(this._header).length && !this._header['Result']) {
  //     this.header('Result', result)
  //   }
  // }

  /*
   * Convert a move from 0x88 coordinates to Standard Algebraic Notation
   * (SAN)
   *
   * @param {boolean} strict Use the strict SAN parser. It will throw errors
   * on overly disambiguated moves (see below):
   *
   * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
   * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
   * 4. ... Ne7 is technically the valid SAN
   */

  // private _moveToSan(move: InternalMove, moves: InternalMove[]) {
  //   let output = ''

  //   // if (move.flags & BITS.KSIDE_CASTLE) {
  //   //   output = 'O-O'
  //   // } else if (move.flags & BITS.QSIDE_CASTLE) {
  //   //   output = 'O-O-O'
  //   // } else {
  //     if (move.piece !== PAWN) {
  //       const disambiguator = getDisambiguator(move, moves)
  //       output += move.piece.toUpperCase() + disambiguator
  //     }

  //     if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
  //       if (move.piece === PAWN) {
  //         output += algebraic(move.from)[0]
  //       }
  //       output += 'x'
  //     }

  //     output += algebraic(move.to)

  //     if (move.promotion) {
  //       output += '=' + move.promotion.toUpperCase()
  //     }
  //   // }

  //   this._makeMove(move)
  //   if (this.isCheck()) {
  //     if (this.isCheckmate()) {
  //       output += '#'
  //     } else {
  //       output += '+'
  //     }
  //   }
  //   this._undoMove()

  //   return output
  // }

  // // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
  // private _moveFromSan(move: string, strict = false): InternalMove | null {
  //   // strip off any move decorations: e.g Nf3+?! becomes Nf3
  //   const cleanMove = strippedSan(move)

  //   let pieceType = inferPieceType(cleanMove)
  //   let moves = this._moves({ legal: true, piece: pieceType })

  //   // strict parser
  //   for (let i = 0, len = moves.length; i < len; i++) {
  //     if (cleanMove === strippedSan(this._moveToSan(moves[i], moves))) {
  //       return moves[i]
  //     }
  //   }

  //   // the strict parser failed
  //   if (strict) {
  //     return null
  //   }

  //   let piece = undefined
  //   let matches = undefined
  //   let from = undefined
  //   let to = undefined
  //   let promotion = undefined

  //   /*
  //    * The default permissive (non-strict) parser allows the user to parse
  //    * non-standard chess notations. This parser is only run after the strict
  //    * Standard Algebraic Notation (SAN) parser has failed.
  //    *
  //    * When running the permissive parser, we'll run a regex to grab the piece, the
  //    * to/from square, and an optional promotion piece. This regex will
  //    * parse common non-standard notation like: Pe2-e4, Rc1c4, Qf3xf7,
  //    * f7f8q, b1c3
  //    *
  //    * NOTE: Some positions and moves may be ambiguous when using the permissive
  //    * parser. For example, in this position: 6k1/8/8/B7/8/8/8/BN4K1 w - - 0 1,
  //    * the move b1c3 may be interpreted as Nc3 or B1c3 (a disambiguated bishop
  //    * move). In these cases, the permissive parser will default to the most
  //    * basic interpretation (which is b1c3 parsing to Nc3).
  //    */

  //   let overlyDisambiguated = false

  //   matches = cleanMove.match(
  //     /([pmnbmrqkPMNBRQK])?([a-j][1-10])x?-?([a-j][1-10])([qrmbnQMRBN])?/,
  //     ///([pnbmrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/,
  //     //     piece         from              to       promotion
  //   )

  //   if (matches) {
  //     piece = matches[1]
  //     from = matches[2] as Square
  //     to = matches[3] as Square
  //     promotion = matches[4]

  //     if (from.length == 1) {
  //       overlyDisambiguated = true
  //     }
  //   } else {
  //     /*
  //      * The [a-h]?[1-8]? portion of the regex below handles moves that may be
  //      * overly disambiguated (e.g. Nge7 is unnecessary and non-standard when
  //      * there is one legal knight move to e7). In this case, the value of
  //      * 'from' variable will be a rank or file, not a square.
  //      */

  //     matches = cleanMove.match(
  //       // /([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/,
  //       /([pmnbrqkPMNBRQK])?([a-j]?[1-10]?)x?-?([a-j][1-10])([qmrbnQMRBN])?/,
  //     )

  //     if (matches) {
  //       piece = matches[1]
  //       from = matches[2] as Square
  //       to = matches[3] as Square
  //       promotion = matches[4]

  //       if (from.length == 1) {
  //         overlyDisambiguated = true
  //       }
  //     }
  //   }

  //   pieceType = inferPieceType(cleanMove)
  //   moves = this._moves({
  //     legal: true,
  //     piece: piece ? (piece as PieceSymbol) : pieceType,
  //   })

  //   if (!to) {
  //     return null
  //   }

  //   for (let i = 0, len = moves.length; i < len; i++) {
  //     if (!from) {
  //       // if there is no from square, it could be just 'x' missing from a capture
  //       if (
  //         cleanMove ===
  //         strippedSan(this._moveToSan(moves[i], moves)).replace('x', '')
  //       ) {
  //         return moves[i]
  //       }
  //       // hand-compare move properties with the results from our permissive regex
  //     } else if (
  //       (!piece || piece.toLowerCase() == moves[i].piece) &&
  //       SquareCode[from] == moves[i].from &&
  //       SquareCode[to] == moves[i].to &&
  //       (!promotion || promotion.toLowerCase() == moves[i].promotion)
  //     ) {
  //       return moves[i]
  //     } else if (overlyDisambiguated) {
  //       /*
  //        * SPECIAL CASE: we parsed a move string that may have an unneeded
  //        * rank/file disambiguator (e.g. Nge7).  The 'from' variable will
  //        */

  //       const square = algebraic(moves[i].from)
  //       if (
  //         (!piece || piece.toLowerCase() == moves[i].piece) &&
  //         SquareCode[to] == moves[i].to &&
  //         (from == square[0] || from == square[1]) &&
  //         (!promotion || promotion.toLowerCase() == moves[i].promotion)
  //       ) {
  //         return moves[i]
  //       }
  //     }
  //   }

  //   return null
  // }

  // ascii() {
  //   let s = '   +------------------------+\n'
  //   for (let i = SquareCode.a10; i <= SquareCode.j1; i++) {
  //     // display the rank
  //     if (file(i) === 0) {
  //       s += ' ' + '10987654321'[rank(i)] + ' |'
  //     }

  //     if (this._board[i]) {
  //       const piece = this._board[i].type
  //       const color = this._board[i].color
  //       const symbol =
  //         color === WHITE ? piece.toUpperCase() : piece.toLowerCase()
  //       s += ' ' + symbol + ' '
  //     } else {
  //       s += ' . '
  //     }

  //     // if ((i + 1) & 0x88) {
  //     //   s += '|\n'
  //     //   i += 8
  //     // }
  //     if (i+1 %10 === 0) {
  //       s += '|\n'
  //     }
  //   }
  //   s += '   +------------------------------+\n'
  //   s += '     a  b  c  d  e  f  g  h  i  j '

  //   return s
  // }

  perft(depth: number) {
    const moves = this._moves({ legal: false })
    let nodes = 0
    const color = this._turn

    for (let i = 0, len = moves.length; i < len; i++) {
      this._makeMove(moves[i])
      // if (!this._isKingAttacked(color)) {
      if (!(this._isQueenAttacked(color) && this._canKingReuniteQueen(swapColor(color)))) {
        if (depth - 1 > 0) {
          nodes += this.perft(depth - 1)
        } else {
          nodes++
        }
      }
      this._undoMove()
    }

    return nodes
  }

  // pretty = external move object
  private _makePretty(uglyMove: InternalMove): Move {
    const { color, piece, from, to, flags, captured, promotion } = uglyMove

    let prettyFlags = ''

    for (const flag in BITS) {
      if (BITS[flag] & flags) {
        prettyFlags += FLAGS[flag]
      }
    }

    const fromAlgebraic = algebraic(from)
    const toAlgebraic = algebraic(to)

    const move: Move = {
      color,
      piece,
      from: fromAlgebraic,
      to: toAlgebraic,
      // san: this._moveToSan(uglyMove, this._moves({ legal: true })),
      flags: prettyFlags,
      lan: fromAlgebraic + toAlgebraic,
      before: this.fen(),
      after: '',
    }

    // generate the FEN for the 'after' key
    // console.log("makePretty move.before: ", move.before);
    this._makeMove(uglyMove)
    move.after = this.fen()
    // console.log("makePretty move.after: ", move.after);
    this._undoMove()

    if (captured) {
      move.captured = captured
    }
    if (promotion) {
      move.promotion = promotion
      move.lan += promotion
    }

    return move
  }

  turn() {
    return this._turn
  }

  board() {
    const output = []
    let row = []

    for (let i = SquareCode.a10; i <= SquareCode.j1; i++) {
      if (this._board[i] == null) {
        row.push(null)
      } else {
        row.push({
          square: algebraic(i),
          type: this._board[i].type,
          color: this._board[i].color,
        })
      }
      // if ((i + 1) & 0x88) {
      //   output.push(row)
      //   row = []
      //   i += 10
      // }
      output.push(row)
      row = []
    }

    return output
  }

  squareColor(square: Square) {
    if (square in SquareCode) {
      const sq = SquareCode[square]
      return (rank(sq) + file(sq)) % 2 === 0 ? 'light' : 'dark'
    }

    return null
  }

  //history(): string[]
  history({ verbose }: { verbose: true }): Move[]
  //history({ verbose }: { verbose: false }): string[]
  history({ verbose }: { verbose: boolean }): string[] | Move[]
  history({ verbose = false }: { verbose?: boolean } = {}) {
    const reversedHistory = []
    const moveHistory = []

    while (this._history.length > 0) {
      reversedHistory.push(this._undoMove())
    }

    while (true) {
      const move = reversedHistory.pop()
      if (!move) {
        break
      }

      // if (verbose) {
        moveHistory.push(this._makePretty(move))
      // } 
      // else {
      //   moveHistory.push(this._moveToSan(move, this._moves()))
      // }
      this._makeMove(move)
    }

    return moveHistory
  }

  private _pruneComments() {
    const reversedHistory = []
    const currentComments: Record<string, string> = {}

    const copyComment = (fen: string) => {
      if (fen in this._comments) {
        currentComments[fen] = this._comments[fen]
      }
    }

    while (this._history.length > 0) {
      reversedHistory.push(this._undoMove())
    }

    copyComment(this.fen())

    while (true) {
      const move = reversedHistory.pop()
      if (!move) {
        break
      }
      this._makeMove(move)
      copyComment(this.fen())
    }
    this._comments = currentComments
  }

  getComment() {
    return this._comments[this.fen()]
  }

  setComment(comment: string) {
    this._comments[this.fen()] = comment.replace('{', '[').replace('}', ']')
  }

  deleteComment() {
    const comment = this._comments[this.fen()]
    delete this._comments[this.fen()]
    return comment
  }

  getComments() {
    this._pruneComments()
    return Object.keys(this._comments).map((fen: string) => {
      return { fen: fen, comment: this._comments[fen] }
    })
  }

  deleteComments() {
    this._pruneComments()
    return Object.keys(this._comments).map((fen) => {
      const comment = this._comments[fen]
      delete this._comments[fen]
      return { fen: fen, comment: comment }
    })
  }

  moveNumber() {
    return this._moveNumber
  }
}
/* eslint-disable */