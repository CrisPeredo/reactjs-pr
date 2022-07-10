import { Instagram } from "@material-ui/icons";
import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="social">
          <a
            className="social-github"
            href="https://github.com/CrisPeredo"
            target="blank"
          >
            <GitHub
              color="secondary"
              fontSize="large"
              className="social-icons"
            />
          </a>
          <a
            className="social-linkedin"
            href="https://www.linkedin.com/in/cristian-peredo-666a86237/"
            target="blank"
          >
            <Instagram
              color="secondary"
              fontSize="large"
              className="social-icons"
            />
          </a>
        </div>

        <div className="copyright">
          © 2020 Copyright
          <a href="https://eduardo-gonzalez-portafolio.now.sh/" target="blank">
            {" "}
            Eduardo González
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
