import React from "react";
import axios from "axios";
import "./LandingPage.css";
import { Redirect } from "react-router-dom";

export default class LandingPage extends React.Component {
  handleDropdown(e) {
    e.preventDefault();
    // console.log("the function can run from click event to the bar icon");
    var dropdownIcon = document.getElementById("responsive-toggle");
    // var topnavContainer = document.getElementById();
    if (dropdownIcon.className === "topnav") {
      dropdownIcon.className += " responsive";
    } else {
      dropdownIcon.className = "topnav";
    }
    // console.log(dropdownIcon.className);
  }

  render() {
    return (
      <div>
        <div className="topnav" id="responsive-toggle">
          <div className="topnav-containers" id="topnav-logo">
            <img src={require("../resources/logo.svg")}></img>
          </div>
          <div className="topnav-containers" id="topnav-a-href" onChange>
            {/* if you add more option in here, add them also in responsive div */}
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
            <a
              href="javascript:void(0);"
              className="bar-icon"
              onClick={this.handleDropdown}
            >
              <i className="fa fa-bars"></i>
            </a>
          </div>
          <div className="topnav-containers" id="responsive-toggle-down">
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
          </div>
        </div>

        <div className="signup-box">
          <div className="signup-box-containers" id="signup-box-content">
            <h1>Freight, on Demand</h1>
            <p>
              Relaymile enables carriers to grow their transportation businesses
              and reduce maintenance costs
            </p>
            <a href="/signup">Sign Up</a>
          </div>
          <div className="signup-box-containers" id="signup-box-img">
            <img
              id="relay-img"
              src={require("../resources/login-image.svg")}
            />
          </div>
        </div>

        <div className="info">
          {/* get the padding responsive, img and header */}
          {/* change the css that assign id = starting-image to class = starting-container */}
          <div className="info-container-odd-nth">
            <div className="starting-container" id="starting-content">
              <div id="starting">
                <h1>Starting</h1>
              </div>
              <h2>Sign Up</h2>
              <p>Create company account in minutes!</p>
              <h2>Become a Certified Carrier</h2>
              <p>Upload your DOT permits within a few quick clicks.</p>
              <h2>Find shippers fast</h2>
              <p>Our intuitive load board helps you locate a job in seconds.</p>
            </div>
            <div className="starting-container" id="starting-image">
              <img src={require("../resources/monitor-lock.svg")}></img>
            </div>
          </div>

          <div className="info-container-even-nth">
            <div className="driving-container" id="driving-content">
              <div id="driving">
                <h1>Driving</h1>
              </div>
              <h2>Run the Delay</h2>
              <p>
                Long haul trips are divided into sections and involve multiple
                carriers, making most runs under 300 miles for any one driver.
              </p>
              <h2>Save valuable loading time</h2>
              <p>80% of deliveries are drop and hook.</p>
              <h2>Avoid deadheading</h2>
              <p>90% of posted jobs have a return freight ready to go</p>
            </div>
            <div className="driving-container" id="driving-image">
              <img src={require("../resources/truck-arrows.svg")}></img>
            </div>
          </div>

          <div className="info-container-odd-nth">
            <div className="starting-container" id="starting-content">
              <div id="starting">
                <h1>Thriving</h1>
              </div>
              <h2>Choose the jobs you want</h2>
              <p>
                Select loads that are right for you based on distance, location,
                and more.
              </p>
              <h2>Balance work with life</h2>
              <p>
                We help drivers find short runs that get them home every night.
              </p>
              <h2>Form lasting connections</h2>
              <p>
                Prefer jobs from a particular shipper? Why not become their
                number one carrier? Through Relaymile, you can work with your
                favorite shippers as often as they have loads to transport
              </p>
            </div>
            <div className="starting-container" id="starting-image">
              <img
                src={require("../resources/think-outside-box.svg")}
                id="head-pic"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
