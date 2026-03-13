import github from "../assets/skills/github.png"
import bootstrapicon from "../assets/skills/bootstrapicon.png"
import css from "../assets/skills/css.png"
import giticon from "../assets/skills/giticon.png"
import html from "../assets/skills/html.png"
import js from "../assets/skills/js.png"
import react from "../assets/skills/reacticon.png"
import tailwind from "../assets/skills/tailwind.jpg"
import nodeJs from "../assets/skills/nodeJs.png"
import MongoDB from "../assets/skills/mongodb.png"

const Skills = () => {
    return (
        <>
            <section className="Section-3">
                <div className="container">
                    <div className="skills-heading">Skills </div>
                    <div className="skills-section" >
                        <div className="single-skill-container" >
                            <div className="skill-img-container"><img src={html} alt="" /></div>
                            <span>HTML</span>
                        </div>
                        <div className="single-skill-container" >
                            <div className="skill-img-container"><img src={css} alt="" /></div>
                            <span>CSS</span>
                        </div>
                        <div className="single-skill-container" >
                            <div className="skill-img-container"><img src={js} alt="" /></div>
                            <span>JavaScript</span>
                        </div>
                        <div className="single-skill-container" >
                            <div className="skill-img-container"><img src={bootstrapicon} alt="" /></div>
                            <span>BootStrap</span>
                        </div>
                        <div className="single-skill-container" >
                            <div className="skill-img-container"><img src={tailwind} alt="" /></div>
                            <span>Tailwind</span>
                        </div>
                        <div className="single-skill-container" >
                            <div className="skill-img-container"><img src={react} alt="" /></div>
                            <span>React.Js</span>
                        </div>

                        <div className="single-skill-container" >
                            <div className="skill-img-container"><img src={nodeJs} alt="" /></div>
                            <span>Node.Js</span>
                        </div>
                        <div className="single-skill-container" >
                            <div className="skill-img-container "><img src={MongoDB} alt="" /></div>
                            <span>MongoDB</span>
                        </div>
                        <div className="single-skill-container" >
                            <div className="skill-img-container"><img src={giticon} alt="" /></div>
                            <span>Git</span>
                        </div>
                        <div className="single-skill-container" >
                            <div className="skill-img-container"><img src={github} alt="" /></div>
                            <span>GitHub</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Skills;
