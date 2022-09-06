
import Button from "./button";
import React from "react";
import "../css/doctersignup.css"
export const DocRegister = () => {


  return (
      <div className="docsignup">
      <div className="docBox">
        <h1>Doctor Signup</h1>
        <form  className="docform">
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

