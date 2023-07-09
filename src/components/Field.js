import React from "react";

const Field = (props) =>{
  return (
    <div className="fieldSection">
      {props.fields.map((object, index) => {
        return (
          <div key={index} className="field">
            <label>{object.field}</label>
            <input
              type="text"
              placeholder={object.field}
              value={props.section[index]}
              onChange={(e) =>
                props.onChange(e.target.value, object.field)
              }
            />
          </div>
        );
      })}
    </div>
  );
}
export default Field;