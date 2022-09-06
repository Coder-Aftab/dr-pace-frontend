import React from "react";
import "../css/home.css"
import docImg from "../resources/Doctorfront.png"


const Home = () => {


  return (
  <>
  <div className="homeAd">
        <div className="mainText">
          <h1>Dr.Pace</h1>
          <p>Find Your Medical <br></br>soltuion here</p>
        </div>
        <div className="mainImg">

          <img src={docImg} height="556px" alt="mainDoc"></img>
        </div>
      </div>
      <hr></hr>
      <div className="Search">
        <h1>Your Home For Health</h1>
        
      </div>
  </>
  )
}
export default Home;