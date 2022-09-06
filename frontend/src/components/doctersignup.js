
import Button from "./button";
import React from "react";
import "../css/loginform.css"
export const DocRegister = () => {


  return (
      <div className="sign">
      <div className="signBox">
        <h1>Doctor Signup</h1>
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
          <Button></Button>
        </form>
      </div>
    </div>
  )
}

