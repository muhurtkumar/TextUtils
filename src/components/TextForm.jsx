import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared", "success");
    }

    const handleCopyClick = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleInvertClick = ()=>{
        let newText = "";
        for (let index = text.length-1; index >= 0; index--) {
            newText = newText + text[index];
        }
        setText(newText)
        props.showAlert("Text is inverted", "success");
    }

    const handleExtraSpacesClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces", "success");
    }

    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value) // phle change nahi kr paa re the text ab kr paa re
    }
  const [text, setText] = useState(''); // text jo abhi set kia ab agr update krna hoga to setText use krenge....normal variable ki hi tarah bs update normally nahi kr skte
  // text = "new text" // wrong way to update
  // setText("new text")// right way to update
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleInvertClick}>Invert text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>Read Time : {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
