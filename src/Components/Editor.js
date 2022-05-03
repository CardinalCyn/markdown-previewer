import React from "react";

const Editor=({markConvert,markdown})=>{
    let textAreaStyle={
        width:"35vh",
        height: "50vh",
    }
    return(
    <div>
        <textarea 
        id="editor"
        style={textAreaStyle}
        value={markdown} 
        onChange={(e)=>{markConvert(e.target.value)}}>
        </textarea>
    </div>)
}

export default Editor