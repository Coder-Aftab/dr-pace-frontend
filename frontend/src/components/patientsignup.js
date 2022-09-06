
import React from "react";

export const PatientRegister = () => {

  return (

   <div className="sign">
      <div className="signBox">
        <h1>Patient Signup</h1>
        <form  className="signform">
          <label>
            Name
          </label>
          <input type="text" required></input>

          <label>
            Phone
          </label>
          <input type="number" required></input>
          <label>
            Language
          </label>
          <input type="text" required></input>
          <label>
            email
          </label>
          <input type="email" required></input>
          <button className="signUpBtn">Signup</button>
        </form>
      </div>
    </div>
  )
}

