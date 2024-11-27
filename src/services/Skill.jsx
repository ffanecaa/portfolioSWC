import { skillsData } from "../assets/data";

export const Skill = () => {
  return (
    <div id="Skill">
      <section className="skills-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Habilidades</h2>
            <p> Tecnologías y herramientas que domino, con un enfoque práctico y experiencia en cada una de ellas:</p>
          </div>

          <div className="skills-widget grid6">
            {skillsData.map((skill) => (
              <div className="skill-item" key={skill.id}>
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                 
                </div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};