import React from "react";


const Previewer=({markdown, marked})=>{
    return(
    <div 
    id= "preview"
    dangerouslySetInnerHTML={{__html:marked(markdown)}}>
    </div>)
}

export default Previewer