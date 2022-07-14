import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState(""); 
    
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
        
    }

    const handleOnChange=(event) =>{
        setText(event.target.value)
    }

    const ClearClick =()=>{
        let newText="";
        setText(newText);
        props.showAlert("Cleared","success");
    }

    const copyText=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
        document.getSelection().removeAllRanges();
    }
    
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white' , color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ClearClick}>Clear</button>
            {/* <button className="btn btn-primary mx-1" onClick={OnBold}>B</button> */}
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy</button>

           
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters.</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
            {/* <p>{(text==="" || text.charAt(text.length-1 )===" ")?text.split(" ").length-1:text.split(" ").length} Words and {text.length} Characters.</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p> */}
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
  )

}
