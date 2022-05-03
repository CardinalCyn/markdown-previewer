import './App.css';
import React from 'react';
import Editor from './Components/Editor';
import Previewer from './Components/Previewer';
import { useState } from 'react';
import {marked} from 'marked';

const App=()=>{
  let newText="# Welcome to my editor!\n\n## I don't really know how to use markdown \n\n>so good luck with this\n\n**hi**\n\ninline code \n\n`let i =0` \n\nmore code \n\n```\nlet i =0\n\nconsole.log(i);\n\n```\n\n1. hi again\n\n[Here's a link to the resource that helped me](https://freecodecamp.org)\n\n![FCC](https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/camper/45/67027_2.png)";
  const [markdown,setMarkdown]=useState(newText);
  
  const markConvert=(input)=>{
    setMarkdown(input);

    marked.setOptions({
      breaks:true
    })
  }
  return(
    <div className='container'>
      <div className="row mt-4">
        <div className="col text-center">
          <h1>Markdown Previewer</h1>
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-md-6'>
          <h2>Editor</h2>
          <Editor markdown={markdown} markConvert={markConvert}>

          </Editor>
        </div>
        <div className='col-md-6'>
          <h2>Previewer</h2>
          <Previewer markdown={markdown} marked={marked}></Previewer>
        </div>
      </div>
    </div>
  )
}

export default App;
