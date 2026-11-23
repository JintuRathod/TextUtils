import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const handlerOnChange = (event) => {
    // console.log("handlerOnChange event ");
    setText(event.target.value);
    // console.log(text);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className={`container mt-4 p-3 ${
          props.mode === "dark" ? "bg-dark text-white" : "bg-light text-dark"
        }`}
      >
        <div className="container mt-5">
          <div className="container heading">
            <h1>{props.heading}</h1>
          </div>
          <div className="mb-3 box">
            <textarea
              className="form-control"
              value={text}
              onChange={handlerOnChange}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <div className="container button-actions">
            <button className="btn btn-primary" onClick={handleUpClick}>
              Convert to Uppercase
            </button>

            <button className="btn btn-primary mx-3" onClick={handleLoClick}>
              Convert to Lowercase
            </button>
            <button className="btn btn-primary " onClick={handleCapitalize}>
              Capitalize
            </button>
            <button className="btn btn-primary mx-3" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>

        <div className="container my-3 text-summary ">
          <div className="heading">
            <h3>Text Summary</h3>
          </div>
          <div className="priview">
            <p>
              {/* {text.split(" ").length} words and {text.length} characters */}
              {text.trim().split(/\s+/).filter(Boolean).length} words and{" "}
              {text.length} characters
            </p>
            {/* <p>{0.008 * text.split(" ").length} Minutes to read</p> */}
            <p>
              {0.008 * text.trim().split(/\s+/).filter(Boolean).length} Minutes
              to read
            </p>
          </div>
          <div className="heading">
            <h3>Priview</h3>
          </div>
          <div
            className="content"
            style={{
              border: "1px solid black",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
