import Button  from "./button";
import React from "react";
import DocPatientImg from "../resources/doctorandpatient.png"
import "../css/register.css"
import { Link } from "react-router-dom";

const Register = () => {


  return (
    <div className="mainContent">
      <div className="PatientImg">
        <img src={DocPatientImg} height="300px" alt="Dr.Pace_Login"/>
      </div>

      <div className="registerBox">
        <div className="docRegister">

          <h1>Doctor</h1>
          <Link to="/DocRegister">
           <button className="signUpBtn">Signup</button>
            </Link>
          <br />
          <Link to="/DocSignIn">
            <Button></Button>
            </Link>

        </div>
        <div className="v"></div>
        <div className="patRegister">
          <h1>Patient</h1>
          <Link to="/PatientRegister">
            <button className="signUpBtn">Signup</button>
            </Link>
          <br />
          <Link to="/PatientLogin">
          <Button></Button>
          </Link>
        </div>
      </div>

    </div>
  )
}
export default Register;