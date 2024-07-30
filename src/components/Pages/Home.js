import React from "react";
import Marquee from "react-fast-marquee";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="hometop">
        <img
          className="top"
          src="https://www.iterontech.com/wp-content/uploads/2022/02/Slider_iteron.jpg"
          alt=""
        />
      </div>

      <section className="award">
        <div className="award-name">
          <h4>AWARD AND SPONSERS </h4>
        </div>

        <div className="cnt">
          <Marquee autoFill pauseOnClick pauseOnHover speed={50} delay={2}>
            <div className="sample">
              <div className="box-border">
                <img
                  className="scroll-img"
                  src="https://www.iterontech.com/wp-content/uploads/2020/04/ieto-ITERON-partner-e1587476623175.jpeg"
                  alt=""
                ></img>
                <img
                  className="scroll-img"
                  src="	https://www.iterontech.com/wp-content/uploads/2020/04/elixir-forum-sponsor-e1587475174991.png"
                  alt=""
                ></img>
                <img
                  className="scroll-img"
                  src="	https://www.iterontech.com/wp-content/uploads/2020/04/goodfirms_ITERON_award.png"
                  alt=""
                ></img>
                <img
                  className="scroll-img"
                  src="https://www.iterontech.com/wp-content/uploads/2020/04/goodfirms-ITERON-Rating-e1587474357196.png"
                  alt=""
                ></img>
                <img
                  className="scroll-img"
                  src="	https://www.iterontech.com/wp-content/uploads/2020/04/cio-outlook-iteron-award.jpg"
                  alt=""
                ></img>
                <img
                  className="scroll-img"
                  src="https://www.iterontech.com/wp-content/uploads/2022/02/Global-Business-Leader-Mag.jpg"
                  alt=""
                ></img>
                <img
                  className="scroll-img"
                  src="	https://www.iterontech.com/wp-content/uploads/2020/04/CII-ITERON-partner-e1587474464987.png"
                  alt=""
                ></img>
              </div>
            </div>
          </Marquee>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="expert">
            <h5>Expertise in</h5>
            <p className="s1">
              ° Full stack Developments
              <br></br>
              <span className="s1">° Devops and Cloud expertise</span>
              <br></br>
              <span className="s1">° Elixer 1.5.0 & Erang 17.0 onwords </span>
              <br></br>
              <span className="s1">° Frameworks Phoenix, Mochi, Riak</span>
              <br></br>
              <span className="s1">° Ruby on rails, PHP Laravel, Symfony</span>
              <br></br>
              <span className="s1">° Reactjs, nodejs, Vuejs, Python, R</span>
              <br></br>
              <span className="s1">° React Native, Xamarin</span>
              <br></br>
              <span className="s1">
                ° sharepoint, C#, Java, .Net & Automation
              </span>
              <br></br>
              <span className="s1">° AWS, GCP Cloud Services</span>
            </p>
          </div>
          <div className="offerings">
            <h5>
              <strong>Offerings for</strong>
            </h5>
            <p className="s1">
              ° Expertice in all Industry very verticals
              <br></br>
              <span className="s1">° Custom Built solutions </span>
              <br></br>
              <span className="s1">° Industry specific solutions </span>
              <br></br>
              <span className="s1">° Rescue Projects takeover</span>
              <br></br>
              <span className="s1">° MVP, MVC for Startups</span>
              <br></br>
              <span className="s1">° Consultancy and Appliction Support</span>
              <br></br>
              <span className="s1">° Ground Zero Development</span>
              <br></br>
              <span className="s1">° Customised Business Solutions</span>
              <br></br>
              <span className="s1">° Application modernization</span>
            </p>
          </div>
          <div className="mobile-solution">
            <div className="mobile-read">
              <div className="mobile-together">
                <h6>
                  Web & Mobile <br></br> Business Solutions
                </h6>
              </div>
              <div className="read">
                <button>
                  <i class="fa-solid fa-book"></i> Read more...
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="AI-container">
          <div className="AI-solution">
            <div className="AI-read">
              <div className="AI-together">
                <h6>AI Solution</h6>
              </div>
              <div className="reading">
                <button className="AI">
                  <i class="fa-solid fa-book"></i> Read more
                </button>
              </div>
            </div>
          </div>
          <div className="expert">
            <h5>Expertise in</h5>
            <p className="s1">
              ° Machine & Deep Learning Models
              <br></br>
              <span className="s1">° Natural Language Processing(NLP)</span>
              <br></br>
              <span className="s1">° Predictive Analysis and Modeling </span>
              <br></br>
              <span className="s1">° Image and Voice Processing</span>
              <br></br>
              <span className="s1">° Computer Vision</span>
              <br></br>
              <span className="s1">° Retina Tracking Solution</span>
            </p>
          </div>
          <div className="Industry-solution">
            <h5>
              <strong>Industry Solution for</strong>
            </h5>
            <p className="s1">
              ° Digital Marketing
              <br></br>
              <span className="s1">° pharmaceuticals </span>
              <br></br>
              <span className="s1">° Supply Chain Management </span>
              <br></br>
              <span className="s1">° Zoo and Museums</span>
              <br></br>
              <span className="s1">° Retails & Advertising</span>
              <br></br>
              <span className="s1">° Real Estate Management</span>
            </p>
          </div>
        </div>
      </section>
      <section className="BlockChain">
        <div className="container">
          <div className="expert">
            <h5>Expertise in</h5>
            <p className="s1">
              ° Hyperledger, Ethereum & EOS
              <br></br>
              <span className="s1">
                ° React js, Node js, other open sources
              </span>
              <br></br>
              <span className="s1">° REST APIs and Custom Services </span>
              <br></br>
              <span className="s1">° In-house build BlockChain framework</span>
              <br></br>
              <span className="s1">° Focus on Hyperledger Fabri, Burrow</span>
              <br></br>
              <span className="s1">° Caliper, iroha, Composer, Explorer</span>
            </p>
          </div>
          <div className="offerings">
            <h5>
              <strong>Industry Solution for</strong>
            </h5>
            <p className="s1">
              ° Education
              <br></br>
              <span className="s1">
                ° E-Invoicing instead of Digital Signature{" "}
              </span>
              <br></br>
              <span className="s1">° Oil and Natural Gas Solutions</span>
              <br></br>
              <span className="s1">° Hospital Management Solutions</span>
              <br></br>
              <span className="s1">° Real Estate Management</span>
              <br></br>
              <span className="s1">° Consultancy and Appliction Support</span>
            </p>
          </div>
          <div className="mobile-solution">
            <div className="mobile-read">
              <div className="mobile-together">
                <h6>
                  BlockChain <br></br> Solutions
                </h6>
              </div>
              <div className="read">
                <button>
                  <i class="fa-solid fa-book"></i> Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="total-count">
        <div className="count-box">
          <div className="storage">
            <div className="count">
              <div className="satis">
                <span className="number">80</span>
                <br></br>
                <span className="name">Statisfied Clients</span>
              </div>
              <div className="global">
                <span className="number">120</span>
                <br></br>
                <span className="name">Employees Globally</span>
              </div>
              <div className="project">
                <span className="number">150</span>
                <br></br>
                <span className="name">Projects deliverd</span>
              </div>
              <div className="location">
                <span className="number">6</span>
                <br></br>
                <span className="name">Global Location</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="working-model">
        <div className="title">
          <h1>OUR VALUES AND WORKING MODELS</h1>
        </div>

        <div className="outer-box">
          <div className="value-1">
            <div className="tech-team">
              <div className="tech-iteam">
                <div className="users-logo">
                  <i className="users fa-solid fa-users"></i>
                </div>
              </div>
              <div className="tech-name">Strong Technical Team</div>
              <p className="tech-para">
                Our Team is a combination of Functional resources from
                industries and Technical Experts The Technofunctional Team
                bridges the gap between business and IT
              </p>
            </div>
            <div className="tech-team">
              <div className="tech-iteam">
                <div className="users-logo">
                  <i className="users fa-solid fa-car"></i>
                </div>
              </div>
              <div className="tech-name">Unique Delivery Model</div>
              <p className="tech-para">
                We work on a right shore model to increase value and optimize
                costs to our Customers. Our global Team will cater to the needs
                of your business at onsite or near-shore or offshore
              </p>
            </div>
            <div className="tech-team">
              <div className="tech-iteam">
                <div className="users-logo">
                  <i className="users fa-solid fa-building-columns"></i>
                </div>
              </div>
              <div className="tech-name">Build Complex Solutions</div>
              <p className="tech-para">
                We have built many complex solutions for B2B and B2C markets.
                Our strong processes ensures that you meet your milestones on
                time within budgets
              </p>
            </div>
            <div className="tech-team">
              <div className="tech-iteam">
                <div className="users-logo">
                  <i className="users fa-solid fa-chart-line"></i>
                </div>
              </div>
              <div className="tech-name">Proven Track Record</div>
              <p className="tech-para">
                The experienced Team on global grounds is capable of handling
                any complex project Your half cooked product or stopped projects
                finds its way to success with us
              </p>
            </div>
          </div>
        </div>

        <div className="outer-box">
          <div className="value-1">
            <div className="tech-team">
              <div className="tech-iteam">
                <div className="users-logo">
                  <i className="users fa-regular fa-handshake"></i>
                </div>
              </div>
              <div className="tech-name">Support startups</div>
              <p className="tech-para">
                Startups are highly innovative but come with a need of cost
                constraints, quick deliveries, high quality. Our delivery model
                will address these unique needs of startups
              </p>
            </div>
            <div className="tech-team">
              <div className="tech-iteam">
                <div className="users-logo">
                  <i className="users fa-regular fa-file-code"></i>
                </div>
              </div>
              <div className="tech-name">Design Thinking</div>
              <p className="tech-para">
                “Eye for design” and “Do it right first time” by engaging
                experts, tools and processes Utility, usability, appealing,
                aesthetics, engaging are our key focus areas
              </p>
            </div>
            <div className="tech-team">
              <div className="tech-iteam">
                <div className="users-logo">
                  <i className="users fa-solid fa-recycle"></i>
                </div>
              </div>
              <div className="tech-name">Flexible Models</div>
              <p className="tech-para">
                From strategy and consultation to implementation and support, we
                are behind you 100% Pricing strategies includes Fixed price with
                Cap, Time and Material &amp; Dedicated Team
              </p>
            </div>
            <div className="tech-team">
              <div className="tech-iteam">
                <div className="users-logo">
                  <i className="users fa-solid fa-leaf"></i>
                </div>
              </div>
              <div className="tech-name">Eco Systems</div>
              <p className="tech-para">
                Innovation in IT requires a Platform Strategy needing
                simplification and cost effectiveness Quick adaption to new
                technologies and sustainable architecture is assured with us
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sponser-scroll">
        <div className="background">
          <div className="spons-title">
            <h2>They run our Business & We run their Applications !</h2>
          </div>

          <div className="ap-box">
            <Marquee autoFill pauseOnHover>
              <div className="application-img">
                <div className="box-application">
                  <img
                    className="ap-img"
                    src="https://www.iterontech.com/wp-content/uploads/2021/10/Kargotech.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="https://www.iterontech.com/wp-content/uploads/2021/10/Dalistovision.jpg"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="	https://www.iterontech.com/wp-content/uploads/2021/10/Telemedix.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="https://www.iterontech.com/wp-content/uploads/2021/10/Mastermind.jpg"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="	https://www.iterontech.com/wp-content/uploads/2021/10/vamp-1.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="https://www.iterontech.com/wp-content/uploads/2021/10/lacouronne.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="	https://www.iterontech.com/wp-content/uploads/2021/10/Firstclassmusic.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="	https://www.iterontech.com/wp-content/uploads/2021/11/housing.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="https://www.iterontech.com/wp-content/uploads/2021/10/McBitss.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="https://www.iterontech.com/wp-content/uploads/2021/10/Agira.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="	https://www.iterontech.com/wp-content/uploads/2021/10/Nihon.jpg"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="	https://www.iterontech.com/wp-content/uploads/2021/10/Sedin.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="	https://www.iterontech.com/wp-content/uploads/2021/10/JK-Import.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="https://www.iterontech.com/wp-content/uploads/2021/10/Ausbiz.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="https://www.iterontech.com/wp-content/uploads/2021/10/Studio-Moso.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="https://www.iterontech.com/wp-content/uploads/2021/10/Lanatech.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="	https://www.iterontech.com/wp-content/uploads/2021/10/Clixpert.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="https://www.iterontech.com/wp-content/uploads/2021/10/Meatapp.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="	https://www.iterontech.com/wp-content/uploads/2021/10/Fishpedia.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="https://www.iterontech.com/wp-content/uploads/2021/10/LaTabur.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="https://www.iterontech.com/wp-content/uploads/2021/10/Scoolze.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="https://www.iterontech.com/wp-content/uploads/2021/10/AimPMP.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="https://www.iterontech.com/wp-content/uploads/2021/10/Eventbuds.pn"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="	https://www.iterontech.com/wp-content/uploads/2021/10/Startuptechpartners.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="	https://www.iterontech.com/wp-content/uploads/2021/10/Orttus.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="https://www.iterontech.com/wp-content/uploads/2021/10/Nafnoofi.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="https://www.iterontech.com/wp-content/uploads/2021/10/Raretech.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="	https://www.iterontech.com/wp-content/uploads/2021/10/Markaati.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="https://www.iterontech.com/wp-content/uploads/2021/10/Alternative4.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="	https://www.iterontech.com/wp-content/uploads/2021/10/Motor-Club.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="	https://www.iterontech.com/wp-content/uploads/2021/10/Mafimushkil.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="	https://www.iterontech.com/wp-content/uploads/2021/10/danwox.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="	https://www.iterontech.com/wp-content/uploads/2021/10/LNH-Media.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="https://www.iterontech.com/wp-content/uploads/2021/10/Lupin-Atlantis.png"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="https://www.iterontech.com/wp-content/uploads/2021/10/Nihon.jpg"
                    alt=""
                  ></img>
                  <img
                    className="ap-img"
                    src="	https://www.iterontech.com/wp-content/uploads/2021/10/Sedin.png"
                    alt=""
                  ></img>
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </section>

      <section className="working-approach">
        <div className="approach-title">
          <h2 className="ap-name">Our Working Model & Approach</h2>
          <span className="s2">Seeing is believing !</span>
        </div>

        <div className="approch-container">
          <div className="img-container">
            <div className="img-1">
              <img
                src="https://www.iterontech.com/wp-content/uploads/2018/12/01_about-600x600-280x193_c.jpg"
                alt=""
              ></img>
              <ul className="list">
                <li>Initiate Contact</li>
                <li>Identify a Challenge</li>
                <li>Get a Free POC</li>
                <li>Kickoff POC</li>
                <li>Evaluate & Decide</li>
              </ul>
            </div>
            <div className="img-2">
              <img
                src="https://www.iterontech.com/wp-content/uploads/2018/12/Iteron-Slider-Images-4-280x193_c.jpg"
                alt=""
              ></img>
              <ul className="list">
                <li>plan your budget</li>
                <li>Define Scope</li>
                <li>Fix Delivery Dates</li>
                <li>Quality Control</li>
                <li>Agile Management</li>
              </ul>
            </div>
          </div>

          <div className="approache-toggle">
            <div className="iteam-toggle">
              <h2>CONTACT US WITH YOUR REQUIREMENT</h2>
              <div className="contant-toggle">
                <p className="toggle-para">
                  send us requirement with a short introduction to your current
                  challenges, project status and technology stack. Contact us !
                </p>
              </div>
            </div>
            <div className="iteam-toggle">
              <h2>GET A FREE PROOF OF CONCEPT</h2>
              <div className="contant-toggle">
                <p className="toggle-para">
                  Identify a challenge in your application landscape that can be
                  developed stand-alone. Avail a FREE 40 hours proof of concept
                </p>
              </div>
            </div>
            <div className="iteam-toggle">
              <h2>EXPERIENCE,EVALUVATE AND DECIDE</h2>
              <div className="contant-toggle">
                <p className="toggle-para">
                  Work with the our team for the POC. Experience our Working
                  model, professionalism and Quality. Evaluate our deliverable
                  and decide.
                </p>
              </div>
              <div className="iteam-toggle">
                <h2>FINALISE COLLABORATION & COST MODELS</h2>
                <div className="contant-toggle">
                  <p className="toggle-para">
                    After POC evaluvation, work together to decide the
                    roadmap,planning based on the budgets. scope and targets of
                    your Business plan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cost-models">
        <div className="approach-title">
          <h2 className="ap-name">Our Flexible Cost Models</h2>
          <span className="s2">
            we offer cost models not by market standards but by the value
            proposition and for your budget
          </span>
        </div>

        <div className="cost-1">
          <div
            className="cost-table"
            style={{
              backgroundImage: `url("https://www.iterontech.com/wp-content/uploads/2017/01/pricetable-bg-321x262_c.png")`,
            }}
          >
            <div className="cost-name">
              <h3>
                <i>/ Monthly</i>
              </h3>
              <strong>Retainer Model</strong>
            </div>
            <div className="cost-container">
              <ul>
                <li>Minimum commiment 3 months</li>
                <li>Repetitive work and long term</li>
                <li>special prices agreed mutually</li>
                <li>Dedicated Development assigned </li>
                <li>Weekly review of the tasks</li>
                <li>Invoice raised at the mont end</li>
              </ul>
            </div>
            <div className="model-btn">
              <button className="view-model">View more models</button>
            </div>
          </div>

          <div
            className="cost-table"
            style={{
              backgroundImage: `url("https://www.iterontech.com/wp-content/uploads/2017/01/pricetable-bg-321x262_c.png")`,
            }}
          >
            <div className="cost-name">
              <h3>
                <i>/ Daily</i>
              </h3>
              <strong>T&M Model</strong>
            </div>
            <div className="cost-container">
              <ul>
                <li>Understanding scope of work</li>
                <li>Assign resources on hourly rate</li>
                <li>Daiy stand up meetings & updates </li>
                <li>Weekly review of Developer's work </li>
                <li>Monthly timesheet sent for approval</li>
                <li>Invoice raised on approval of work</li>
              </ul>
            </div>
            <div className="model-btn">
              <button className="view-model">View more models</button>
            </div>
          </div>

          <div
            className="cost-table"
            style={{
              backgroundImage: `url("https://www.iterontech.com/wp-content/uploads/2017/01/pricetable-bg-321x262_c.png")`,
            }}
          >
            <div className="cost-name">
              <h3>
                <i>/ Yearly</i>
              </h3>
              <strong>Fixed price</strong>
            </div>
            <div className="cost-container">
              <ul>
                <li>Free scoping workshop done</li>
                <li>Scope clearly defined & frozen</li>
                <li>special Rates to meet budgets</li>
                <li>Milestone agreed & reviewed </li>
                <li>Weekly review of the project</li>
                <li>Invoice on milestone completion</li>
              </ul>
            </div>
            <div className="model-btn">
              <button className="view-model">View more models</button>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-toogle">
        <div className="pro-container">
          <div className="project-img">
            <div className="str-img">
              <img
                src="	https://www.iterontech.com/wp-content/uploads/2019/07/iteron-team-vs-one_v1.jpg"
                alt=""
              ></img>
            </div>
          </div>

          <div className="project-contant">
            <div className="project-name">
              <h2>We follow Pyramid structure for your projects</h2>
            </div>
            <span className="down">
              Right mixture of experts are important to delivery on time &
              within cost
            </span>

            <div className="skillset">
              <div className="skill-name">
                <strong>Business Analyst for you Industry-(10%)</strong>
              </div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
            </div>

            <div className="skillset">
              <div className="skill-name">
                <strong>Designer,UI/UX expert-(10%)</strong>
              </div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
            </div>

            <div className="skillset">
              <div className="skill-name">
                <strong>Developers, Consultants, Architects-(60%)</strong>
              </div>
              <div className="progress">
                <div className="progress-bar-devlop"></div>
              </div>
            </div>

            <div className="skillset">
              <div className="skill-name">
                <strong>Test Engineers, Test Managers-(10%)</strong>
              </div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
            </div>

            <div className="skillset">
              <div className="skill-name">
                <strong>Devops Specialists-(5%)</strong>
              </div>
              <div className="progress">
                <div className="progress-bar-devops"></div>
              </div>
            </div>

            <div className="skillset">
              <div className="skill-name">
                <strong>Project Managers & Delivery Managers-(5%)</strong>
              </div>
              <div className="progress">
                <div className="progress-bar-devops"></div>
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
                World Trade Center, Colombo 1
                <br></br>
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
                Picassoplatz 4
                <br></br>
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
                  <span className="s4">@ 2021  ITERON All Rights Reserved</span>
                 </p>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};
