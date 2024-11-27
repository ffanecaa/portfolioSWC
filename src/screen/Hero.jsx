

import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { ImPinterest2 } from "react-icons/im";


export const Hero = () => {
  const socialIcons = [
    {
      id: 1,
      icon: <ImPinterest2 size={17} />,
      link:"https://es.pinterest.com/cousasas/",
    },

    {
      id: 2,
      icon: <FaLinkedinIn size={20} />,
      link:"https://www.linkedin.com/in/marta99/",
    },
    {
      id: 3,
      icon: <IoLogoGithub size={20} />,
      link:"https://github.com/ffanecaa",
    },
  ];

  return (
    <div id="Hero">
      <section className="hero-section">
        <div className="intro_text">
          <svg viewBox="0 0 1320 300">
            <text x="40%" y="40%" textAnchor="middle">
            &lt;/&gt;
        
            </text>
          </svg>
        </div>
        <div className="container">
          <div className="content flexSB">
            <div className="left w-half">
              <div className="hero-content-box">
                <span className="hero-sub-title">Soy Marta</span>
                <h1 className="hero-title">
                  Desarrolladora Web <br />
                
                </h1>

                <div className="hero-image-box d-md-none text-center">
                  <img src="assets/img/hero/me.png" alt="" />
                </div>

                <p className="lead"> con sede en Santiago,  Apasionada por la historia del arte, el cine, la música y los videojuegos.Siempre en busca de nuevos desafíos y oportunidades para aprender.

                </p>
                <div className="button-box flexG">
                  <a href="#" className="btn tj-btn-secondary">
                    Descarga CV <i className="flaticon-download"></i>
                  </a>
                  <ul className="ul-reset social-icons">
                    {socialIcons.map((icon, index) => (
                      <li key={index}>
                        <a href={icon.link} target="_blank">{icon.icon}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="right w-half">
              <div className="hero-image-box text-center">
                <img src="yo.jpeg" alt="logo" />
              </div>
            </div>
          </div>

     
        </div>
      </section>
    </div>
  );
};