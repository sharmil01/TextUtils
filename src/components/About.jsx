import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <>
      <div
        className="card mb-3"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#a39d9d",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">
            ABOUT TextUtils - BE THE REASON SOMEONE SMILES T&#128522;DAY
          </h5>
          <p className="card-text">
            We provide free tools to help you with your daily tasks. You will
            find tools for converters, tools for handling text, such as converts
            into uppercase, converts into lowercase, removes extra space and
            many more. Check the current features at{" "}
            <Link className="link-primary" to="/">
              TextUtils
            </Link>{" "}
            and feel free to recommend a new feature by contacting us.
          </p>
          <p className="card-text">
            <small
              className={`text-${props.mode === "light" ? "danger" : "dark"}`}
            >
              Sharmil Macwan
            </small>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
