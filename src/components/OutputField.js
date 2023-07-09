import React from "react";

export default class OutputField extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.class && "fieldOutput"}> 
        {this.props.fieldName && <div>{this.props.fieldName}</div>}
        <div>{this.props.field}</div>
      </div>
    );
  }
}
