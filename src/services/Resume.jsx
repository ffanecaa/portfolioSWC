import { educationData, experienceData } from "../assets/data";

import { PiGraduationCap } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";

export const Resume = () => {
  return (
  <div id="Resume">



<section className="resume-sections">
  <div className="container-resume">
    {/* Columna Experiencia */}
    <div className="resume-column experience">
      <div className="section-header">
        <h2 className="section-title">
          <FaLaptopCode size={50} /> Experiencia
        </h2>
      </div>
      <div className="resume-widget">
        {experienceData.map((item) => (
          <div className="resume-item" key={item.id}>
            <div className="time">{item.time}</div>
            <h3 className="resume-title">{item.title}</h3>
            <div className="institute">{item.institute}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Columna Educación */}
    <div className="resume-column education">
      <div className="section-header">
        <h2 className="section-title">
          <PiGraduationCap size={50} /> Educación
        </h2>
      </div>
      <div className="resume-widget">
        {educationData.map((item) => (
          <div className="resume-item" key={item.id}>
            <div className="time">{item.time}</div>
            <h3 className="resume-title">{item.title}</h3>
            <div className="institute">{item.institute}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

    </div>
  );
};