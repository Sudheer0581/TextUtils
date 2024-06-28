import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log(text);
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowClick = ()=>{
        console.log(text);
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleCapClick = ()=>{
        console.log(text);
        const x = text.toLowerCase();
        const newText = x.split(" ");
        let z =""
        for(let i=0;i<newText.length;i++){
            const v = newText[i];
            z = z+ v[0].toUpperCase() + v.slice(1) + (i<newText.length-1 ? " " : "");
        }
        setText(z);
        props.showAlert("Caplitized","success");
    }
    const handleClearClick = ()=>{
        console.log(text);
        const newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }

    const handleCopy = ()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text,setText] = useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="3" placeholder='Enter Text here'></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Upper case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lower case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCapClick}>Captilize Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
        <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text above to preview it here"}</p>

    </div>
    </>
  )
}
