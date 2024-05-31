import React from 'react';
import { useState } from 'react';
import MySlider from './MySlider';

function MyRGBPanel(){
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
    const [red, setRed] = useState(128);
    const [green, setGreen] = useState(128);
    const [blue, setBlue] = useState(128);

    const updateRed = (c) =>setRed(c);
    const updateGreen = (c) =>setGreen(c);
    const updateBlue = (c) =>setBlue(c);
    return(
        <>
        <div style={panelCSS}>
        <h3>MyRGBPanel元件</h3>
        <div style={{backgroundColor: `rgb(${red}, ${green}, ${blue})` ,
        width:"200px",
        height:"100px"}}
        />
        <MySlider label="RED" onChange={updateRed}/>
        <MySlider label="GREEN"onChange={updateGreen}/>
        <MySlider label="BLUE"onChange={updateBlue}/>
        </div>
        </>
    );
}

export default MyRGBPanel;