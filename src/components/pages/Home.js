import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../../styles/portfolio.css";
import Particles from "react-particles-js";
import myParticlesConfig from "../../assets/Particles";
import myCursor from "../../assets/cursor";
import mypic2 from "../../assets/images/myimg.png";
import aboutpic from "../../assets/images/mypic2.png";
import pic7 from "../../assets/images/pic7.jpg";
import pic1 from "../../assets/images/pic1.jpg";
import pic2 from "../../assets/images/pic2.jpg";
import pic3 from "../../assets/images/pic3.jpg";
import pic4 from "../../assets/images/pic4.jpg";
import pic5 from "../../assets/images/pic5.jpg";
import pic6 from "../../assets/images/pic6.jpg";
import tek from "../../assets/images/tek.png";
import gitCourse from "../../assets/images/git.png";
import jsCourse from "../../assets/images/jscourse.png";
import mjsCourse from "../../assets/images/mjscourse.png";
import music from "../../assets/images/music.png";
import karate from "../../assets/images/Karate.png";
import band from "../../assets/images/band.png";
import yoga from "../../assets/images/yoga.png";
import code from "../../assets/images/code.png";
import model from "../../assets/images/model.png";
import paper from "../../assets/images/mypaper.png";
import ADAc from "../../assets/images/ADAc.png";
import IITB from "../../assets/images/IITBand.png";

export default function Home() {
  useEffect(() => {
    myCursor();
    let navL = document.querySelectorAll(".nav__link");
    navL.forEach((n) => n.addEventListener("click", linkAction));
    console.log(process.env.REACT_APP_HOME_PAGE);
    const srconfig = {
      origin: "top",
      duration: 2000,
      reset: false,
      distance: "80px",
    };
    const sr = ScrollReveal(srconfig);
    sr.reveal(".home__title", {});
    sr.reveal(".button", { delay: 200 });
    sr.reveal(".home__img", { delay: 400 });
    sr.reveal(".home__social-icon", { interval: 200 });

    sr.reveal(".about__img", {});
    sr.reveal(".about__subtitle", { delay: 200 });
    sr.reveal(".about__text", { delay: 400 });

    sr.reveal(".skills__subtitle", {});
    sr.reveal(".skills__text", { delay: 200 });
    sr.reveal(".skills__data", { interval: 200 });
    sr.reveal(".skills__img", { delay: 400 });

    sr.reveal(".work__img", { interval: 200 });
    sr.reveal(".contact__input", { interval: 200 });
  }, []);

  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
    if (toggle && nav) {
      nav.classList.toggle("show");
    }
  };

  function linkAction() {
    let navL = document.querySelectorAll(".nav__link");
    navL.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
  }

  return (
    <div>
      <div className="cursor"></div>
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="#home" className="nav__logo">
              Kartikey
            </a>
          </div>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#work" className="nav__link">
                  Work
                </a>
              </li>
              <li className="nav__item">
                <a href="#certifications" className="nav__link">
                  Certifications
                </a>
              </li>
              <li className="nav__item">
                <a href="#blogs" className="nav__link">
                  Blog
                </a>
              </li>
              <li className="nav__item">
                <a href="#interests" className="nav__link">
                  Interests
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => {
              showMenu("nav-toggle", "nav-menu");
            }}
          >
            <i className="bx bx-menu-alt-left"></i>
          </div>
        </nav>
      </header>

      <main className="l-main">
        <section className="home bd-grid" id="home">
          <div className="home__data">
            <h1 className="home__title">
              Hi, <br />
              I'am <span className="home__title-color">Kartikey</span>
              <br />
              Front End Developer
            </h1>
            <a href="#contact" className="button btn-grad">
              Contact
            </a>
          </div>
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/kartikey-pandey-2603/"
              className="home__social-icon"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/kartikeypandey26"
              className="home__social-icon"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.instagram.com/kartik_2603/"
              className="home__social-icon"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </div>

          <div className="home__img">
            <img alt="" src={mypic2} />
          </div>
        </section>
        <section className="about section" id="about">
          <h2 className="section-title">About</h2>

          <div className="about__container bd-grid">
            <div className="about__img">
              <img alt="" src={aboutpic}></img>
            </div>

            <div>
              <h2 className="about__subtitle">I'am Kartikey</h2>
              <p className="about__text">
                I am curious to explore and learn new emerging interactive
                technologies, and try to find solutions in innovative ways.
                Hence, seeking a position in the field of Computer Science where
                I can utilize my skills to further work towards personal and
                professional development and contribute towards the prosperity
                of the organization.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1CF2617QcWlCKeaP9qbMiSIi03Mq3aZ5u/view?usp=sharing"
                className="button btn-grad"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>

          <div className="skills__container bd-grid">
            <div className="skills__right">
              <h2 className="skills__subtitle">Professional Skills</h2>
              <p className="skills__text">
                A good hold in programming languages like JavaScript, C, C++ and
                basic knowledge of Mobile App Development, Proficient in React
                and React Native, Material UI, Redux, OOP concepts and have
                strong Problem Solving skills and Management skills.
              </p>
              <img alt="" src={pic7} className="skills__img" />
            </div>
            <div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxl-react skills__icon"></i>
                  <span className="skill__name">React JS</span>
                </div>

                <div className="skills__bar skills__react"></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxl-react skills__icon"></i>
                  <span className="skill__name">React Native</span>
                </div>
                <div className="skills__bar skills__react"></div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxl-javascript  skills__icon"></i>
                  <span className="skill__name">Javascript</span>
                </div>

                <div className="skills__bar skills__js"></div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxl-css3  skills__icon"></i>
                  <span className="skill__name">CSS3</span>
                </div>

                <div className="skills__bar skills__css"></div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxl-html5  skills__icon"></i>
                  <span className="skill__name">HTML5</span>
                </div>

                <div className="skills__bar skills__html"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <h2 className="section-title">Work</h2>

          <div className="intern__container bd-grid">
            <div>
              <h2 className="skills__subtitle">Internship Experience</h2>
              <p className="skills__text">
                I gained proficiency in CSS, JavaScript, React Native, and React
                concepts through their practical implementations in company's
                live projects. I learnt how APIs are used to fetch, put and
                update data on databases, and implementing dynamic contents in
                the application. Furthermore in adding the final touch comprises
                of making the application responsive, attractive, and
                interactive.
              </p>
            </div>

            <div className="intern__data bd-grid">
              <div className="intern__item">
                <h3>1. Healimpilo, Bangalore, India</h3>
                <p className="text-bold">(Software Engineer Intern)</p>
                <p className="text-bold skills__text">Duration: 6 months</p>
                <p className="skills__text">
                  I extend regards to Healimpilo family which helped me to gain
                  the Industrial exposure as a software developer where I worked
                  in the frontend part to build a full fledged Mobile and Web
                  Application
                </p>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/10eIg5rD-q0A-QUbjF3V2WnAWo2FurDnd/view?usp=sharing"
                  className="button skills__text btn-grad"
                >
                  Certificate
                </a>
              </div>

              <div className="intern__item">
                <h3>2. ApplicateAI, Gurugram, India</h3>
                <p className="text-bold">(Software Engineer Intern)</p>
                <p className="text-bold skills__text ">Duration: 3 months</p>
                <p className="skills__text">
                  Thanks to ApplicateAI for letting me work with the front-end
                  team and guiding me throughout my work duration with regular
                  feedbacks in result helping me in improving the coding
                  practices
                </p>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1a9z-KxzbfttpyxNCkx1BIhQC0afHmf05/view?usp=sharing"
                  className="button skills__text btn-grad"
                >
                  Certificate
                </a>
              </div>
            </div>
          </div>
          <div className="project__container bd-grid">
            <div>
              <h2 className="skills__subtitle">Projects</h2>
              <p className="skills__text">
                Project means applying your technical knowledge in shaping a
                real-life object. The skills learnt during their 4 years of
                engineering life, will be applied in development of any
                real-life object. Every branch student needs to make a project
                that helps not only in making a resume attractive, but gives
                them an experience of working on skills and technology.
                Sometimes to develop a project one needs to work in a group, so
                that also increases team management skills, communication
                skills, and time management skills. The project a skilled
                engineer might be working on, however, won’t be successful
                unless there is an equally skilled project manager involved
                leading and managing the engineering project.
              </p>
            </div>
            <div className="work__container bd-grid">
              <div className="work__img">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://play.google.com/store/apps/details?id=com.pathshala.Pathshala"
                >
                  <div className="work__item"></div>
                  <h1>Pathshala App</h1>
                  <img alt="Pathshala App" src={pic1} />
                </a>
              </div>

              <div className="work__img">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://ssipmt.com/colonbreakers/"
                >
                  <div className="work__item"></div>
                  <h1>:breakers Website</h1>
                  <img alt="Colonbreakers" src={pic2} />
                </a>
              </div>

              <div className="work__img">
                <a href="https://play.google.com/store/apps/details?id=com.pathshala.SSIPMT_NOTES">
                  <div className="work__item"></div>
                  <h1>SSIPMT Notes App</h1>
                  <img alt="notes-app" src={pic3} />
                </a>
              </div>

              <div className="work__img">
                <a href="https://myfirstliveproject.000webhostapp.com/NSS%20Website/home.php">
                  <div className="work__item"></div>
                  <h1>NSS Cell Website</h1>
                  <img alt="nss-web" src={pic4} />
                </a>
              </div>

              <div className="work__img">
                <a href="https://www.mgautomations.com/">
                  <div className="work__item"></div>
                  <h1>
                    MG Automation
                    <br /> Website
                  </h1>
                  <img alt="mgautomation" src={pic5} />
                </a>
              </div>

              <div className="work__img">
                <div className="work__item"></div>
                <h1>GoRentz App</h1>
                <img alt="gorentz-app" src={pic6} />
              </div>
            </div>
          </div>
        </section>

        <section className="certifications section" id="certifications">
          <h2 className="section-title">Certifications</h2>
          <div className="certificate__container bd-grid">
            <div className="work__container bd-grid">
              <div className="work__img">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1SsLmQ6ATJ_BGRESlcReta2CgKRQg-5id/view?usp=sharing"
                >
                  <div className="work__item"></div>
                  <h1>
                    Mentorship by <br />
                    Teksystems
                  </h1>
                  <img alt="Mentorship" src={tek} />
                </a>
              </div>

              <div className="work__img">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.coursera.org/account/accomplishments/certificate/DNMH7C4ZUBBC"
                >
                  <div className="work__item"></div>
                  <h1>Git and GitHub</h1>
                  <img alt="git" src={gitCourse} />
                </a>
              </div>

              <div className="work__img">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.coursera.org/account/accomplishments/certificate/7FZZ63EKWPMF"
                >
                  <div className="work__item"></div>
                  <h1>
                    Javascript jQuey <br />
                    and JSON
                  </h1>
                  <img alt="js-course" src={jsCourse} />
                </a>
              </div>

              <div className="work__img">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.udemy.com/certificate/UC-84NWOTZH/"
                >
                  <div className="work__item"></div>
                  <h1>Modern JavaScript</h1>
                  <img alt="mjs-course" src={mjsCourse} />
                </a>
              </div>
              <div className="work__img">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1MzRc9nxmWh5UiTLpW5TmzfPBz_Z-9NwB/view?usp=sharing"
                >
                  <div className="work__item"></div>
                  <h1>
                    Analysis
                    <br /> and Design of
                    <br /> Algorithm
                  </h1>
                  <img alt="ADA" src={ADAc} />
                </a>
              </div>
              <div className="work__img">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.coursera.org/account/accomplishments/certificate/3LVJVPQ6DZGV"
                >
                  <div className="work__item"></div>
                  <h1>
                    Developing your
                    <br /> Musicianship
                  </h1>
                  <img alt="music" src={music} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="blogs section" id="blogs">
          <h2 className="section-title">Blogs</h2>
          <div className="blog__data bd-grid">
            <div className="blog__item">
              <h3>1. Fetching & Showing data from API in React</h3>
              <p className="text-bold">(Article on Medium)</p>
              <p className="text-bold skills__text">3 min read</p>
              <p className="skills__text">
                In this article, we are going to see how to fetch data from an
                API and show it on the front-end using React JS.
              </p>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://kartikeypandey619.medium.com/fetching-showing-data-from-api-in-react-js-3faec2f61a0e"
                className="button skills__text btn-grad"
              >
                Read
              </a>
            </div>

            <div className="blog__item">
              <h3 className="centered-text ">2. Coming soon</h3>
            </div>
            <div className="blog__item">
              <h3 className="centered-text ">3. Coming soon</h3>
            </div>
          </div>

          <div className=" bd-grid ">
            <h2 className="skills__subtitle">Research Papers</h2>
            <div className="paper__data bd-grid ">
              <div className="blog__item ">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1C2Gz1b0pSWQtBpNYNY3ImQeUDpC5nv3f/view?usp=sharing"
                  className="paper-link"
                >
                  <img src={paper} alt="paper" className="paper-img" />
                </a>

                <p className="paper-text ">
                  My Academic Research paper is published on Wesleyan Journal of
                  Research entitled
                  <br />
                  <span className="bold">
                    Gorentz App - Result of Study on Renting vs buying
                  </span>
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1C2Gz1b0pSWQtBpNYNY3ImQeUDpC5nv3f/view?usp=sharing"
                  className="button skills__text btn-grad"
                >
                  Read
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="interests section" id="interests">
          <h2 className="section-title">Achievements & Interests</h2>

          <div className="work__container bd-grid">
            <div className="work__img">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1NDFRTCleKfd6PJxd7gnaXgWh_Mje0wyB/view?usp=sharing"
              >
                <div className="work__item"></div>
                <h1>Brown Belt - Karate</h1>
                <img alt="Brown belt" src={karate} />
              </a>
            </div>

            <div className="work__img">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1XIfK09mEPsX4wM_JhZ0kAVPKhrJ56OdK/view?usp=sharing"
              >
                <div className="work__item"></div>
                <h1>
                  Runner-up
                  <br /> War of Bands
                  <br /> by NIT Raipur
                </h1>
                <img alt="band" src={band} />
              </a>
            </div>

            <div className="work__img">
              <a href="https://drive.google.com/file/d/1VRMBfNF5EhZsa-EvxKeqJMsTkIFQvLDh/view?usp=sharing">
                <div className="work__item"></div>
                <h1>Krack D Code 2.0</h1>
                <img alt="code" src={code} />
              </a>
            </div>

            <div className="work__img">
              <a href="https://drive.google.com/file/d/1gmZP-PpcFLqZlsyrQLS25GxwsRaJ2XsB/view?usp=sharing">
                <div className="work__item"></div>
                <h1>
                  Runner-up <br />
                  Model Making
                  <br /> by SSIPMT Raipur
                </h1>
                <img alt="model" src={model} />
              </a>
            </div>

            <div className="work__img">
              <a href="https://drive.google.com/file/d/1JAHuXvh_hO0a24-j66b2BQhVsQG_Gq3W/view?usp=sharing">
                <div className="work__item"></div>
                <h1>
                  Winner <br /> Yoga Competition <br /> by SSIPMT Raipur
                </h1>
                <img alt="yoga" src={yoga} />
              </a>
            </div>

            <div className="work__img">
              <a href="https://drive.google.com/file/d/1enrvIhpGI75wsJ6CWESkesuymv846zpa/view?usp=sharing">
                <div className="work__item"></div>
                <h1>
                  Participant <br />
                  Battle of Bands <br /> by IIT Bhilai
                </h1>
                <img alt="battle of bands" src={IITB} />
              </a>
            </div>
          </div>
          <div className="bd-grid">
            <div className="centered-text">
              <h1 className="sub-title">Hobbies</h1>
              <p className="skills__text">
                Music has a different aura, that keeps me motivated. It relaxes
                me and helps me in coming back to work with more positivity,
                confidence and energy. For me, music is the cure to every
                problem, it escalates the person to a whole different space.
                Music is hence not just an hobby for me, its a complete emotion.
              </p>
            </div>
            <div className="centered-text">
              <iframe
                src="https://www.youtube.com/embed/V0GGgOVZtMQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="yt-video"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="'contact section" id="contact">
          <h2 className="section-title">Contact</h2>

          <div className="contact__container bd-grid">
            <form action="" className="conatct__form">
              <input
                type="text"
                placeholder="Name"
                className="contact__input"
              />
              <input
                type="mail"
                placeholder="Email"
                className="contact__input"
              />
              <textarea
                name=""
                id=""
                cols={0}
                rows={10}
                className="contact__input"
              ></textarea>
              <input
                type="button"
                value="Contact"
                className="contact__button button btn-grad"
              />
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__title">Kartikey</p>

        <div className="footer__social">
          <a href="https://twitter.com/kartikey2603" className="footer__icon">
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/kartik_2603"
            className="footer__icon"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/kartikey.pandey.3939/"
            className="footer__icon"
          >
            <i className="bx bxl-facebook-circle"></i>
          </a>
        </div>
        <p>&#169; 2021 copyright all right reserved</p>
      </footer>
      <Particles className="my-particles" params={myParticlesConfig} />
    </div>
  );
}
