import React from "react";

const OutputField = (props) =>{
  return (
    <div className={props.class ? "fieldOutput" : ""}> 
      {props.fieldName && <div>{props.fieldName}</div>}
      <div>{props.field}</div>
    </div>
  );
}


export default OutputField;