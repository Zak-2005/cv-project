import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Field from "./components/Field";
import Title from "./components/Title";
import MainOutput from "./MainOutput";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phoneNum: "",
      schoolName: "",
      titleStudy: "",
      dateStudy: "",
      companyName: "",
      position: "",
      mainTasks: "",
      periodWorked: "",
    };

    this.title = "";
    this.fields = [];

    this.setPersonalInfo = this.setPersonalInfo.bind(this);
    this.setEducationInfo = this.setEducationInfo.bind(this);
    this.setExperienceInfo = this.setExperienceInfo.bind(this);
  }

  setPersonalInfo(value, subSec) {
    if (subSec === "Name:") {
      this.setState((previousState) => ({
        name: value,
      }));
    } else if (subSec === "Email:") {
      this.setState((previousState) => ({
        email: value,
      }));
    } else {
      this.setState((previousState) => ({
        phoneNum: value,
      }));
    }
  }
  setEducationInfo(value, subSec) {
    if (subSec === "School Name:") {
      this.setState((previousState) => ({
        schoolName: value,
      }));
    } else if (subSec === "Title of Study:") {
      this.setState((previousState) => ({
        titleStudy: value,
      }));
    } else {
      this.setState((previousState) => ({
        dateStudy: value,
      }));
    }
  }
  setExperienceInfo(value, subSec) {
    if (subSec === "Company Name:") {
      this.setState((previousState) => ({
        companyName: value,
      }));
    } else if (subSec === "Position:") {
      this.setState((previousState) => ({
        position: value,
      }));
    } else if (subSec === "Main Tasks at Job:") {
      this.setState((previousState) => ({
        mainTasks: value,
      }));
    } else {
      this.setState((previousState) => ({
        periodWorked: value,
      }));
    }
  }
  render() {
    return (
      <div className="mainContent">
        <div className="input">
          <Title title="General Info" />
          <Field
            section={[this.state.name, this.state.email, this.state.phoneNum]}
            onChange={this.setPersonalInfo}
            fields={[
              { field: "Name:" },
              { field: "Email:" },
              { field: "Phone Number:" },
            ]}
          />
          <Title title="Education" />
          <Field
            section={[
              this.state.schoolName,
              this.state.titleStudy,
              this.state.dateStudy,
            ]}
            onChange={this.setEducationInfo}
            fields={[
              { field: "School Name:" },
              { field: "Title of Study:" },
              { field: "Date of Study:" },
            ]}
          />
          <Title title="Experience" />
          <Field
            section={[
              this.state.companyName,
              this.state.position,
              this.state.mainTasks,
              this.state.periodWorked,
            ]}
            onChange={this.setExperienceInfo}
            fields={[
              { field: "Company Name:" },
              { field: "Position:" },
              { field: "Main Tasks at Job:" },
              { field: "Period Worked" },
            ]}
          />
        </div>

       <MainOutput field = {this.state} />
      </div>
    );
  }
}

export default App;
