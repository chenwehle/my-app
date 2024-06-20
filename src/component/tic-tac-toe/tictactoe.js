import React, {useState} from "react";
import Board from "./board";

function TicTacToe(){
        // 使用 useState 管理歷史紀錄，每一項紀錄都是一個方塊的狀態陣列
    const [history, setHistory] = useState([Array(9).fill(null)]);
    // 使用 useState 管理當前的步數
    const [currentMove, setCurrentMove] = useState(0);
     // 根據當前步數決定下一個玩家是 "X" 還是 "O"
    const xIsNext = currentMove % 2 ===0;
    // 取得當前步數的方塊狀態
    const currentSquares = history[currentMove];
    // 處理下一步的函數
    const handlePlay=(nextSquares) =>{
        // 更新歷史紀錄，將下一步的狀態加入到歷史紀錄中
        const nextHistory = [...history.slice(0, currentMove+1), nextSquares]
        setHistory(nextHistory);
        // 更新當前步數為下一步
        setCurrentMove(nextHistory.length -1);
    }

    
    return(
        <div className='game'>
            <div className='game-board'>
            /* 渲染 Board 組件，傳入當前玩家、方塊狀態和處理下一步的函數 */
                <Board xIsNext={xIsNext} Squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className='game-info'>
                <h4>遊戲歷程</h4>
                /* 可以在這裡添加歷史紀錄的顯示 */
            </div>
        </div>
    );
}

export default TicTacToe;