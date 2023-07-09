import React from "react";
import App from "./MainInput";
import Title from "./components/Title";
import OutputField from "./components/OutputField";


 const MainOutput = (props) =>{
  return (
    <div className="output">
      <div className="mainOutputHeader">
        <OutputField field={props.field.name} class={false} />
        <div className="contactInfo">
          <OutputField
            fieldName="Email:"
            field={props.field.email}
            class={false}
          />
          <OutputField
            fieldName="Phone Number:"
            field={props.field.phoneNum}
            class={false}
          />
        </div>
      </div>
      <div className="mainOutputContent">
        <Title title="Education" />
        <div className="section">
          <OutputField
            fieldName="School Name:"
            field={props.field.schoolName}
            class={true}
          />
          <OutputField
            fieldName="Title of Study:"
            field={props.field.titleStudy}
            class={true}
          />

          <OutputField
            fieldName="Date of Study:"
            field={props.field.dateStudy}
            class={true}
          />
        </div>
      </div>
      <div className="mainOutputContent">
        <Title title="Experience" />
        <div className="section">
          <OutputField
            fieldName="Company Name:"
            field={props.field.companyName}
            class={true}
          />
          <OutputField
            fieldName="Position:"
            field={props.field.position}
            class={true}
          />
          <OutputField
            fieldName="Main Tasks:"
            field={props.field.mainTasks}
            class={true}
          />
          <OutputField
            fieldName="Period Worked:"
            field={props.field.periodWorked}
            class={true}
          />
        </div>
      </div>
    </div>
  );
}
 export default MainOutput;