import React from "react";
import App from "./MainInput";
import Title from "./components/Title";
import OutputField from "./components/OutputField";
export default class MainOutput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="output">
        <div className="mainOutputHeader">
          <OutputField field={this.props.field.name} class={false} />
          <div className="contactInfo">
            <OutputField
              fieldName="Email:"
              field={this.props.field.email}
              class={false}
            />
            <OutputField
              fieldName="Phone Number:"
              field={this.props.field.phoneNum}
              class={false}
            />
          </div>
        </div>
        <div className="mainOutputContent">
          <Title title="Education" />
          <div className="section">
            <OutputField
              fieldName="School Name:"
              field={this.props.field.schoolName}
              class={true}
            />
            <OutputField
              fieldName="Title of Study:"
              field={this.props.field.titleStudy}
              class={true}
            />

            <OutputField
              fieldName="Date of Study:"
              field={this.props.field.dateStudy}
              class={true}
            />
          </div>
        </div>
        <div className="mainOutputContent">
          <Title title="Experience" />
          <div className="section">
            <OutputField
              fieldName="Company Name:"
              field={this.props.field.companyName}
              class={true}
            />
            <OutputField
              fieldName="Position:"
              field={this.props.field.position}
              class={true}
            />
            <OutputField
              fieldName="Main Tasks:"
              field={this.props.field.mainTasks}
              class={true}
            />
            <OutputField
              fieldName="Period Worked:"
              field={this.props.field.periodWorked}
              class={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
