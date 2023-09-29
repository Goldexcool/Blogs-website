"use client";
import Image from "next/image";
import styles from "../Styles/page.css";
import logo from "../Images/logo.svg";
import arrordown from "../Images/icon-arrow-light.svg";
import arrorUp from "../Images/icon-arrow-dark.svg";
import close from "../Images/icon-close.svg";
import { useState } from "react";
import hammenu from "../Images/icon-hamburger.svg";

export default function Home() {
  const [dropdown, setdropdown] = useState(false);
  const [hamDrop, setHamDrop] = useState(false);
  const [dropdownHam, setDropDownHam] = useState(false);

  const toogleDrop = () => {
    setdropdown(!dropdown);
  };

  const hamMenu = () => {
    setHamDrop(!hamDrop);
  };

  const hamConnect = () => {
    setDropDownHam(!dropdownHam);
  };

  return (
    <main className="main">
      <section className="f_sec">
        <header className="header">
          <nav className="navbar">
            <div className="logo_list">
              <Image src={logo} alt="logo" width={100} height={40} />
              <div className="product">
                <h1>Products</h1>
                <Image src={arrordown} alt="" width={12} height={8} />
              </div>

              <div className="company">
                <h1>Company</h1>
                <Image src={arrordown} alt="" width={12} height={8} />
              </div>

              <div className="connect">
                <h1>Connect</h1>
                <Image
                  src={dropdown ? arrorUp : arrordown}
                  alt=""
                  width={14}
                  height={9}
                  onClick={toogleDrop}
                />
                {dropdown && (
                  <div className="dropdown">
                    <ul>
                      <li>Contact</li>
                      <li>Newsletter</li>
                      <li>LinkedIn</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div></div>
            <div className="btn_nav">
              <h2 className="login">Login</h2>
              <button className="btn_signup">Sign Up</button>
            </div>
            <div className="ham">
              <Image
                src={hamDrop ? close : hammenu}
                alt=""
                width={18}
                height={15}
                onClick={hamMenu}
              />
            </div>
          </nav>
        </header>

        { hamDrop && (
          <div className="ham_menu_wrapper">
            <div className="ham_menu_drop">
              <div className="product_ham">
                <h1>Product</h1>
                <Image src={arrorUp} alt="" width={12} height={8} />
              </div>
              <div className="company_ham">
                <h1>Company</h1>
                <Image src={arrorUp} alt="" width={12} height={8} />
              </div>
              <div className="connect_ham">
                <h1>Connect</h1>
                <Image
                  src={arrorUp}
                  alt=""
                  width={12}
                  height={8}
                  onClick={hamConnect}
                />

                <div className="ham_con">
                  {/* <ul>
                    <li>Contact</li>
                    <li>Newsletter</li>
                    <li>LinkedIn</li>
                  </ul> */}
                </div>
              </div>
              <hr className="hr_line" />
              <div className="btn_btn">
                <h1>Login</h1>
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        )}
        <div className="image_bg">
          <div className="header_content_wrapper">
            <h1>A modern publishing platform</h1>
            <h2>Grow your audience and build your online brand</h2>
            <div className="ctn_btn">
              <button className="content_btn">Start for free</button>
              <button className="content_btnn">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="sec_sec">
        <div className="section_two_wrapper">
          <h1 className="section_two_header">Designed for the future</h1>
          <div className="flex_sec_two">
            <div className="const_wrapper_sectwo">
              <div className="first_sectwo_wrapper">
                <h1>Introducing an extensible editor</h1>
                <h2>
                  Blogr features an exceedingly intuitive interface which lets
                  you focus on one thing: creating content. The editor supports
                  management of multiple blogs and allows easy manipulation of
                  embeds such as images, videos, and Markdown. Extensibility
                  with plugins and themes provide easy ways to add functionality
                  or change the looks of a blog.
                </h2>
              </div>
              <div className="sec_sectwo_wrapper">
                <h1>Robust content management </h1>
                <h2>
                  enables users to easily move through posts. Increase the
                  usability of your blog by adding customized categories,
                  sections, format, or flow. With this functionality, you’re in
                  full control
                </h2>
              </div>
            </div>
            <div className="image_wrapper_sec_two">
              <div className="first_image_sectwo"></div>
              <div className="sec_img_sectwo"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="third_section">
        <div className="third_wrapper">
          <div className="third-img_wrapper">
            <div className="image_third"></div>
          </div>
          <div className="third_cnt">
            <h1>State of the Art Infrastructure</h1>
            <h2>
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </h2>
          </div>
        </div>
      </section>

      <section className="last_section"> 
        <div className="last_wrapper">
          <div className="last-sec_image"></div>
          <div className="last_con_wrapper">
            <div className="free_con">
              <h1>Free, open, simple</h1>
              <h2>
                Blogr is a free and open source application backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </h2>
            </div>
            <div className="power_con">
              <h1>Powerful tooling</h1>
              <h2>
                Batteries included. We built a simple and straightforward CLI
                tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
