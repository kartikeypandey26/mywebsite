import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../../styles/portfolio.css";
import mypic from "../../images/mypic6.png";
import aboutpic from "../../images/mypic2.png";
import pic7 from "../../images/pic7.jpg";
import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";
import pic4 from "../../images/pic4.jpg";
import pic5 from "../../images/pic5.jpg";
import pic6 from "../../images/pic6.jpg";

export default function Home() {
  useEffect(() => {
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
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="#home" className="nav__logo">
              Kartikey Pandey
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
            <i class="bx bx-menu-alt-left"></i>
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
            <a href="#contact" className="button">
              Contact
            </a>
          </div>
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/kartikey-pandey-2603/"
              className="home__social-icon"
            >
              <i class="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/kartikeypandey26"
              className="home__social-icon"
            >
              <i class="bx bxl-github"></i>
            </a>
            <a
              href="https://www.instagram.com/kartik_2603/"
              className="home__social-icon"
            >
              <i class="bx bxl-instagram"></i>
            </a>
          </div>

          <div className="home__img">
            <img alt="" src={mypic} />
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
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>

          <div className="skills__container bd-grid">
            <div>
              <h2 className="skills__subtitle">Professional Skills</h2>
              <p className="skills__text">
                A good hold in programming languages like JavaScript, C, C++ and
                basic knowledge of Mobile App Development, Proficient in React
                and React Native, Material UI, Redux, OOP concepts and have
                strong Problem Solving skills and Management skills.
              </p>

              <div className="skills__data">
                <div className="skills__names">
                  <i class="bx bxl-html5  skills__icon"></i>
                  <span className="skill__name">HTML5</span>
                </div>
                <div>
                  <span className="skills__percentage">95%</span>
                </div>

                <div className="skills__bar skills__html"></div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i class="bx bxl-css3  skills__icon"></i>
                  <span className="skill__name">CSS3</span>
                </div>
                <div>
                  <span className="skills__percentage">80%</span>
                </div>

                <div className="skills__bar skills__css"></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i class="bx bxl-javascript  skills__icon"></i>
                  <span className="skill__name">JAVASCRIPT</span>
                </div>
                <div>
                  <span className="skills__percentage">70%</span>
                </div>

                <div className="skills__bar skills__js"></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i class="bx bxl-react skills__icon"></i>
                  <span className="skill__name">React</span>
                </div>
                <div>
                  <span className="skills__percentage">85%</span>
                </div>

                <div className="skills__bar skills__react"></div>
              </div>
            </div>
            <div>
              <img alt="" src={pic7} className="skills__img" />
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <h2 className="section-title">Work</h2>

          <div className="work__container bd-grid">
            <div className="work__img">
              <img alt="" src={pic1} />
            </div>
            <div className="work__img">
              <img alt="" src={pic2} />
            </div>
            <div className="work__img">
              <img alt="" src={pic3} />
            </div>
            <div className="work__img">
              <img alt="" src={pic4} />
            </div>
            <div className="work__img">
              <img alt="" src={pic5} />
            </div>
            <div className="work__img">
              <img alt="" src={pic6} />
            </div>
          </div>
        </section>

        <section className="'contact section" id="contact">
          <h2 className="section-title">Contact</h2>

          <div class="contact__container bd-grid">
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
                className="contact__button button"
              />
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__title">Kartikey</p>

        <div className="footer__social">
          <a href="https://twitter.com/kartikey2603" className="footer__icon">
            <i class="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/kartik_2603"
            className="footer__icon"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/kartikey.pandey.3939/"
            className="footer__icon"
          >
            <i class="bx bxl-facebook-circle"></i>
          </a>
        </div>
        <p>&#169; 2021 copyright all right reserved</p>
      </footer>
    </div>
  );
}
