import React from "react";
import "./Digitize.css";
import { Link } from "react-router-dom";

export default function Digitize() {
  return (
    <>
      <div className="pagetop">
        <div className="title-container">
          <h1>
            Custom-Built Web and Mobile Solutions | Full Stack Developments |
            Application Maintance Support
          </h1>
          <ul className="shortcut">
            <li>
              <Link className="hyper" to="/">
                Home
              </Link>
            </li>
            <li>Digitize</li>
          </ul>
        </div>
      </div>

      <section id="offer">
        <div className="discount">
        <div className="offer-together">
          <div className="offer-container">
            <div className="offer-img">
              <img
                src="https://iterontech.com/wp-content/uploads/2019/01/buttons-2-min_v1.png"
                alt=""
              ></img>
            </div>
            <div className="proof">
              <div className="proof-contact">
                <div className="proof-title">
                  <h6>Get a free 40 hours Proof of Concept !</h6>
                </div>
                <div className="contact">
                  <button>
                    <i className="thum-icon fa-regular fa-thumbs-up"></i>CONTACT
                    US
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="offer-contant">
            <div className="offer-para">
              <p>
                ° <strong>Application modernization</strong> Life Cycle
                including assessment, rationalization<br></br>° Application{" "}
                <strong>re-engineering, transformation</strong>, migration,
                rollout maintenance<br></br>°{" "}
                <strong>On premises, cloud and hybrid</strong> applications
                provides choice and flexibility<br></br>° Technology{" "}
                <strong>architectural design</strong> and commission<br></br>°
                Guidelines to maintain{" "}
                <strong>User Interface consistency</strong>
                <br></br>° <strong>User experience (UI/UX)</strong> focuses on
                easy to use, engage and semi automation<br></br>°{" "}
                <strong>Responsive webpage</strong> designs and adaptability to
                touch devices<br></br>°<strong> Full integration cycle</strong>{" "}
                with internal and external applications<br></br>° Proven{" "}
                <strong>solution frameworks &amp; processes</strong> to speed up
                deliveries<br></br>° High quality through{" "}
                <strong>Right-Shore-Model</strong>
                <br></br>°<strong> Agile based development</strong> methodology
                <br></br>° <strong>Migration, porting,</strong> BDD, Unit
                Testing, Support and maintenance<br></br>°{" "}
                <strong>Mobile Strategies, Security</strong> and Solutions
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="total-count">
        <div className="count-box">
          <div className="storage">
            <div className="count">
              <div className="satis-client">
                <div className="satis-img">
                 <img src="https://www.iterontech.com/wp-content/uploads/2017/01/counter-icon1.png" alt=""></img>          
                </div>
                <div className="count-contant">
                <strong className="count-number">62</strong>
                <br></br>
                <span className="count-name">Statisfied Clients</span>
              </div>
              </div>
              <div className="satis-client">
                <div className="satis-img">
                 <img src="	https://www.iterontech.com/wp-content/uploads/2017/01/counter-icon2.png" alt=""></img>          
                </div>
                <div className="count-contant">
                <strong className="count-number">118</strong>
                <br></br>
                <span className="count-name">Web & Mobile Experts</span>
              </div>
              </div>
              <div className="satis-client">
                <div className="satis-img">
                 <img src="	https://www.iterontech.com/wp-content/uploads/2017/01/counter-icon4.png" alt=""></img>          
                </div>
                <div className="count-contant">
                <strong className="count-number">80</strong>
                <br></br>
                <span className="count-name">+ Project</span>
              </div>
              </div>
              <div className="satis-client">
                <div className="satis-img">
                 <img src="https://www.iterontech.com/wp-content/uploads/2017/01/counter-icon1.png" alt=""></img>          
                </div>
                <div className="count-contant">
                <strong className="count-number">20</strong>
                <br></br>
                <span className="count-name">Industries Expertise</span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="introduction-dizitise">
           <div className="dizit-container">
              <p className="dizit-para">
              We are experts in building&nbsp;Applications&nbsp;with open-source frameworks, open-source software–as-a-service platforms and custom developments. We help the customer’s business reach to market in short span of time using our experience in utilizing the best available technology platform. We have excellent experience to understand your business requirements and business model better, so to built a cost effective solutions.
              </p>
           </div>
      </section>

    </>
  );
}
