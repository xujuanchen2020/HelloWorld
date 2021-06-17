import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      {/* two images block */}
      <div className="two-images-block">
        <div className="two-images-box-containers" id="two-images-box-imgOne">
          <img src={require("./../resources/carriers-image.svg")}></img>
          <p>Carriers</p>
          <a href="/signup">Carriers Signup</a>
        </div>
        <div className="two-images-box-containers" id="two-images-box-imgTwo">
          <img src={require("./../resources/brokersShippers.svg")} />
          <p>Shippers & Brokers</p>
          <a href="/signup">Shippers & Brokers Signup</a>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="container">
          <div className="topnav-containers" id="topnav-logo">
            <img src={require("./../resources/logo.svg")}></img>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {/* column1 */}
            <div className="col">
              <h3>Get In Touch</h3>
              <ul>
                <li>
                  <i className="fa fa-map"></i> 1904 Encinal Ave
                </li>
                <li>&nbsp; &nbsp; &nbsp; Alameda, CA (94501)</li>
                <li>
                  <i className="fa fa-envelope">&nbsp;</i>
                  <strong>Email: </strong>
                  <a href="mailto:adriang@relaymile.com">
                    <span className="orange-color">adriang@relaymile.com</span>
                  </a>
                </li>
                <li>
                  <i className="fa fa-phone">&nbsp;</i>
                  <strong>Call: </strong>
                  <a href="tel:+15106975623">
                    <span className="orange-color">(510) 697-5623</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* column2 */}
            <div className="col">
              <h3>Quick Links</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="orange-color">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/signup" className="orange-color">
                    Sign up
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank" className="orange-color">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/" className="orange-color">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            {/* column3 */}
            <div className="col">
              <h3>About Company</h3>
              <p>
                Relaymile started with the idea of helping small trucking
                businesses thrive by enabling drivers to take on jobs that get
                them home at the end of each day. We split long hauls into
                sections and have drivers pass cargo forward on the way to its
                destination, just like with a relay race. Our easy-to-use load
                board helps you find work and share hauls.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <p className="copyright">
            Copyright Relaymile &copy; {new Date().getFullYear()}. All Rights
            Reserved
          </p>

          <div>
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

            {/* <a href="#" target="_blank" class="icon-link round twitter fill">
                <i className="fa fa-twitter"></i>
              </a> */}

            <a
              href="https://www.instagram.com/relaymile/"
              target="_blank"
              class="icon-link round instagram fill"
            >
              {/* <i className="fa fa-twitter"></i> */}
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
