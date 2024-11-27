import { NavLink } from "react-router-dom";
import { projects } from "../../assets/data";
import { GoArrowUpRight } from "react-icons/go";
import { IoEnterSharp } from "react-icons/io5";

export const Portfolio = () => {
  return (
    <div id="Portfolio">
      <section className="portfolio-section" >
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Proyectos y trabajos</h2>
            <p> Algunos de mis proyectos web , muchos en proceso de mejora que muestran mi evolución  continua en el desarrollo web.</p>
          </div>

          <div className="portfolio-filter text-center">
           
          </div>
          <div className="portfolio-box">
            <div className="grid2">
              {projects.map((project) => (
                <div className="portfolio-item branding" key={project.id}>
                  <div className="image-box">
                    <img width={300}height={300} src={project.cover} alt="" />
                    {console.log(project.cover)}
                    
                  </div>
                  <NavLink to={`/details/${project.id}`}>
                  <div className="content-box">
                 
                      <h3 className="portfolio-title">{project.title}</h3>
                  
                   
                    <i>
                      <IoEnterSharp/>
                    </i>
                  </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};