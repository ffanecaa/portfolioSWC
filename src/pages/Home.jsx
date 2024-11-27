
import { Hero } from "../screen/Hero"
import { Portfolio } from "../screen/portfolio/Portfolio"
import { Contact } from "../services/Contact"
import { Resume } from "../services/Resume"
import { Skill } from "../services/Skill"


const Home = () => {
  return (
    <>
 <Hero/>
 
<Portfolio/>
<Skill/>
<Contact/>
<Resume/>

    </>
    
  )
}

export default Home