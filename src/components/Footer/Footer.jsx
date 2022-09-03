import React, { Component } from "react";
import "../../styling/Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p id="FooterText" className="text-muted">
          Typed by the fingers Jim Doyle
        </p>
      </footer>
    );
  }
}

export default Footer;
