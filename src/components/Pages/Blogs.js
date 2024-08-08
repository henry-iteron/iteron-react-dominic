import React from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";

export default function Blogs() {
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
            <li>Blogs</li>
          </ul>
        </div>
      </div>

      <section className="blog-box">
        <div className="blogs-container">
          <div className="blog-post">
            <div className="web-container">
              <div className="blog-img">
                <img
                  src="	https://www.iterontech.com/wp-content/uploads/2021/05/web-design-best-practices-1170x591_c.jpg"
                  alt=""
                ></img>
                <span className="blog-date">12 MAY</span>
              </div>
              <div className="blog-title">
                <h3>
                  <a href="/satifiedblogs">
                    ITERON AG's Web Development Skills has Lead to Satisfied
                    Clients
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
                    <i class="fa fa-eye"></i> 1.7K
                  </li>{" "}
                </ul>
              </div>
              <div className="blog-contant">
                <p>
                  The continuous improvement of the internet has significantly
                  affected the way we live and communicate with each other. The
                  change ...
                </p>
              </div>
            </div>
            <div className="web-blog-container">
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
              <div className="blog-contant">
                <p>
                  Tricks for Responsive Design Introduction With new devices
                  such as smart phones, iPad, tablets which form the major chunk
                  devices ...
                </p>
              </div>
            </div>

            <div className="web-blog-container">
              <div className="blog-img">
                <img
                  src="https://www.iterontech.com/wp-content/uploads/2017/01/Screenshot-from-2019-07-18-16-37-49-1170x591_c.png"
                  alt=""
                ></img>
                <span className="blog-date">02 JAN</span>
              </div>
              <div className="blog-title">
                <h3>
                  <a href="/">What is new in Ruby that We are Cooking ?</a>
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
                    <i class="fa fa-eye"></i> 5.7K
                  </li>{" "}
                </ul>
              </div>
              <div className="blog-contant">
                <p>
                  What is New in Ruby that We are Cooking? As Ruby 2.0 is on the
                  verge of stable roll-out (Yes, ...
                </p>
              </div>
            </div>

            <div className="web-blog-container">
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
              <div className="blog-contant">
                <p>
                  Tips &amp; Tricks for a Successful E-Commerce Website Business
                  Environment has gradually shifted its growth and power into
                  the online ...
                </p>
              </div>
            </div>

            <div className="web-blog-container">
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
                    Sunspot Solr Search - Setting up in Rails App within 5
                    minutes
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
              <div className="blog-contant">
                <p>
                  Sunspot Solr Search – Setting up in Rails App within 5 minutes
                  Here’s a 5 minute guide for getting started ...
                </p>
              </div>
            </div>

            <div className="web-blog-container">
              <div className="blog-img">
                <img
                  src="https://www.iterontech.com/wp-content/uploads/2017/01/Screenshot-from-2019-07-18-15-56-22-1170x591_c.png"
                  alt=""
                ></img>
                <span className="blog-date">02 JAN</span>
              </div>
              <div className="blog-title">
                <h3>
                  <a href="/">
                    App Environment : What our Rails Developers prefer now
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
                    <i class="fa fa-eye"></i> 4.1K
                  </li>{" "}
                </ul>
              </div>
              <div className="blog-contant">
                <p>
                  App Environment : What our Rails Developers prefer now Rails
                  Developers – Environment Discussion Rails Developers always
                  want to do ...
                </p>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <div className="sidebar-heading">
              <h4>ABOUT ME</h4>
            </div>
            <div className="sidebar-bg">
              <div className="sidebar-img">
                <img
                  src="https://secure.gravatar.com/avatar/?s=96&d=mm&r=g"
                  alt=""
                ></img>
              </div>
            </div>
            <div className="categories">
              <h4>CATEGORIES</h4>
              <ul>
                <li>
                  <a href="/Consultant">
                    Consultant
                  </a>
                </li>
                <li>
                  <a href="/Technical">
                    Technical
                  </a>
                </li>
                <li>
                  <a href="/Uncategorized">
                    Uncategorized
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


    <section className="blog-box">
     <div className="page-navigate">
      <ul>
        <li>
          <a href="/blogs">
            <i class="fa fa-angle-left"></i>
          </a>
        </li>
        <li>
          <span aria-current="page" >
            1
          </span>
        </li>
        <li>
          <a
            href="/blogspage2"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="/blogspage2"
          >
            <i class="fa fa-angle-right"></i>
          </a>
        </li>
      </ul>
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
