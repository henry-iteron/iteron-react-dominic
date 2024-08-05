import React from "react";
import "./Cloud.css";
import { Link } from "react-router-dom";

export default function Cloud() {
  return (
    <>
      <div className="pagetop">
        <div className="title-container">
          <h1>
            Cloud Consulting | Cloud Migration | Cloud Security | Cloud Support
          </h1>
          <ul className="shortcut">
            <li>
              <Link className="hyper" to="/">
                Home
              </Link>
            </li>
            <li>Cloud services</li>
          </ul>
        </div>
      </div>

      <section>
        <div className="cloud-title">
          <h5>
            <strong>
              We transform your bussiness by enabling your Cloud strategies!
              Save energy and be close to your business
            </strong>
          </h5>
        </div>
      </section>

      <section className="cloud-cont-box">
        <div className="cloud-cont">
          <div className="right-cont">
            <div className="proof">
              <div className="proof-contact">
                <div className="proof-title">
                  <h6>Get a free 40 hours Proof of Concept !</h6>
                </div>
                <div className="contact">
                  <button>
                    <i className="thum-icon fa-regular fa-thumbs-up"></i>
                    CONTACT US
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="left-cont">
            <div className="left-para">
              <ul>
                <li>Quick reaction time and scalability</li>
                <li>
                  Increase productivity by eliminating infra and services times
                </li>
                <li>Low risk of downtime</li>
                <li>Reduced costs – pay for usage model</li>
                <li>Reduced costs by eliminating redundant resources</li>
                <li>Hassle free operations</li>
                <li>Zero dependency on your IT resources</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cloud-img-cont">
        <div className="cloud-img">
          <img
            src="https://www.iterontech.com/wp-content/uploads/2020/01/Screenshot-2020-01-31-at-14.58.08-1000x300.png"
            alt=""
          ></img>
        </div>
      </section>

      <section className="cloud-offer-block">
        <div className="cloud-offer">
          <div className="auto-offer-img">
            <img
              src="https://iterontech.com/wp-content/uploads/2019/01/buttons-2-min_v1.png"
              alt=""
            ></img>
          </div>

          <div className="cloud-offer-cont-1">
            <div className="cloud-offer-1">
              <h5>CLOUD SELECTION</h5>
              <p>
                ° Identify business needs<br></br>° Analyse Technology Stack
                <br></br>° Propose the right provider
              </p>
            </div>
            <div className="cloud-offer-1">
              <h5>CLOUD MIGRATION</h5>
              <p>
                ° Migrate legacy applications<br></br>° Transform objects to
                cloud<br></br>° Setup analytics
              </p>
            </div>
          </div>

          <div className="cloud-offer-cont-1">
            <div className="cloud-offer-1">
              <h5>FREE POC</h5>
              <p>
                ° Proof of Concepts<br></br>° Show a working model<br></br>°
                Show cloud capabilities
              </p>
            </div>
            <div className="cloud-offer-1">
              <h5>CLOUD SUPPORT</h5>
              <p>
                ° Warranty support<br></br>° Maintenance support<br></br>°
                Monitoring &amp; improvements
              </p>
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
                  <img
                    src="https://www.iterontech.com/wp-content/uploads/2017/01/counter-icon1.png"
                    alt=""
                  ></img>
                </div>
                <div className="count-contant">
                  <strong className="count-number">62</strong>
                  <br></br>
                  <span className="count-name">Statisfied Clients</span>
                </div>
              </div>
              <div className="satis-client">
                <div className="satis-img">
                  <img
                    src="	https://www.iterontech.com/wp-content/uploads/2017/01/counter-icon2.png"
                    alt=""
                  ></img>
                </div>
                <div className="count-contant">
                  <strong className="count-number">40</strong>
                  <br></br>
                  <span className="count-name">+ Cloud Experts</span>
                </div>
              </div>
              <div className="satis-client">
                <div className="satis-img">
                  <img
                    src="	https://www.iterontech.com/wp-content/uploads/2017/01/counter-icon4.png"
                    alt=""
                  ></img>
                </div>
                <div className="count-contant">
                  <strong className="count-number">25</strong>
                  <br></br>
                  <span className="count-name">+ Cloud Migrations</span>
                </div>
              </div>
              <div className="satis-client">
                <div className="satis-img">
                  <img
                    src="https://www.iterontech.com/wp-content/uploads/2017/01/counter-icon1.png"
                    alt=""
                  ></img>
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
      <section className="cloud-offer-block">
        <div className="cloud-offer">
          <div className="cloud-offer-cont-1">
            <div className="cloud-offer-1">
              <h5>REFERENCE CASE</h5>
              <p>
                ° Reusable blueprints<br></br>° Established solutions<br></br>°
                Quick Turnaround time
              </p>
            </div>
          </div>

          <div className="cloud-offer-cont-1">
            <div className="cloud-offer-1">
              <h5>RISK FREE MIGRATION</h5>
              <p>
                ° Zero downtime approach<br></br>° Undisrupted Switch over
                <br></br>° Compliance &amp; Governance
              </p>
            </div>
          </div>

          <div className="cloud-offer-cont-1">
            <div className="cloud-offer-1">
              <h5>PROMISE RETURNS</h5>
              <p>
                ° Agile IT environment<br></br>° Continuous Integration<br></br>
                ° Reduced costs
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cloud-logo-box">
        <div className="cloud-logo">
          <div className="cloud-logo-1">
            <img
              src="https://www.iterontech.com/wp-content/uploads/2020/01/AWS.png"
              alt=""
            ></img>
          </div>
          <div className="cloud-logo-2">
            <img
              src="	https://www.iterontech.com/wp-content/uploads/2020/01/Google_Cloud-150x150.png"
              alt=""
            ></img>
          </div>
          <div className="cloud-logo-3">
            <img
              src="	https://www.iterontech.com/wp-content/uploads/2020/01/DIO-150x119.png"
              alt=""
            ></img>
          </div>
          <div className="cloud-logo-4">
            <img
              src="	https://www.iterontech.com/wp-content/uploads/2020/01/Herokuap-150x150.png"
              alt=""
            ></img>
          </div>
        </div>
      </section>

      <section>
        <div className="background-clour">
          <div className="spons-title">
            <h2>OUR AMAZON WEB SERVICES OFFERINGS</h2>
          </div>
        </div>
      </section>

      <section>
        <div className="amazon-services">
          <div className="amazon-cont-1">
            <div className="amazon-logo-1">
              <img
                src="https://www.iterontech.com/wp-content/uploads/2020/01/EC2.png"
                alt=""
              ></img>
            </div>
            <div className="amazon-logo-1">
              <img
                src="https://www.iterontech.com/wp-content/uploads/2020/01/S3.png"
                alt=""
              ></img>
            </div>
          </div>

          <div className="amazon-cont-1">
            <div className="amazon-logo-1">
              <img
                src="https://www.iterontech.com/wp-content/uploads/2020/01/RDS.png"
                alt=""
              ></img>
            </div>
            <div className="amazon-logo-1">
              <img
                src="https://www.iterontech.com/wp-content/uploads/2020/01/EL.png"
                alt=""
              ></img>
            </div>
          </div>

          <div className="amazon-cont-1">
            <div className="amazon-logo-1">
              <img
                src="https://www.iterontech.com/wp-content/uploads/2020/01/DC.png"
                alt=""
              ></img>
            </div>
            <div className="amazon-logo-1">
              <img
                src="	https://www.iterontech.com/wp-content/uploads/2020/01/RS3.png"
                alt=""
              ></img>
            </div>
          </div>

          <div className="amazon-cont-1">
            <div className="amazon-logo-1">
              <img
                src="https://www.iterontech.com/wp-content/uploads/2020/01/EBS.png"
                alt=""
              ></img>
            </div>
            <div className="amazon-logo-1">
              <img
                src="https://www.iterontech.com/wp-content/uploads/2020/01/VPC.png"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </section>

      <section className="cloud-offer-block">
        <div className="cloud-offer">
          <div className="cloud-offer-cont-1">
            <div className="cloud-offer-1">
              <h5>CERTIFIED PROVIDER</h5>
              <p>
                ° 10+ AWS Certified experts<br></br>° 12+ years of cloud
                expertise<br></br>° Devops, Analytics, Databases
              </p>
            </div>
          </div>

          <div className="cloud-offer-cont-1">
            <div className="cloud-offer-1">
              <h5>AWS SERVICES</h5>
              <p>
                ° End to end service provider<br></br>° Operations &amp; data
                expertise<br></br>° Define your cloud roadmap
              </p>
            </div>
          </div>

          <div className="cloud-offer-cont-1">
            <div className="cloud-offer-1">
              <h5>AWS SOLUTIONS</h5>
              <p>
                ° Reusable blueprints<br></br>° Established solutions<br></br>°
                Quick Turnaround time
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cloud-offer-block">
        <div className="cloud-offer">
          <div className="cloud-offer-cont-1">
            <div className="proof">
              <div className="proof-contact">
                <div className="proof-title">
                  <h6>Get a free 40 hours Proof of Concept !</h6>
                </div>
                <div className="contact">
                  <button>
                    <i className="thum-icon fa-regular fa-thumbs-up"></i>
                    CONTACT US
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="aws-offer-cont-1">
            <div className="cloud-offer-1">
              <h5>AWS OFFERINGS</h5>
              <p>
                ° AWS professional Services<br></br>° AWS Native Development
                <br></br>° Implement CI/CD<br></br>° Managed AWS operations
                <br></br>° AWS Migration<br></br>° Enterprise data platform on
                AWS<br></br>° Any Operating System
              </p>
            </div>
          </div>

          <div className="cloud-offer-cont-1">
            <div className="cloud-offer-1">
              <h5>.</h5>
              <p>
                ° AWS Consulting and strategy<br></br>° Cloud automation
                <br></br>° Cloud optimizations<br></br>° Cloud security<br></br>
                ° DevOps on AWS<br></br>° 24/7 AWS Support<br></br>° AWS
                Solutions Provider Program – Resell
              </p>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="code-experts-container">
          <div className="lang-1">
            <div className="language-name">
              <h4>Container Services</h4>
            </div>
            <div className="lang-contant">
            <p>Deploy and manage containerised application. Enable running of apps using same tool sets on-premises or cloud</p>
            </div>
            
          </div>

          <div className="lang-2">
            <div className="language-name">
              <h4>Amazon Elastic Container</h4>
            </div>
            <div className="lang-contant">
            <p>Compute instances and run containers to eliminate a single point of failure and accelerate go-to-market for our Clients</p>
            </div>
          </div>

          <div className="lang-3">
            <div className="language-name">
              <h4>Amazon Fragate</h4>
            </div>
            <div className="lang-contant">
            <p>AWS Fargate is a compute engine for Amazon ECS that allows you to run containers without having to manage servers or clusters</p>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="code-experts-container">
          <div className="lang-1">
            <div className="language-name">
              <h4>AWS WAF</h4>
            </div>
            <div className="lang-contant">
            <p>Protect Clients from common web exploits, application downtime, consume excessive resources</p>
            </div>
            
          </div>

          <div className="lang-2">
            <div className="language-name">
              <h4>Amazon GaurdDuty</h4>
            </div>
            <div className="lang-contant">
            <p>Threat detection service to continuously monitor for malicious activity as well as unauthorized entries and weird behaviours</p>
            </div>
          </div>

          <div className="lang-3">
            <div className="language-name">
              <h4>Amazon Inspector</h4>
            </div>
            <div className="lang-contant">
            <p>An automated security and assessment service that helps improve the security of deployed applications</p>
            </div>
          </div>
        </div>
      </section>
         


      <section>
        <div className="overall-contant">
          <div className="right-tog">
            <div className="proof">
              <div className="proof-contact">
                <div className="proof-title">
                  <h6>Get a free 40 hours Proof of Concept !</h6>
                </div>
                <div className="contact">
                  <button>
                    <i className="thum-icon fa-regular fa-thumbs-up"></i>
                    CONTACT US
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="left-cont">
            <div className="tog-1">
              <div className="cont-title">
                <h2>CONTACT US WITH YOUR REQUIREMENT</h2>
              </div>
              <div className="cont-describe">
                <p>
                  Send us your requirement with short introduction to your
                  current challenges,project status and technology stack.
                  Contact us!
                </p>
              </div>
            </div>
            <div className="tog-2">
              <div className="cont-title">
                <h2>GET A FREE PROOF OF CONCEPT</h2>
              </div>
              <div className="cont-describe">
                <p>
                  Identify a Challenge in your application landscape that can be
                  developed stand-alone. Avail a FREE 40 hours proof of concept
                </p>
              </div>
            </div>
            <div className="tog-3">
              <div className="cont-title">
                <h2>EXPERIENCE, EVALUATE AND DECIDE</h2>
              </div>
              <div className="cont-describe">
                <p>
                  Work with the our team for the POC. Experience our Working
                  model, professionalism and Quality. Evaluate our deliverable
                  and decide.
                </p>
              </div>
            </div>
            <div className="tog-4">
              <div className="cont-title">
                <h2>FINALISE COLLABORATION & COST MODELS</h2>
              </div>
              <div className="cont-describe">
                <p>
                  After POC evaluvation, work together to decide the roadmap,
                  planning based on the budgets, scope and targets of your
                  Business plan.
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
