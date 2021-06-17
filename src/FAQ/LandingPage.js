import React from 'react';
import axios from 'axios';
import './LandingPage.css';
import { Link, Redirect } from 'react-router-dom';

export default class LandingPage extends React.Component {
  handleDropdown(e) {
    e.preventDefault();
    // console.log("the function can run from click event to the bar icon");
    var dropdownIcon = document.getElementById("responsive-toggle");
    // var topnavContainer = document.getElementById();
    if (dropdownIcon.className === "topnav") {
      dropdownIcon.className += " responsive";
    }
    else {
      dropdownIcon.className = "topnav";
    }
    // console.log(dropdownIcon.className);
  }

  render() {
    return (
      <div>
        <div className="topnav" id="responsive-toggle">
          <div className="topnav-containers" id="topnav-logo">
            <img src={require("./../resources/logo.svg")}></img>
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
          <div className="signup-box-content">
            <h1>Conquer the Freight Market</h1>
            <p>
              Join the ultimate logistics network, expand your horizons and
              design your success
            </p>
            <div className="button-group">
              <a href="/login">Carriers</a>
              <a href="/login">Shippers & Brokers</a>
            </div>
          </div>
          <div className="signup-box-image">
            <img src={require("./../resources/conquerTheFreightMarket.svg")} />
          </div>
        </div>

        <div className="shippers-box">
          <div className="shippers-box-containers">
            <h1>Shippers</h1>
            <p>
              We bring together expert Shippers, Carriers, and Brokers, making
              Relaymile the perfect place to refine your shipping process
            </p>
          </div>
        </div>

        <div className="brokers-box">
          <div className="brokers-box-image">
            <img src={require("./../resources/brokersTakeAdvantageOf.svg")} />
          </div>
          <div className="brokers-box-content">
            <h1>Brokers</h1>
            <p>
              Take advantage of the best tools and the strongest network to move
              any freight and compete with the big players
            </p>
          </div>
        </div>

        <div className="signup-box" style={{ backgroundColor: "#FEF9EE" }}>
          <div className="signup-box-content" style={{ marginTop: "0" }}>
            <h1>Carriers</h1>
            <p>
              Join the ultimate logistics network, and grow your business by
              maximizing your earnings and improving driver retention
            </p>
          </div>
          <div className="signup-box-image">
            <img src={require("./../resources/carriersJoinTheUltimate.svg")} />
          </div>
        </div>

        <div className="two-images-box">
          <div className="two-images-box-content">
            <img src={require("./../resources/carriersSignUp.svg")} />
            <p>Carriers</p>
            <a href="/signup">Carriers Signup</a>
          </div>
          <div className="two-images-box-content">
            <img src={require("./../resources/shippersBrokersSignUp.svg")} />
            <p>Shippers & Brokers</p>
            <a href="/signup">Shippers & Brokers Signup</a>
          </div>
        </div>
        <footer>
          <div className="footer-container">
            <div className="top-row">
              <div className="col-1">
                <h3>About</h3>
                <p>
                  Relaymile is the ultimate logistics network combining the most
                  innovative tools and a robust network that helps the supply
                  chain move.
                </p>
              </div>
              <div className="col-2">
                <ul className="list-unstyled">
                  <li>
                    <h3>Quick Links</h3>
                  </li>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/signup">Sign up</a>
                  </li>
                  <li>
                    <a href="/" target="_blank">
                      Blog
                    </a>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="bottom-row">
              <div className="small-size-p">
                Copyright Relaymile &copy; {new Date().getFullYear()}. All
                Rights Reserved
              </div>
              <div className="col social-icons">
                <a
                  href="https://www.facebook.com/relaymile"
                  target="_blank"
                  className="icon-link round facebook fill"
                >
                  <i className="fa fa-facebook"></i>
                </a>

                <a
                  href="https://www.linkedin.com/company/relaymile/"
                  target="_blank"
                  className="icon-link round linkedin fill"
                >
                  <i className="fa fa-linkedin"></i>
                </a>

                <a
                  href="https://www.instagram.com/relaymile/"
                  target="_blank"
                  class="icon-link round instagram fill"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}