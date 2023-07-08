import React from "react";

export default class Field extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.fields.map((object, index) => {
          return (
            <input
              key={index}
              type="text"
              placeholder={object.field}
              value={this.props.section[index]}
              onChange={(e) =>
                this.props.onChange(e.target.value, object.field)
              }
            />
          );
        })}
      </div>
    );
  }
}
