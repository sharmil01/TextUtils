import React, { useState } from "react";

const Textbox = (props) => {
  const conUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Your text converted into uppercase form", "success");
  };

  const conLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Your text converted into lowercase form", "success");
  };

  const reverseString = () => {
    let newText = [...text].reverse().join("");
    setText(newText);
    props.showAlert("Your text converted into reverse order", "success");
  };

  const removeSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("All extra space removed", "success");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied to clipboard", "success");
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Textbox cleared", "success");
    document.getElementById("counter").innerHTML = "0 ";
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h4 className="h4">
          Accidentally left the caps lock on and typed something, but can't be
          bothered to start again and retype it all..?
        </h4>
        <h5 className="h5">
          Simply enter your text and choose the case you want to convert it to..
        </h5>
        <textarea
          className="form-control my-3"
          placeholder="Write or paste your text here.."
          id="floatingTextarea"
          rows={8}
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "#f8f9fa" : "#a39d9d",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>

        <div className="d-grid gap-2 d-md-block my-auto">
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={conUpperCase}
          >
            Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={conLowerCase}
          >
            Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={reverseString}
          >
            Reverse
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={removeSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={copyText}
          >
            Copy to Clipboard
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={clearText}
          >
            Clear
          </button>
        </div>
      </div>

      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
      </div>
    </>
  );
};

export default Textbox;
