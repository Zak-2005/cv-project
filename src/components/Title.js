import React from "react";

export default class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="fieldTitle">{this.props.title}</div>
      </div>
    );
  }
}
