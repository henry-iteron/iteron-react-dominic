import React from "react";
import "./Satifiedblogs.css";

export default function Satifiedblogs() {
  return (
    <>
      <section className="blog-box">
        <div className="web-container">
          <div className="blog-img">
            <img
              src="	https://www.iterontech.com/wp-content/uploads/2021/05/web-design-best-practices-1170x591_c.jpg"
              alt=""
            ></img>
            <span className="blog-date">12 MAY</span>
          </div>
          <div className="satified-blog-title">
            <h1>
              ITERON AG's Web Development Skills has Lead to Satisfied Clients
            </h1>
            <span>
              by{" "}
              <a href="/" title="">
                Elixir Consultant
              </a>
            </span>
            <div className="satified-ul">
              <ul>
                <li>
                  <i class="fa fa-comments"></i> 0
                </li>{" "}
                <li>
                  <i class="fa fa-eye"></i> 1.7K
                </li>{" "}
                <li>
                  <i class="fa-regular fa-bookmark"></i>
                  <a
                    href="/uncategorized"
                    title="View all posts in uncategorized-en"
                  >
                    Uncategorized
                  </a>
                </li>{" "}
              </ul>
            </div>
          </div>
          <div className="blog-contant">
            <p>
              The continuous improvement of the internet has significantly
              affected the way we live and communicate with each other. The
              change has been much bigger due to the ongoing pandemic where
              people have no choice but to rely more on the internet for
              livelihood, employment, education, and more necessities.
            </p>
            <p>
              While everyone depends on the internet to access daily needs,
              businesses are also starting to focus more on web development for
              their growth. Nowadays, it is one of the best ways to introduce
              your products and services to your target market, get to know your
              customers, and see how to improve your business. To accomplish all
              of these, you need to have the best web development company, like
              ITERON AG.
            </p>
            <p>
              Our company has a team of experts in full-stack development,
              custom-built web and mobile solutions, and more. We have plenty of
              advantages when it comes to knowledge in innovative technologies
              because we work with different organizations globally. The main
              goal of our company is to provide top-quality web and mobile app
              development that helps our clients achieve their business plans.
            </p>
            <p>
              As we continue to improve our services with the latest
              technologies, feedback from our clients roll in. Recently, we
              received a five-star rating review from Clutch, a B2B reviews and
              ratings website. The review was from a B2B winery platform.
            </p>
            <p>
              Our team developed a website that could connect them from the
              global wine community using React on the frontend and Elixir on
              the backend. Until now, we are the ones maintaining the site.
            </p>
            <p>
              According to their CEO, we provided a high-quality website with
              impressive capabilities and design. Our way of communicating with
              them has led to a strong partnership with them. When we work on a
              project, we always focus on delivering excellent results for our
              clients.
            </p>
            <p>
              “I’m impressed by how diligent, responsible, and focused they are.
              They’re experts in their craft, and they did well with the back-
              and frontend work.” – CEO, Vinvinea
            </p>
            <p>
              Aside from that, we are also honoured to be featured on The
              Manifest, a resource for businesses looking for service and
              solutions providers that suit their needs. We are truly grateful
              to be part of their top web development companies in Switzerland.
              This has done nothing but inspires us to continue catering to our
              client’s needs and exceeding their expectations.
            </p>
            <p>
              We provide nothing but the best! Reach out to us to experience our
              modern technology tools, top-quality services, and more. We can be
              your key player in your success.
            </p>
          </div>
        </div>
        <div className="tag">
          <strong>Tags :</strong>
        </div>

        <div className="form-profile">
          <div className="form-img">
            <img
              src="https://secure.gravatar.com/avatar/?s=96&d=mm&r=g"
              alt=""
            ></img>
          </div>
          <div className="form-name">
            <h4>Elixir consultant</h4>
          </div>
        </div>

        <div className="comment-form">
          <h3>Leave a comment</h3>
        </div>

        <form>
          <div className="form-inputs">
            <div className="input-box">
            <label >
              FIRST NAME*
              <input type="text" placeholder="Enter your name"></input>
            </label>
           </div>
           <div className="input-box">
            <label>
              EMAIL*
              <input type="mail" placeholder="Enter email address"></input>
            </label>
            </div>
          </div>
          <div className="URL-align">
            <label>
              WEBSITE* 
              <input type="link" placeholder="URL" ></input>
              </label>
          </div>
          <div className="URL-align">
            <label>PLEASE ENTER AN ANSWER IN DIGITS:</label>
          </div>
          <div className="URL-align">
            <label>1+3
              <input></input>
            </label>
          </div>
          <div className="comment-align">
            <label>COMMENT </label>
              <textarea placeholder="enter your comment">
              </textarea>
          </div>
          <div className="comment-btn">
            <button>POST COMMENT</button>
          </div>
        </form>
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
