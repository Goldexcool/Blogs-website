import React from "react";
import Image from "next/image";
import logo from "../Images/logo.svg";
import "../Styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_wrapper">
        <div className="content-wrapper">
          <Image src={logo} alt="" width={120} height={40} />
          <div className="products">
            <p>Product</p>
            <ul>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div className="companys">
            <p>Company</p>
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="connects">
            <p>Connect</p>
            <ul>
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
