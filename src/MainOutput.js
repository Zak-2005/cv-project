import React from "react";
import App from "./App";
import Title from "./components/Title";
export default class MainOutput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="output">
        <Title title="General Info" />
        <div className="section">
          <div>{this.props.field.name}</div>
          <div>{this.props.field.email}</div>
          <div>{this.props.field.phoneNum}</div>
        </div>
        <Title title="Education" />
        <div className="section">
          <div>{this.props.field.schoolName}</div>
          <div>{this.props.field.titleStudy}</div>
          <div>{this.props.field.dateStudy}</div>
        </div>
        <Title title="Experience" />
        <div className="section">
          <div>{this.props.field.companyName}</div>
          <div>{this.props.field.position}</div>
          <div>{this.props.field.mainTasks}</div>
          <div>{this.props.field.periodWorked}</div>
        </div>
      </div>
    );
  }
}
