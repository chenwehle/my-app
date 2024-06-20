import React from 'react';
import { useState } from 'react';
import MySlider from './MySlider';

function MyRGBPanel(){
     // 設定面板的CSS樣式
    const panelCSS = {
        display:"flex",
        flexDirection:"column",
        border:"1px solid black",
        borderRadius:"10px",
        width:"300px",
        padding:"30px",
        alignitems:"center",
        margin:"auto",
        justifyContent:"center"
    };
     // 使用useState來管理紅、綠、藍三個顏色的狀態
    const [red, setRed] = useState(128);
    const [green, setGreen] = useState(128);
    const [blue, setBlue] = useState(128);
    // 更新顏色值的函數
    const updateRed = (c) =>setRed(c);
    const updateGreen = (c) =>setGreen(c);
    const updateBlue = (c) =>setBlue(c);
    return(
        <>
        <div style={panelCSS}>
        <h3>MyRGBPanel元件</h3>
        // 顯示當前 RGB 值顏色的區域
        <div style={{backgroundColor: `rgb(${red}, ${green}, ${blue})` ,
        width:"200px",
        height:"100px"}}
        />
        /* 分別為紅、綠、藍顏色值設置滑動條 */
        <MySlider label="RED" onChange={updateRed}/>
        <MySlider label="GREEN"onChange={updateGreen}/>
        <MySlider label="BLUE"onChange={updateBlue}/>
        </div>
        </>
    );
}

export default MyRGBPanel;