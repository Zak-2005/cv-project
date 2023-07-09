import logo from "./logo.svg";
import "./App.css";
import React, { useState} from "react";
import Field from "./components/Field";
import Title from "./components/Title";
import MainOutput from "./MainOutput";

const MainInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [titleStudy, setTitleStudy] = useState("");
  const [dateStudy, setDateStudy] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [mainTasks, setMainTasks] = useState("");
  const [periodWorked, setPeriodWorked] = useState("");

  const setPersonalInfo = (value,subSec) => {
    if (subSec === "Name:") {
      setName(value);
    } else if (subSec === "Email:") {
      setEmail(value);
    } else {
      setPhoneNum(value);
    }
  }
    const setEducationInfo = (value,subSec) => {
      if (subSec === "School Name:") {
        setSchoolName(value)
      } else if (subSec === "Title of Study:") {
        setTitleStudy(value)
      } else {
        setDateStudy(value)
      }
    };

    const setExperienceInfo = (value,subSec) => {
      if (subSec === "Company Name:") {
        setCompanyName(value);
      } else if (subSec === "Position:") {
        setPosition(value);
      } else if (subSec === "Main Tasks at Job:") {
        setMainTasks(value);
      } else {
        setPeriodWorked(value);
      }
    };
  let title = "";
  let fields = [];

  return (
    <div className="mainContent">
      <div className="input">
        <div>
          
          <Title title="General Info" />
          <Field
            section={[name, email, phoneNum]}
            onChange={setPersonalInfo}
            fields={[
              { field: "Name:" },
              { field: "Email:" },
              { field: "Phone Number:" },
            ]}
          />
        </div>
        <div>
          
          <Title title="Education" />
          <Field
            section={[
              schoolName,
              titleStudy,
              dateStudy,
            ]}
            onChange={setEducationInfo}
            fields={[
              { field: "School Name:" },
              { field: "Title of Study:" },
              { field: "Date of Study:" },
            ]}
          />
        </div>
        <div>
          <Title title="Experience" />
          <Field
            section={[
              companyName,
              position,
              mainTasks,
              periodWorked,
            ]}
            onChange={setExperienceInfo}
            fields={[
              { field: "Company Name:" },
              { field: "Position:" },
              { field: "Main Tasks at Job:" },
              { field: "Period Worked" },
            ]}
          />
        </div>
      </div>

     <MainOutput field = {{name,email,phoneNum,schoolName,titleStudy,dateStudy,companyName,position,mainTasks,periodWorked}} />
    </div>
  );
};

export default MainInput;
