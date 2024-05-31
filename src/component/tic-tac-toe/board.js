import React from "react";
import Square from "./square";
import './tictactoe.css';

function Board({xIsNext, Squares, onPlay}){
    const handleClick=(i)=>{
        if (calculateWinner(Squares)|| Squares[i]){
            return;
        };
        const nextSquares = Squares.slice();
            nextSquares[i]= xIsNext ? "X" : "O";
        onPlay(nextSquares);
    };


const calculateWinner = (Squares) =>{
    const lines=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i< lines.length; i++){
        const [a, b, c] = lines[i];
        if(Squares[a] && Squares[a] === Squares[b] && Squares[a] === Squares[c]){
            return Squares[a];
        }
    }

    return null;
};

const winner = calculateWinner(Squares);
let status;
if(winner){
    status = "贏家 : " + winner;
}else{
    status ="下一個玩家 : " + (xIsNext ? "X" : "O");
}


    return(
        <>
        <div className="status">{status}</div>
        <div className="board-row">
            <Square value={Squares[0]} onSquareClick={()=>handleClick(0)}/>
            <Square value={Squares[1]} onSquareClick={()=>handleClick(1)}/>
            <Square value={Squares[2]}onSquareClick={()=>handleClick(2)}/>
        </div>
        <div className="board-row">
           <Square value={Squares[3]} onSquareClick={()=>handleClick(3)}/>
           <Square value={Squares[4]} onSquareClick={()=>handleClick(4)}/>
           <Square value={Squares[5]}onSquareClick={()=>handleClick(5)}/>
        </div>
        <div className="board-row">
           <Square value={Squares[6]} onSquareClick={()=>handleClick(6)}/>
           <Square value={Squares[7]} onSquareClick={()=>handleClick(7)}/>
           <Square value={Squares[8]}onSquareClick={()=>handleClick(8)}/>
</div>
 </>);
}

export default Board;