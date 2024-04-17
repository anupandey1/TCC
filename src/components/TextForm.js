import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value) // helps to enter text
    }

    const [text, setText] = useState("Enter text here");
    return (
        <div>
        
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label htmlFor="mytext" className="form-label">Example Text Area</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mytext" rows="3"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
    )
}
