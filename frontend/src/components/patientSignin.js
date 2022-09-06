
import React from "react";


export const PatientSignIn = () => {


  return (

    <div className="sign">
      <div className="signBox">
        <h1>Patient Signin</h1>
        <form  className="signform">

          <label>
            Phone
          </label>
          <input type="number" required></input>
         <button className="signUpBtn">Signin</button>
        </form>
      </div>
    </div>
  )
}

