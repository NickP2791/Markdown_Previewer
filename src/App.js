import React , { useState } from 'react';
import './App.css';

const marked = require('marked')

marked.setOptions({
  breaks: true,
  gfm: true,

})

const renderer = new marked.Renderer();

function App() {
const [text, setText] = useState(()=> {
  return (
    placeholder
    )
})

const handleChange= (e) => {
  setText(()=> e.target.value)
}
  
return (
    <div className="App">
      <div className="container">
        <h1 className="title">My Markdown Previewer</h1>
        <div className="second-row">
            <div className="editorside">
            
            <h2 className="title">Markdown editor</h2>
            <textarea id="editor" name="Editor" value={text} rows='24' onChange={handleChange}></textarea>
        </div>

        <div className="previewside">
            <h2 className="title">HTML Output</h2>
            <div dangerouslySetInnerHTML={{
        __html: marked(text, {renderer: renderer}),
      }} id="preview">
            </div>
        </div>
        </div>

             
      </div>
     </div>
  );
}

const placeholder = `# Welcome to my React Markdown Previewer!

## And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And of course there are lists.
    - Some are bulleted.
      - With different indentation levels.
        -- That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default App;
