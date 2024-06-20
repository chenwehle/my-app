import { useState } from "react";

function MySlider({label, onChange}){
    // 使用 useState 來管理滑動條的值，預設值為 128
    const [value, setValue] = useState(128);
     // 處理滑動條變更事件
    const handleChange = (e) =>{
        // 更新滑動條的值
        setValue(e.target.value);
// 如果有傳入 onChange 函數，則調用它並傳入新的值
        if(onChange){
            onChange(e.target.value);
        }
    };
    return(
        <div>
            <span>{label}</span>
            // 滑動條輸入框，範圍從 0 到 255，當值變更時調用 handleChange
            <input type ="range" width="300" min="0" max="255" value={value} onChange={handleChange}/>
            <span>{value}</span>
        </div>
    );
}
export default MySlider;
