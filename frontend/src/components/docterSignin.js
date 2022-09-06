
import React from "react";

export const DocSignIn = () => {


  return (

    <div className="sign">
      <div className="signBox">
        <h1>Doctor Sign in</h1>
        <form  className="signform">

          <label>
            Phone
          </label>
          <input type="number" required></input>
          <button className="signUpBtn">Sign in</button>
        </form>
      <h2>Don't have an Account? <span><a href="/DocRegister">Sign up</a></span></h2>
      </div>
    </div>
  )
}

