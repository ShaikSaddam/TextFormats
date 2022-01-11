import React, { useState } from "react";

export default function TextFormat(probes) {
  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const [text, setText] = useState("Text Place");
  return (
    <>
      <div className="contianer">
        <h1>{probes.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            cols="50"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpper}>
          UpperCase
        </button>
        <button className="btn btn-secondary mx-1" onClick={handleLower}>
          LowerCase
        </button>
        <button className="btn btn-secondary mx-1" onClick={handleClear}>
          Delete
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary and Details</h2>
        <b>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
        </b>
        <b>
          {" "}
          <p>{0.008 * text.split(" ").length} Minutes read</p>
        </b>
      </div>
      <div className="container">
        <h2>Preview Content</h2>
        <b>
          {" "}
          <p>{text}</p>
        </b>
      </div>
    </>
  );
}
