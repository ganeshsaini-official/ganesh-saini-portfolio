import ganeshExpreince from "../assets/ganesh-saini-3.png"

const Experience = () => {
    return (
        <>
            <section className="section-5">
                <div className="container">
                    <div className="experience-heading">Experience</div>
                    <div className="experience-section">
                        <div className="left-experience-container">
                            <div className="single-experience-container">
                                <h2>MERN Stack Developer Intern</h2>
                                <h3>A2G Company | Dec 2025 – Feb 2026</h3>
                                <ul>
                                    <li>Developed full-stack social media web app</li>
                                    <li>Implemented JWT authentication </li>
                                    <li>Built RESTful APIs {"("}Posts, Likes, Users{")"} </li>
                                    <li>MongoDB database schema design</li>
                                </ul>
                            </div>
                            <div className="single-experience-container">
                                <h2>Web Development Intern {"("}WordPress{")"} </h2>
                                <h3>AVNV Infotech | June 2025 - July 2025</h3>
                                <ul>
                                    <li>Customized responsive WordPress websites</li>
                                    <li>Worked with themes & plugins</li>
                                    <li>Improved UI & performance optimization</li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-experience-container">
                            <img src={ganeshExpreince} alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Experience;