import React from "react";
import "./Aboutus.css";
import { Link } from "react-router-dom";

export default function Aboutus() {
  return (
    <>
      <div className="pagetop-AI">
        <div className="title-container">
          <h1>About Us</h1>
          <ul className="shortcut">
            <li>
              <Link className="hyper" to="/">
                Home
              </Link>
            </li>
            <li>About ITERON</li>
          </ul>
        </div>
      </div>

      <section className="aboutus-box">
        <div className="about-cont">
          <div className="about-name">
            <h2>A Technology &amp; Consulting Company</h2>
          </div>
          <div className="about-para">
            <p>
              <strong>ITERON </strong>is fast growing dynamic Software
              development, Service and Consultancy company. Following are the
              legal entities in various Continents. We believe in
              "near-to-customer" model
            </p>
          </div>
        </div>
        <div className="about-ul">
          <ul>
            <li>
              <strong>
                <span style={{ color: "#00abc9" }}>ITERON AG</span>
              </strong>
              , Basel, Switzerland
            </li>
            <li>
              <strong>
                <span style={{ color: "#00abc9" }}>
                  ITERON Australia PTY Limited
                </span>
              </strong>
              , Canberra, Australia
            </li>
            <li>
              <strong>
                <span style={{ color: "#00abc9" }}>ITERON US Inc.</span>
              </strong>
              , Texas, US
            </li>
            <li>
              <strong>
                <span style={{ color: "#00abc9" }}>
                  ITERON Technologies Pvt. Limited
                </span>
              </strong>
              , Chennai, India
            </li>
            <li>
              <strong>
                <span style={{ color: "#00abc9" }}>
                  ITERON Lanka Pvt. Limited
                </span>
              </strong>
              , Colombo, Sri Lanka
            </li>
            <li>
              <strong>
                <span style={{ color: "#00abc9" }}>
                  ITERON Germany Branch Office
                </span>
              </strong>
              , Vöhl-Marienhagen, Germany
            </li>
          </ul>
        </div>
        <p className="about-para">
          <strong>An Information Technology</strong>&nbsp;firm providing
          innovative solutions to industries through modern technology tools,
          high end services, business consultancy and processes implementations.
          The group works on the concept of right&nbsp;shore models to cater to
          the needs of the clients effectively across the globe to overcome the
          cultural differences, language barriers and expectation gaps.
        </p>
        <p className="about-para">
          A key player in market with the following Business Units
        </p>
        <p className="about-para">
          <strong>&nbsp; </strong>° Blockchain Consultancy and Solutions
        </p>
        <p className="about-para">
          <strong>&nbsp; </strong>° AI Consultancy and Solutions
        </p>
        <p className="about-para">
          <strong>&nbsp; </strong>° Web and Mobile Development Services
        </p>
        <p className="about-para">
          <strong>&nbsp; </strong>° US and Germany focus on Microsoft
          Technologies like Sharepoint, .Net, Azure, Dynamics
        </p>

        <div className="about-backgroud">
          <div className="about-statics">
            <div className="satis-client">
              <div className="about-img-client">
                <img
                  src="https://www.iterontech.com/wp-content/uploads/2017/01/counter-icon1.png"
                  alt=""
                ></img>
              </div>
              <div className="count-contant">
                <strong className="about-count-number">80</strong>
                <br></br>
                <span className="about-count-name">Statisfied Clients</span>
              </div>
            </div>
            <div className="satis-client">
              <div className="about-img-client">
                <img
                  src="	https://www.iterontech.com/wp-content/uploads/2017/01/counter-icon2.png"
                  alt=""
                ></img>
              </div>
              <div className="count-contant">
                <strong className="about-count-number">120</strong>
                <br></br>
                <span className="about-count-name">Employees Globally</span>
              </div>
            </div>
            <div className="satis-client">
              <div className="about-img-client">
                <img
                  src="	https://www.iterontech.com/wp-content/uploads/2017/01/counter-icon4.png"
                  alt=""
                ></img>
              </div>
              <div className="count-contant">
                <strong className="about-count-number">150</strong>
                <br></br>
                <span className="about-count-name">Projects</span>
              </div>
            </div>
            <div className="satis-client">
              <div className="about-img-client">
                <img
                  src="https://www.iterontech.com/wp-content/uploads/2017/01/counter-icon1.png"
                  alt=""
                ></img>
              </div>
              <div className="count-contant">
                <strong className="about-count-number">4</strong>
                <br></br>
                <span className="about-count-name">Our Products</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-cont">
          <div className="about-name">
            <h2 style={{ color: "#000" }}>Growth Strategies</h2>
          </div>
          <div className="about-para">
            <p>
              Key to success of a Service Industry is the Expertise in-house.
              Below is the healthy mix we build and ensure to cater to the needs
              of the market. We take one vs Team approach. It is easy to hire a
              freelancer or Contractor but the risk for companies is very high.
              ITERON overcomes this risk by providing a mixture of experts in a
              Team for Project to optimize costs and increase value.
            </p>
          </div>
        </div>

        <div className="about-analysic">
          <div className="about-analysic-left">
            <div className="skillset">
              <div className="about-skill-name">
                <strong>Business Analyst for you Industry-(10%)</strong>
              </div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
            </div>

            <div className="skillset">
              <div className="about-skill-name">
                <strong>Designer,UI/UX expert-(10%)</strong>
              </div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
            </div>

            <div className="skillset">
              <div className="about-skill-name">
                <strong>Developers, Consultants, Architects-(60%)</strong>
              </div>
              <div className="progress">
                <div className="progress-bar-devlop"></div>
              </div>
            </div>

            <div className="skillset">
              <div className="about-skill-name">
                <strong>Test Engineers, Test Managers-(10%)</strong>
              </div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
            </div>

            <div className="skillset">
              <div className="about-skill-name">
                <strong>Devops Specialists-(5%)</strong>
              </div>
              <div className="progress">
                <div className="progress-bar-devops"></div>
              </div>
            </div>

            <div className="skillset">
              <div className="about-skill-name">
                <strong>Project Managers & Delivery Managers-(5%)</strong>
              </div>
              <div className="progress">
                <div className="progress-bar-devops"></div>
              </div>
            </div>
          </div>
          <div className="about-analysic-right">
            <ul className="pro-list">
              <li>
                <i className="check fa-regular fa-circle-check"></i>Certified
                Consultants and Developers
              </li>
              <li>
                <i className="check fa-regular fa-circle-check"></i>Certified
                Project Managers
              </li>
              <li>
                <i className="check fa-regular fa-circle-check"></i>24x7
                Services
              </li>
              <li>
                <i className="check fa-regular fa-circle-check"></i>Custom Built
                applications
              </li>
              <li>
                <i className="check fa-regular fa-circle-check"></i>Application
                Support &amp; Maintenance
              </li>
            </ul>
          </div>
        </div>

        <div className="abt-center">
          <h4 style={{ color: "#000" }}>
            "We love what we do and we love helping others succeed at what they
            love to do."
          </h4>
        </div>
        <p className="about-para">
          ITERON's key focus is on Custom built innovative solutions based on
          new cutting edge technologies. The Company was formed by 4 Directors
          from different continents coming with more 20+ years of experience in
          outsourcing industry. Company specializes in Application
          Modernization, Application Re-engineering, Legacy Migration,
          Application Maintenance and Support.
        </p>
        <p className="about-para">
          An Information Technology firm providing innovative solutions to
          industries through modern technology tools, high end services,
          business consultancy and processes implementations. The group works on
          the concept of right shore models to cater to the needs of the clients
          effectively across the globe to overcome the cultural differences,
          language barriers and expectation gaps.
        </p>

        <div className="about-us-cont">
          <div className="about-us">
            <div className="tech-team">
              <div className="tech-iteam">
                <div className="users-logo">
                  <i className="users fa-regular fa-user"></i>
                </div>
              </div>
              <div className="tech-name">Who we are?</div>
              <p className="about-para" style={{ textAlign: "center" }}>
                We are a team of 120+ Consultants with experience on global
                grounds in various industry verticals. Programming fascinates us
                !
              </p>
            </div>
            <div className="tech-team">
              <div className="tech-iteam">
                <div className="users-logo">
                  <i className="users fa-solid fa-gears"></i>
                </div>
              </div>
              <div className="tech-name">What we do?</div>
              <p className="about-para" style={{ textAlign: "center" }}>
                We’re focused on honing our crafts and bringing everything we
                have to the table for our clients. We create custom built
                solutions !
              </p>
            </div>
            <div className="tech-team">
              <div className="tech-iteam">
                <div className="users-logo">
                  <i className="users fa-solid fa-thumbs-up"></i>
                </div>
              </div>
              <div className="tech-name">Why we do it?</div>
              <p className="about-para " style={{ textAlign: "center" }}>
                Working with clients who love their work combines into a fun,
                wonderful partnership for everyone involved. Quality is our
                Mantra !
              </p>
            </div>
          </div>
        </div>

        <div className="abt-detils">
          <div className="abt-1">
            <div className="abt-details-name">
              <h4>150+ Projects</h4>
            </div>
            <div className="abt-list">
              <ul>
                <li>Custom Built Solutions</li>
                <li>Support&amp; Maintenance</li>
                <li>End to End Services</li>
              </ul>
            </div>
          </div>
          <div className="abt-1">
            <div className="abt-details-name">
              <h4>80+ Costmers</h4>
            </div>
            <div className="abt-list">
              <ul>
                <li>Longterm relationships</li>
                <li>95% Satisfied Clients</li>
                <li>Global Client base</li>
              </ul>
            </div>
          </div>
          <div className="abt-1">
            <div className="abt-details-name">
              <h4>120+ Employees</h4>
            </div>
            <div className="abt-list">
              <ul>
                <li>85% Technical experts</li>
                <li>10% Business Analysts</li>
                <li>10% QA Engineers</li>
              </ul>
            </div>
          </div>
          <div className="abt-1">
            <div className="abt-details-name">
              <h4>6 Global locations</h4>
            </div>
            <div className="abt-list">
              <ul>
                <li>Right Shore model</li>
                <li>Value vs Costs</li>
                <li>Quick on-boarding</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="backgroud-abt">
          <div className="abt-review">
            <div className="abt-review-left">
              <div className="abt-review-para">
                <p>
                  Our engagement with ITERON began following a strategic
                  decision to transition the application development and support
                  of SAAS email campaign testing platform Touchstone from our
                  internal IT Team. ITERON managed the transition smoothly and
                  cost effectively with minimum impact on our day to day
                  Business. The team ITERON assigned to the Project is
                  professional and committed delivering high service levels. 2
                  years on from our initial engagement we consider ITERON to be
                  a key part of our IT roadmap. We are very happy with the
                  partnership
                </p>
                <br></br>
                <p>
                  <strong>
                    Mr. Dela Quist, | CEO | Alchemyworx | United Kingdom
                  </strong>
                </p>
              </div>
            </div>
            <div className="abt-review-right">
              <div className="abt-review-title">
                <h2>Long term engagements</h2>
                <p>
                  We just do not deliver what the Client wants but go beyond
                  that to ensure our Client's Client are happy.
                </p>
                <p>
                  <strong>At least 3 years minimum Client Engagements.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="abt-review">
          <div className="abt-review-right">
            <div className="abt-review-title">
              <h2>Customer Delightment</h2>
              <p>
                We go beyond Client Satisfaction by participating and go
                creating Solutions to Business needs.
              </p>
              <p>
                <strong>4.6 Satisfaction index out of 5</strong>
              </p>
            </div>
          </div>
          <div className="abt-review-left">
            <div className="abt-review-para">
              <p>
                ITERON ist unser Partner für unsere Web-App subito mf, und dies
                hat mehrere Gründe: Absolute Professionalität, schnelle
                Reaktionszeit, proaktive Kommunikation, Mitdenken bei der
                gemeinsamen Planung, grosser Erfahrungsschatz sowie ein
                unschlagbares Pricing aufgrund des Offshore Developments –
                bislang ist ITERON unsere beste IT-Erfahrung. Wir sind happy.
              </p>
              <br></br>
              <p>
                <strong>Mr. Athanassoglou, CEO, FirstClassMusic GmbH</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="backgroud-abt">
          <div className="abt-review">
            <div className="abt-review-left">
              <div className="abt-review-para">
                <p>
                  Wir arbeiten seit mehr als 3 Jahren mit ITERON als unseren
                  “End-to-End-Service-Provider” zusammen. ITERON hat es durch
                  das Cloud-Hosting unseres Back-Office-Store-Systems geschafft,
                  alle unsere Geschäftsbereiche zukunftssicher miteinander zu
                  verbinden. Die Kombination von onsite-offshore hat uns
                  geholfen, ein gutes Preis-Leistungs Verhältnis in Bezug auf
                  Qualität und Kosten zu erzielen.
                </p>
                <br></br>
                <p>
                  Das ITERON-Team versteht die Anforderungen unseres
                  Unternehmens an eine moderne IT-Lösung. Neue Ideen und
                  Innovationen zeigen uns täglich, welcher Mehrwert für unser
                  Produkt geschaffen wird. Die Flexibilität und das Engagement
                  des Management-Teams helfen uns, unser IT-Portfolio besser zu
                  planenund damit unser Business effektiver zu gestalten. Die
                  ITERON AG ist ein sehr zuverlässiger Partner, mit dem man
                  hervorragend arbeiten kann.
                </p>
                <br></br>
                <p>
                  <strong>
                    Mr.Zorn | CEO | FPZ Foods (Burger King) | Germany
                  </strong>
                </p>
              </div>
            </div>
            <div className="abt-review-right">
              <div className="abt-review-title">
                <h2>Project retainments</h2>
                <p>
                  We just do not deliver what the Client wants but go beyond
                  that to ensure our Client's Client are happy.
                </p>
                <p>
                  <strong>At least 3 years minimum Client Engagements.</strong>
                </p>
              </div>
            </div>
          </div>
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
