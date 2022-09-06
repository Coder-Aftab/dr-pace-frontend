import React from "react";
import "../css/home.css"
import docImg from "../resources/Doctorfront.png"


const Home = () => {


  return (
  <>
      <div className="homeAd">
        <div className="headerClass">
          <div className="mainText">
            <h1>Dr.Pace</h1>

            <div className="punchLine">
              <h2>Find Your Medical</h2>

            <h2>soltuion here</h2>
            </div>
            </div>

          <div className="mainImg">

            <img src={docImg} height="300px"   alt="mainDoc"></img>
          </div>
        </div>

        <hr></hr>
        <div className="mb">
      <div className="SearchBox">
        <h1>Your Home For Health</h1>
          <form>
            <input className="searchBar" type="text"></input>
            <input className="searchButton" type="submit"></input>
          </form>
          </div>
        </div>
    </div>
  </>
  )
}
export default Home;