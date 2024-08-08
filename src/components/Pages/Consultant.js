import React from "react";
import "./Consultant.css";
import { Link } from "react-router-dom";

export default function Consultant() {
  return (
    <>
      <div className="pagetop-automation">
        <div className="title-container">
          <h1>Blogs</h1>
          <ul className="shortcut">
            <li>
              <Link className="hyper" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hyper" to="/blogs">
                Blogs
              </Link>
            </li>
            <li>Consultant</li>
          </ul>
        </div>
      </div>

      <section className="consultant-box">
        <div className="consultant-container">
          <div className="consultant-blog-container">
            <div className="blog-img">
              <img
                src="https://www.iterontech.com/wp-content/uploads/2017/01/Screenshot-from-2019-07-18-16-18-01-1170x591_c.png"
                alt=""
              ></img>
              <span className="blog-date">02 JAN</span>
            </div>
            <div className="blog-title">
              <h3>
                <a href="/">
                  Tips & Tricks for a Successful E-Commerce Website{" "}
                </a>
              </h3>
              <ul>
                <li className="posted-by">
                  by{" "}
                  <a
                    href="https://www.iterontech.com/author/nqelxqzfgk/"
                    title=""
                  >
                    Elixir Consultant
                  </a>
                </li>{" "}
                <li>
                  <i class="fa fa-comments"></i> 0
                </li>{" "}
                <li>
                  <i class="fa fa-eye"></i> 4.5K
                </li>{" "}
              </ul>
            </div>
          </div>

          <div className="consultant-blog-container">
            <div className="blog-img">
              <img
                src="https://www.iterontech.com/wp-content/uploads/2017/01/Screenshot-from-2019-07-18-16-03-35-1170x591_c.png"
                alt=""
              ></img>
              <span className="blog-date">02 JAN</span>
            </div>
            <div className="blog-title">
              <h3>
                <a href="/">
                  Sunspot Solr Search - Setting up in Rails App within 5 minutes
                </a>
              </h3>
              <ul>
                <li className="posted-by">
                  by{" "}
                  <a
                    href="https://www.iterontech.com/author/nqelxqzfgk/"
                    title=""
                  >
                    Elixir Consultant
                  </a>
                </li>{" "}
                <li>
                  <i class="fa fa-comments"></i> 0
                </li>{" "}
                <li>
                  <i class="fa fa-eye"></i> 6.9K
                </li>{" "}
              </ul>
            </div>
          </div>

          <div className="consultant-blog-container">
            <div className="blog-img">
              <img
                src="https://www.iterontech.com/wp-content/uploads/2017/01/Screenshot-from-2019-07-18-16-41-57-1170x591_c.png"
                alt=""
              ></img>
              <span className="blog-date">02 JAN</span>
            </div>
            <div className="blog-title">
              <h3>
                <a href="/">Tricks for Responsive Design</a>
              </h3>
              <ul>
                <li className="posted-by">
                  by{" "}
                  <a
                    href="https://www.iterontech.com/author/nqelxqzfgk/"
                    title=""
                  >
                    Elixir Consultant
                  </a>
                </li>{" "}
                <li>
                  <i class="fa fa-comments"></i> 0
                </li>{" "}
                <li>
                  <i class="fa fa-eye"></i> 3.9K
                </li>{" "}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-background">
          <div className="footer-content">
            <div className="asia">
              <div className="country-name">
                <h4>ASIA</h4>
              </div>
              <div className="coun-para">
                <p>
                  10/24 Lakshmipuram Extn
                  <br></br>
                  First Main Road
                  <br></br>
                  West Tambaram
                  <br></br>
                  India
                  <br></br>
                  +91 99406 40793
                </p>
              </div>
              <div className="srilanka-para">
                <p>
                  Level 26/34 East Tower
                  <br></br>
                  World Trade Center, Colombo 1<br></br>
                  Sri Lanka
                  <br></br>
                  +94(0)11 7430220
                </p>
              </div>
            </div>

            <div className="Europe">
              <div className="country-name">
                <h4>EUROPE</h4>
              </div>
              <div className="coun-para">
                <p>
                  Picassoplatz 4<br></br>
                  CH-4052 Basel
                  <br></br>
                  Switzerland
                  <br></br>
                  +41 (0)61 272 95 95
                </p>
              </div>
            </div>

            <div className="Australia">
              <div className="country-name">
                <h4>AUSTRALIA</h4>
              </div>
              <div className="coun-para">
                <p>Canberra</p>
              </div>
            </div>

            <div className="usa">
              <div className="country-name">
                <h4>USA</h4>
              </div>
              <div className="coun-para">
                <p>
                  700 N St.Mary's Street
                  <br></br>
                  Suite 1400
                  <br></br>
                  San Antonio
                  <br></br>
                  TX 78205
                  <br></br>
                  866-611-6228
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-strip">
          <div className="bottom-container">
            <div className="bottom-para">
              <p>
                <span className="s3">
                  <a>PRIVACY POLICY</a>
                </span>
                <span className="s4">@ 2021 ITERON All Rights Reserved</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
