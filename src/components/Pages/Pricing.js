import React from "react";
import "./Pricing.css";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <>
      <div className="pagetop">
        <div className="title-container">
          <h1>Our Costing Models</h1>
          <ul className="shortcut">
            <li>
              <Link className="hyper" to="/">
                Home
              </Link>
            </li>
            <li>Pricing Models</li>
          </ul>
        </div>
      </div>

      <section className="price-box">
        <div className="about-para">
          <p>
            We offer a wide range of Costing models for Small and Medium
            Businesses to manage Services within their planned budgets. Below
            tables provides a overview of all the Costing models we offer.
          </p>
        </div>
      </section>

      <section>
        <div className="price-cost-box">
          <div className="pricing-table">
            <div className="cost-name">
              <h3>
                <i>/ Monthly</i>
              </h3>
              <strong>Retainer Model</strong>
            </div>
            <div className="cost-container">
              <ul>
                <li>Dedicated Team assigned for the Project</li>
                <li>Minimum of 0.5 FTE per month needed</li>
                <li>10% off on standard rates for Retainers</li>
                <li>Weekly Work Report submitted by Team</li>{" "}
              </ul>
            </div>
            <div className="model-btn">
              <button className="view-model">View more models</button>
            </div>
          </div>

          <div className="pricing-table">
            <div className="cost-name">
              <h3>
                <i>/ Fortnighty</i>
              </h3>
              <strong>Time & Material Model</strong>
            </div>
            <div className="cost-container">
              <ul>
                <li>Scope variations due to Business Changes</li>
                <li>Daily Time sheets are maintained</li>
                <li>Timesheet published weekly for Approval</li>
                <li>Weekly Project status progression review</li>{" "}
              </ul>
            </div>
            <div className="model-btn">
              <button className="view-model">View more models</button>
            </div>
          </div>

          <div className="pricing-table">
            <div className="cost-name">
              <h3>
                <i>/ Weekly</i>
              </h3>
              <strong>Fixed price</strong>
            </div>
            <div className="cost-container">
              <ul>
                <li>Clear Scope definition from the Client</li>
                <li>Scope frozen after Discovery Phase</li>
                <li>10% spill over tolerance allowed</li>
                <li>Weekly review to Control the Scope</li>{" "}
              </ul>
            </div>
            <div className="model-btn">
              <button className="view-model">View more models</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="price-cost-box-1">
          <div className="pricing-table">
            <div className="cost-name">
              <h3>
                <i>/ Half year</i>
              </h3>
              <strong>Work packages Model</strong>
            </div>
            <div className="cost-container">
              <ul>
                <li>Purchase of work packages (hours)</li>
                <li>Work assigned on need basis to Team</li>
                <li>Non-utilised hours carried to next month</li>
                <li>Non-utilised hours expires after 3 months</li>{" "}
              </ul>
            </div>
            <div className="model-btn">
              <button className="view-model">View more models</button>
            </div>
          </div>

          <div className="pricing-table">
            <div className="cost-name">
              <h3>
                <i>/ Quarterly</i>
              </h3>
              <strong>shared Services Model</strong>
            </div>
            <div className="cost-container">
              <ul>
                <li>Customer has very intermittent work load</li>
                <li>Team shared with other Client Projects</li>
                <li>Resources assigned when ticket is created</li>
                <li>Internal KT to multiple Team members</li>{" "}
              </ul>
            </div>
            <div className="model-btn">
              <button className="view-model">View more models</button>
            </div>
          </div>

          <div className="pricing-table">
            <div className="cost-name">
              <h3>
                <i>/ Monthly</i>
              </h3>
              <strong>MVP/MVC Pricing Model</strong>
            </div>
            <div className="cost-container">
              <ul>
                <li>We offer Fixed price for MVP and MVC</li>
                <li>Special Rates to meet budget Constraints</li>
                <li>Scoping workshop is done at free of Cost</li>
                <li>Definitive Targets are agreed for launch</li>{" "}
              </ul>
            </div>
            <div className="model-btn">
              <button className="view-model">View more models</button>
            </div>
          </div>
        </div>
      </section>

      <section className="price-box">
        <div className="about-para-cost">
          <p>
            We offer flexible Costing models to create a win-win situation for
            the Clients. We focus on value generated for our Clients instead of
            hourly rates. The reason we are in Business is because of our
            Customers. So, it is important for us that our Customers’ Customer
            are happy.
          </p>
        </div>
      </section>

      <section className="price-cost">
        <div className="price-name">
          <h4>TERMS AND CONDITIONS</h4>
        </div>
        <div className="about-para-1">
          <p>
            ° No advance payment is taken from the Client<br></br>° Timesheet
            will be maintained on a Weekly basis and sent for approval to the
            Client<br></br>° Invoice will be raised on the first day of the
            month and Pay term 15 days net<br></br>° Client can cancel the
            contract with 2 weeks’ notice period. In such an event, ITERON will
            hand over all code, documents and other intellectual properties of
            the Client.<br></br>° ITERON will respect the hierarchy of the
            Client and will not involve in any unwarranted activities in other
            Projects or domains or with Suppliers and Customers of the Client
            <br></br>° ITERON declares that all the deliverables will be
            directly done by its own personnel from its delivery centers and not
            use any subcontractor
          </p>
        </div>
      </section>


      <section className="request-form">
        <div className="request-call">
          <div className="req-img">
            <img
              src="https://www.iterontech.com/wp-content/uploads/2017/01/callback.png"
              alt=""
            ></img>
          </div>
          <div className="call-form">
            <div className="call-title">
              <h3>
                Request a callback<i>.</i>{" "}
              </h3>
              <span>
                Would you like to speak to one of your Consultant? Just submit
                your details and we'll be in touch shortly
              </span>
            </div>
            <form>
              <div className="field">
                <div className="first-row">
                  <div>
                    <select>
                      <option>
                        <search></search>
                      </option>
                      <option className="pd">Product Development</option>
                      <option>Hire Developers</option>
                      <option>Consultancy</option>
                      <option>Application Support</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div>
                    <input type="text" placeholder="First Name" />
                  </div>
                </div>
                <div className="second-row">
                  <div>
                    <input type="text" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="call-btn">
                  <button>submit</button>
                </div>
              </div>
            </form>
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
