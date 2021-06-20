import React , { useState } from 'react';
import './App.css';
import marked from './marked'

marked.setOptions({
  breaks: true
})

const renderer = new marked.Renderer();

function App() {
const [text, setText] = useState('')

const handleChange= (e) => {
  setText(()=> e.target.value)
}
  
return (
    <div className="App">
      <h1>My Markdown Previewer</h1>
      <h2>Markdown editor</h2>
      <textarea id="editor" name="Editor" rows="10" onChange={handleChange}></textarea>
      
      <h2>HTML Output</h2>
      <div dangerouslySetInnerHTML={{
        __html: marked({text}, {renderer: renderer}),
      }} id="preview">
       <p id="content">Pauletto</p> 
      </div>
      {text}

    </div>
  );
}

export default App;
