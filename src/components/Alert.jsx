import React from "react";

const Alert = (props) => {
  const capatalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        >
          {capatalize(props.alert.type)}: {props.alert.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;
