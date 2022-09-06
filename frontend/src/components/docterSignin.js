
import React from "react";

export const DocSignIn = () => {


  return (

    <div className="sign">
      <div className="signBox">
        <h1>Doctor Signup</h1>
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

