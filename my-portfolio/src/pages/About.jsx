
import ganeshEducation from "../assets/ganesh-saini2.png"
import Experience from "./Experience"
import Skills from "../components/Skills"
const About = () => {
    return (
        <>
            <section className="section-2">
                <div className="container">
                    <div className="stats-section" >
                        <div className="left-stats-section" >
                            <div className="left-state-experience">
                                <h3>1</h3>
                                <span>Year of Experience</span>
                            </div>
                            <div>
                                <p>Hands-on experience building full-stack web applications using the MERN stack,
                                    including real-world internship projects and scalable web solutions.
                                </p>
                            </div>
                        </div>
                        <div className="right-stats-section" >
                            <div className="stats-ection-skills">
                                <div>6+</div>
                                <span>Projects Completed</span>
                            </div>
                            <div className="stats-ection-skills">
                                <div>2</div>
                                <span>Internship Experience</span>
                            </div>
                            <div className="stats-ection-skills">
                                <div>10+</div>
                                <span>Tech Stack Skills</span>
                            </div>
                            <div className="stats-ection-skills">
                                <div>4</div>
                                <span>Certifications</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Skills />
            <section className="section-4" >
                <div className="container" >
                    <div className="education-heading">Education</div>
                    <div className="education-main-section">
                        <div className="left-education-section">
                            <img src={ganeshEducation} alt="" />
                        </div>
                        <div className="right-education-section">
                            <div className="single-education-container">
                                <h3>BCA {"("}General{")"} </h3>
                                <h4>The ICFAI Tech University, Jaipur</h4>
                                <span>2023 - 2026 | CGPA: 6.50</span>
                                <p>Currently pursuing Bachelor of Computer Applications with a
                                    focus on software development, data structures, and full-stack web technologies.</p>
                            </div>
                            <div className="single-education-container">
                                <h3>Senior Secondary {"("}Commerce{")"}  </h3>
                                <h4>RBSE Board</h4>
                                <span>2023 | 69.40%</span>
                                <p>Completed higher secondary education with a Commerce background,
                                    building strong fundamentals in business, accounting, and analytical thinking.</p>
                            </div>
                            <div className="single-education-container">
                                <h3>Secondary School {"("}Class 10{")"} </h3>
                                <h4>RBSE Board</h4>
                                <span>2021 | 79.60%</span>
                                <p>Developed core academic foundation with strong performance in mathematics and logical reasoning.</p>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
            <Experience />

        </>
    )
}
export default About