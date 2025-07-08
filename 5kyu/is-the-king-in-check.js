// You have to write a function that takes for input a 8x8 chessboard in the form of a bi-dimensional array of chars (or strings of length 1, depending on the language) and returns a boolean indicating whether the king is in check.

// The array will include 64 squares which can contain the following characters :

// '♔' for the black King;
// '♛' for a white Queen;
// '♝' for a white Bishop;
// '♞' for a white Knight;
// '♜' for a white Rook;
// '♟' for a white Pawn;
// ' ' (a space) if there is no piece on that square.
// Note : these are actually inverted-color chess Unicode characters because the codewars dark theme makes the white appear black and vice versa. Use the characters shown above.

// There will always be exactly one king, which is the black king, whereas all the other pieces are white.
// The board is oriented from Black's perspective.
// Remember that pawns can only move and take forward.
// Also be careful with the pieces' lines of sight ;-) .

// The input will always be valid, no need to validate it. To help you visualize the position, tests will print a chessboard to show you the problematic cases. Looking like this :

// |---|---|---|---|---|---|---|---|
// |   |   |   |   |   |   |   |   |
// |---|---|---|---|---|---|---|---|
// |   |   |   | ♜ |   |   |   |   |
// |---|---|---|---|---|---|---|---|
// |   |   |   |   |   |   |   |   |
// |---|---|---|---|---|---|---|---|
// |   |   |   | ♔ |   |   |   |   |
// |---|---|---|---|---|---|---|---|
// |   |   |   |   |   |   |   |   |
// |---|---|---|---|---|---|---|---|
// |   |   |   |   |   |   |   |   |
// |---|---|---|---|---|---|---|---|
// |   |   |   |   |   |   |   |   |
// |---|---|---|---|---|---|---|---|
// |   |   |   |   |   |   |   |   |
// |---|---|---|---|---|---|---|---|

// My Solution
function kingIsInCheck (chessboard) {
    let king,queen,pawn,bishop,rook,knight;
    for(let row =0;row<8;row++){
        for(let col =0;col<8;col++){
            switch (chessboard[row][col].charCodeAt(0)){
                case 9812 :
                    king = [row,col];
                    break;
                case 9819 :
                    if(queen){
                        queen.push([row,col])
                    }else{
                        queen = [[row,col]];
                    }
                    break;
                case 9823 :
                    if(pawn){
                        pawn.push([row,col])
                    }else{
                        pawn = [[row,col]];
                    }
                    break;
                case 9821 :
                    if(bishop){
                        bishop.push([row,col])
                    }else{
                        bishop = [[row,col]];
                    }
                    break;
                case 9820 :
                    if(rook){
                        rook.push([row,col])
                    }else{
                        rook = [[row,col]];
                    }
                    break;
                case 9822 :
                    if(knight){
                        knight.push([row,col])
                    }else{
                        knight = [[row,col]];
                    }
                    break;
            }
        }
    }
    console.log(king+' '+queen+' '+pawn+' '+bishop+' '+rook+' '+knight);
    if(queen){
        for(let i=0;i<queen.length;i++){
            let row = queen[i][0], col = queen[i][1];
            for(let target_col=col;target_col>0;target_col--){   // target to the left
                if(chessboard[row][target_col-1].charCodeAt(0)== 9812){
                    return true;
                }else if(chessboard[row][target_col-1].charCodeAt(0)!==32){
                    break;
                }
            }
            for(let target_col=col;target_col<7;target_col++){   // target to the right
                if(chessboard[row][target_col+1].charCodeAt(0)== 9812){
                    return true;
                }else if(chessboard[row][target_col+1].charCodeAt(0)!==32){
                    break;
                }
            }
            for(let target_row=row;target_row>0;target_row--){   // target upwards
                if(chessboard[target_row-1][col].charCodeAt(0)== 9812){
                    return true;
                }else if(chessboard[target_row-1][col].charCodeAt(0)!==32){
                    break;
                }
            }
            for(let target_row=row;target_row<7;target_row++){   // target downwardss
                if(chessboard[target_row+1][col].charCodeAt(0)== 9812){
                    return true;
                }else if(chessboard[target_row+1][col].charCodeAt(0)!==32){
                    break;
                }
            }
            for(let target_col=col,target_row=row;target_col>0&&target_row>0;target_col--,target_row--){ // target up-left
                if(chessboard[target_row-1][target_col-1].charCodeAt(0)== 9812){
                    return true;
                }else if(chessboard[target_row-1][target_col-1].charCodeAt(0)!==32){
                    break;
                }
            }
            for(let target_col=col,target_row=row;target_col<7&&target_row<7;target_col++,target_row++){  // target down-rigth
                if(chessboard[target_row+1][target_col+1].charCodeAt(0)== 9812){
                    return true;
                }else if(chessboard[target_row+1][target_col+1].charCodeAt(0)!==32){
                    break;
                }
            }
            for(let target_col=col,target_row=row;target_col<7&&target_row>0;target_col++,target_row--){ // target up-right
                if(chessboard[target_row-1][target_col+1].charCodeAt(0)== 9812){
                    return true;
                }else if(chessboard[target_row-1][target_col+1].charCodeAt(0)!==32){
                    break;
                }
            }
            for(let target_col=col,target_row=row;target_col>0&&target_row<7;target_col--,target_row++){ // taget down-left
                if(chessboard[target_row+1][target_col-1].charCodeAt(0)== 9812){
                    return true;
                }else if(chessboard[target_row+1][target_col-1].charCodeAt(0)!==32){
                    break;
                }
            }
        }
    }
    if(bishop){
        for(let i=0;i<bishop.length;i++){
            let row = bishop[i][0], col = bishop[i][1];
            for(let target_col=col,target_row=row;target_col>0&&target_row>0;target_col--,target_row--){ // target up-left
                if(chessboard[target_row-1][target_col-1].charCodeAt(0)== 9812){
                    return true;
                }else if(chessboard[target_row-1][target_col-1].charCodeAt(0)!==32){
                    break;
                }
            }
            for(let target_col=col,target_row=row;target_col<7&&target_row<7;target_col++,target_row++){  // target down-rigth
                if(chessboard[target_row+1][target_col+1].charCodeAt(0)== 9812){
                    return true;
                }else if(chessboard[target_row+1][target_col+1].charCodeAt(0)!==32){
                    break;
                }
            }
            for(let target_col=col,target_row=row;target_col<7&&target_row>0;target_col++,target_row--){ // target up-right
                if(chessboard[target_row-1][target_col+1].charCodeAt(0)== 9812){
                    return true;
                }else if(chessboard[target_row-1][target_col+1].charCodeAt(0)!==32){
                    break;
                }
            }
            for(let target_col=col,target_row=row;target_col>0&&target_row<7;target_col--,target_row++){ // taget down-left
                if(chessboard[target_row+1][target_col-1].charCodeAt(0)== 9812){
                    return true;
                }else if(chessboard[target_row+1][target_col-1].charCodeAt(0)!==32){
                    break;
                }
            }
        }
    }   
    if(rook){
        for(let i=0;i<rook.length;i++){
            let row = rook[i][0], col = rook[i][1];
            for(let target_col=col;target_col>0;target_col--){   // target to the left
                if(chessboard[row][target_col-1].charCodeAt(0)== 9812){
                    return true;
                }else if(chessboard[row][target_col-1].charCodeAt(0)!==32){
                    break;
                }
            }
            for(let target_col=col;target_col<7;target_col++){   // target to the right
                if(chessboard[row][target_col+1].charCodeAt(0)== 9812){
                    return true;
                }else if(chessboard[row][target_col+1].charCodeAt(0)!==32){
                    break;
                }
            }
            for(let target_row=row;target_row>0;target_row--){   // target upwards
                if(chessboard[target_row-1][col].charCodeAt(0)== 9812){
                    return true;
                }else if(chessboard[target_row-1][col].charCodeAt(0)!==32){
                    break;
                }
            }
            for(let target_row=row;target_row<7;target_row++){   // target downwardss
                if(chessboard[target_row+1][col].charCodeAt(0)== 9812){
                    return true;
                }else if(chessboard[target_row+1][col].charCodeAt(0)!==32){
                    break;
                }
            }
        }
    }
    if(pawn){
        for(let i=0;i<pawn.length;i++){
            let row = pawn[i][0], col = pawn[i][1];
            if(chessboard[row+1]){
                if(chessboard[row+1][col+1]){
                    if(chessboard[row+1][col+1].charCodeAt(0)== 9812){
                        return true;
                    }
                }
                if(chessboard[row+1][col-1]){
                    if(chessboard[row+1][col-1].charCodeAt(0)== 9812){
                        return true;
                    }
                }
            }
        }
    }
    if(knight){
        for(let i=0;i<knight.length;i++){
            let row = knight[i][0], col = knight[i][1];
            if(chessboard[row-2]){
                if(chessboard[row-2][col-1]){
                    if(chessboard[row-2][col-1].charCodeAt(0)== 9812){
                        return true;
                    }
                }
                if(chessboard[row-2][col+1]){
                    if(chessboard[row-2][col+1].charCodeAt(0)== 9812){
                        return true;
                    }
                }   
            }
            if(chessboard[row-1]){
                if(chessboard[row-1][col-2]){
                    if(chessboard[row-1][col-2].charCodeAt(0)== 9812){
                        return true;
                    }
                }
                if(chessboard[row-1][col+2]){
                    if(chessboard[row-1][col+2].charCodeAt(0)== 9812){
                        return true;
                    }
                }
            }
            if(chessboard[row+1]){
                if(chessboard[row+1][col-2]){
                    if(chessboard[row+1][col-2].charCodeAt(0)== 9812){
                        return true;
                    }
                }
                if(chessboard[row+1][col+2]){
                    if(chessboard[row+1][col+2].charCodeAt(0)== 9812){
                        return true;
                    }
                }
            }
            if(chessboard[row+2]){
                if(chessboard[row+2][col-1]){
                    if(chessboard[row+2][col-1].charCodeAt(0)== 9812){
                        return true;
                    }
                }
                if(chessboard[row+2][col+1]){
                    if(chessboard[row+2][col+1].charCodeAt(0)== 9812){
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

// Solution
const KING = '♔', S=8;
const TOME = {
    '♛': {propagate:S, moves: [[1,1],[1,-1],[-1,1],[-1,-1],[0,1],[0,-1],[-1,0],[1,0]]},
    '♝': {propagate:S, moves: [[1,1],[1,-1],[-1,1],[-1,-1]]},
    '♜': {propagate:S, moves: [[0,1],[0,-1],[-1,0],[1,0]]},
    '♞': {propagate:1, moves: [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[-1,2],[1,-2],[-1,-2],]},
    '♟': {propagate:1, moves: [[1,1],[1,-1]]}, 
};

function kingIsInCheck (bd) {
    const isValid = (p,x,y,i) => 0<=x&&x<S && 0<=y&&y<S && i<p.propagate;
    const kingInLine = (p,a,b) => p.moves.some( ([dx,dy]) =>{
        for( let i=0, x=a+dx, y=b+dy ; isValid(p,x,y,i) ; i++, x+=dx, y+=dy ) {
                if(bd[x][y]==KING) return true;
                if(bd[x][y]!=' ')  return false;
        }
    });
    return bd.some( (r,a) => r.some( (c,b,_,p=TOME[c]) => p && kingInLine(p,a,b) ));
}