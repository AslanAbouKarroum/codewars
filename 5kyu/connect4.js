// We all love to play games especially as children. I have fond memories playing Connect 4 with my brother so decided to create this Kata based on the classic game. Connect 4 is known as several names such as “Four in a Row” and “Captain’s Mistress" but was made popular by Hasbro MB Games
// Connect 4
// Task
// The game consists of a grid (7 columns and 6 rows) and two players that take turns to drop their discs. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.

// Your task is to create a Class called Connect4 that has a method called play which takes one argument for the column where the player is going to place their disc.
// Rules
// If a player successfully has 4 discs horizontally, vertically or diagonally then you should return "Player n wins!” where n is the current player either 1 or 2.

// If a player attempts to place a disc in a column that is full then you should return ”Column full!” and the next move must be taken by the same player.

// If the game has been won by a player, any following moves should return ”Game has finished!”.

// Any other move should return ”Player n has a turn” where n is the current player either 1 or 2.
 
// Player 1 starts the game every time and alternates with player 2.

// The columns are numbered 0-6 left to right.

// My Solution
function Connect4 (){
    this.arr = [[0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0]];
    this.currentPlayer = 2;
    this.game_check = 0;
};
  
Connect4.prototype.play = function (col){
    this.currentPlayer == 1 ? this.currentPlayer=2 : this.currentPlayer=1;
    if(this.game_check) return "Game has finished!";
    let check = 0;
    for(let i=5;i>=0;i--){
        if(this.arr[i][col]==0){
            this.arr[i][col]=this.currentPlayer; 
            check = 1;
            break;
        };
    };
    if(check==0) return "Column full!";
    if(this.check_vertical()){ this.game_check=1; return `Player ${this.currentPlayer} wins!`};
    if(this.check_horizontal()){ this.game_check=1; return `Player ${this.currentPlayer} wins!`};
    if(this.check_diagonal()){ this.game_check=1; return `Player ${this.currentPlayer} wins!`};
    return `Player ${this.currentPlayer} has a turn`;
};

Connect4.prototype.check_vertical = function(){
    for(let i=0;i<7;i++){
        let check = 0;
        for(let j=0;j<6;j++){
            if(this.arr[j][i]==this.currentPlayer){
                check++
                if(check==4) return true;
            }else{
                check=0;
            }
        };
    };
    return false;
};

Connect4.prototype.check_horizontal = function(){
    for(let i=0;i<6;i++){
        let check = 0;
        for(let j=0;j<7;j++){
            if(this.arr[i][j]==this.currentPlayer){
                check++
                if(check==4) return true;
            }else{
                check=0;
            };
        };
    };
    return false;
};

Connect4.prototype.check_diagonal = function(){
    let winning_cases = [[this.arr[0][3], this.arr[1][2], this.arr[2][1], this.arr[3][0]], // /
                         [this.arr[0][4], this.arr[1][3], this.arr[2][2], this.arr[3][1]],
                         [this.arr[0][5], this.arr[1][4], this.arr[2][3], this.arr[3][2]],
                         [this.arr[0][6], this.arr[1][5], this.arr[2][4], this.arr[3][3]],
                         [this.arr[1][3], this.arr[2][2], this.arr[3][1], this.arr[4][0]],
                         [this.arr[1][4], this.arr[2][3], this.arr[3][2], this.arr[4][1]],
                         [this.arr[1][5], this.arr[2][4], this.arr[3][3], this.arr[4][2]],
                         [this.arr[1][6], this.arr[2][5], this.arr[3][4], this.arr[4][3]],
                         [this.arr[2][3], this.arr[3][2], this.arr[4][1], this.arr[5][0]],
                         [this.arr[2][4], this.arr[3][3], this.arr[4][2], this.arr[5][1]],
                         [this.arr[2][5], this.arr[3][4], this.arr[4][3], this.arr[5][2]],
                         [this.arr[2][6], this.arr[3][5], this.arr[4][4], this.arr[5][3]],
                         [this.arr[0][0], this.arr[1][1], this.arr[2][2], this.arr[3][3]],// \
                         [this.arr[0][1], this.arr[1][2], this.arr[2][3], this.arr[3][4]],
                         [this.arr[0][2], this.arr[1][3], this.arr[2][4], this.arr[3][5]],
                         [this.arr[0][3], this.arr[1][4], this.arr[2][5], this.arr[3][6]],
                         [this.arr[1][0], this.arr[2][1], this.arr[3][2], this.arr[4][3]],
                         [this.arr[1][1], this.arr[2][2], this.arr[3][3], this.arr[4][4]],
                         [this.arr[1][2], this.arr[2][3], this.arr[3][4], this.arr[4][5]],
                         [this.arr[1][3], this.arr[2][4], this.arr[3][5], this.arr[4][6]],
                         [this.arr[2][0], this.arr[3][1], this.arr[4][2], this.arr[5][3]],
                         [this.arr[2][1], this.arr[3][2], this.arr[4][3], this.arr[5][4]],
                         [this.arr[2][2], this.arr[3][3], this.arr[4][4], this.arr[5][5]],
                         [this.arr[2][3], this.arr[3][4], this.arr[4][5], this.arr[5][6]]];

    for(let i=0;i<winning_cases.length;i++){
        let check=0;
        for(let j=0;j<winning_cases[i].length;j++){
            if(winning_cases[i][j]==this.currentPlayer){
                check++
                if(check==4){
                    return true;
                }
            }else{
                    check = 0;
            };
        };
    };
    return false;
};
