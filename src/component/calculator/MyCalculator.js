import React,{useState} from "react";
import MyDisplay from './MyDisplay';
import Mybutton from "./Mybutton";
import './Calculator.css'

function MyCalulator(){
    // 設定 result 狀態，預設為 "0"
    const [result, setResult] = useState("0");

    // 處理按鈕點擊事件
    const handleclick = (value) => {
        // 根據點擊的按鈕值進行不同操作
        switch(value){
            // 如果點擊的是數字或小數點或運算符號
            case"0":
            case"1":
            case"2":
            case"3":
            case"4":
            case"5":
            case"6":
            case"7":
            case"8":
            case"9":
            case".":
            case"+":
            case"-":
            case"*":
            case"/":
                // 如果目前的結果為 "0"，則將結果設定為按鈕的值
                if(result==="0"){
                    setResult(value);
                }
                // 否則將按鈕的值附加到目前的結果後面
                else{
                    setResult(result+value);
                }
                break;

            // 如果點擊的是 "="
            case"=":
                // 使用 eval 函數計算結果並轉換為字串
                setResult(eval(result).toString());
                break;

            // 如果點擊的是 "c"
            case"c":
                // 清空結果
                setResult("");
                break;

            // 如果點擊的是 "+/-"
            case"+/-":
                // 將結果轉換為整數並取相反數
                setResult(parseInt(result,10)*-1);
                break;

            // 如果點擊的是 "%"
            case"%":
                // 將結果轉換為整數並除以 100
                setResult(parseInt(result,10)/100);
                break;

            // 預設情況，不做任何操作
            default:
                break;
        }
    };

    // 渲染計算器組件
    return(
        <div className='calculator'>
            <MyDisplay result={result}/>
            <Mybutton buttonClicked={handleclick} />
        </div>
    );
}

export default MyCalulator;
