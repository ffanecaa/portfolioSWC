import  { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { projectsDetails } from "../../assets/data";
import { useParams } from "react-router-dom";
import { IoArrowUndo,IoArrowRedo  } from "react-icons/io5";

export const PortfolioDetails = () => {
  const { id } = useParams(); 
  const [currentIndex, setCurrentIndex] = useState(
    projectsDetails.findIndex((project) => project.id === Number(id))
  );// Estado para el índice actual

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsDetails.length - 1 : prevIndex - 1
    );
    window.scrollTo({ top: 0, behavior: "smooth" }); // Desplazarse al inicio
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % projectsDetails.length
    );
    window.scrollTo({ top: 0, behavior: "smooth" }); // Desplazarse al inicio
  };

  const project = projectsDetails[currentIndex]; // Proyecto actual

  return (
    <div className="popup_content_area">
      <div className="popup_modal_img">
        {/* <img src="../images/alfombra.jpg" alt="" style={} /> */}
        <div className="details-header"></div>
      </div>

      <div className="popup_modal_content">
        <div className="container">
          <div className="portfolio_info">
            <div className="portfolio_info_text">
              <h2 className="title">{project.title}</h2>
              <div className="desc">
                <p>{project.description}</p>
              </div>
              <a href={project.link} target="_blank" className="btn tj-btn-primary">
                Ver <i className="fal fa-arrow-right"></i>
              </a>
            </div>
            <div className="portfolio_info_items">
              {/* <div className="info_item">
                <div className="key">Category</div>
                <div className="value">{project.category}</div>
              </div>
              <div className="info_item">
                <div className="key">Client</div>
                <div className="value">{project.client}</div>
              </div> */}
              <div className="info_item">
                <div className="key">Fecha</div>
                <div className="value">{project.startDate}</div>
              </div>
              <div className="info_item">
                <div className="key">Nombre</div>
                <div className="value">
                  <a href="#">{project.designer}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio_gallery grid2">
            {project.images.map((image, index) => (
              <div className="gallery_item" key={index}>
                <img src={image} alt="" />
              </div>
            ))}
          </div>

          <div className="portfolio_description">
            <h2 className="title">Descripción del proyecto</h2>
            <div className="desc">
           
              <p>{project.description2}</p>
            </div>
          </div>

          <div className="portfolio_story_approach">
            {/* <div className="portfolio_story">
              <div className="story_title">
                <h4 className="title">Información adicional</h4>
              </div>
              <div className="story_content">
                <p>{project.story}</p>
              </div>
            </div> */}
            
          </div>
        </div>
        <div className="portfolio_navigation">
          
            <button onClick={handlePrevious} className="btn-project">
              <i>
                <IoArrowUndo size={50} />
              </i>
             
                <div className="label">Anterior</div>
                
           
            </button>
         

       
            <button onClick={handleNext} className="btn-project">
             
              <i>
                <IoArrowRedo size={50} />
              </i>
           
            <div className="nav_project">
                <div className="label">Siguiente</div>
              </div>
              </button>
        </div>
      </div>
    </div>
  );
};
