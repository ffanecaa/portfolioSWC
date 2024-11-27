import React, { useState } from "react";
import emailjs from "emailjs-com";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { SlSocialLinkedin } from "react-icons/sl";

export const Contact = () => {
  const [formData, setFormData] = useState({
    conName: "",
    conLName: "",
    conEmail: "",
    conMessage: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "Lorcho2015@gmail.com", // Reemplaza con tu Service ID de EmailJS
        "template_xnwou3j", // Reemplaza con tu Template ID de EmailJS
        formData,
        "dFzXbYXOCnJ_nLISU" // Reemplaza con tu User ID de EmailJS
      )
      .then(
        (response) => {
          console.log("Correo enviado exitosamente:", response.status, response.text);
          alert("Correo enviado exitosamente!");
        },
        (error) => {
          console.error("Error al enviar el correo:", error);
          alert("Error al enviar el correo. Por favor, intenta de nuevo.");
        }
      );
  };

  return (
    <div id="Contact">
      <section className="contact-section" id="contact-section">
        <div className="container flexSB">
          <div className="contact-form-box w-half">
            <div className="section-header">
              <h2 className="section-title">Contacta!</h2>
              <p>
                Me dedico a crear y desarrollar con sencillez. Disfruto cada paso de lo que hago. Simple, pero significativo
              </p>
            </div>

            <div className="tj-contact-form">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="flexSB gap">
                  <div className="form_group">
                    <input
                      type="text"
                      name="conName"
                      placeholder="Nombre"
                      value={formData.conName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form_group">
                    <input
                      type="text"
                      name="conLName"
                      placeholder="Apellido"
                      value={formData.conLName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flexSB gap">
                  <div className="form_group">
                    <input
                      type="email"
                      name="conEmail"
                      placeholder="Email"
                      value={formData.conEmail}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form_group">
                  <textarea
                    name="conMessage"
                    placeholder="Mensaje"
                    value={formData.conMessage}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="form_btn">
                  <button type="submit" className="btn tj-btn-primary">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="contact-info-list  w-half">
            <ul className="ul-reset">
              <li>
                <div className="icon-box">
                  <SlSocialLinkedin size={25} />
                </div>
                <div className="text-box">
                  <p>LinkedIn</p>
                  <a href="https://www.linkedin.com/in/marta99/" target="_blanck">
                    /marta99/
                  </a>
                </div>
              </li>
              <li>
                <div className="icon-box">
                  <TfiEmail />
                </div>
                <div className="text-box">
                  <p>Email</p>
                  <a href={`mailto:ffanecaa@gmail.com`}>ffanecaa@gmail.com</a>
                </div>
              </li>
              <li>
                <div className="icon-box">
                  <CiLocationOn size={25} />
                </div>
                <div className="text-box">
                  <p>Localización</p>
                  <a href="#">Santiago de Compostela</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
