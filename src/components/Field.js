import React from "react";

export default class Field extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="fieldSection">
        {this.props.fields.map((object, index) => {
          return (
            <div key={index} className="field">
              <label>{object.field}</label>
              <input
                type="text"
                placeholder={object.field}
                value={this.props.section[index]}
                onChange={(e) =>
                  this.props.onChange(e.target.value, object.field)
                }
              />
            </div>
          );
        })}
      </div>
    );
  }
}
