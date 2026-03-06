import { FaArrowRight } from "react-icons/fa6";
import myImage from "../assets/ganesh-saini.png"
import bgImage from "../assets/bg-image.jpg"
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <section className="section-1">
                <div className="hero-main-container"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <div className="container">
                        <div className="hero-container">
                            <div className="left-hero-container">
                                <h2>WELL COME</h2>
                                <div className="name-heading" >
                                    <h1>I'm Ganesh Saini,</h1>
                                    <span className="typing-text">A MERN Stack Developer. </span>
                                </div>
                                <p>I build scalable and responsive full-stack web applications
                                    using MongoDB, Express.js, React.js, and Node.js.
                                    Passionate about clean code, modern UI, and solving real-world problems.
                                </p>
                                <div className="view-project-container">
                                    <span
                                    onClick={()=>navigate("/projects")}
                                    >View Projects</span>
                                    <FaArrowRight />
                                </div>
                            </div>
                            <div className="right-hero-container">
                                <div className="my-image">
                                    <img src={myImage} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <>
                <About />
            </>
            <>
                <Projects />
            </>
            <>
                <Contact />
            </>
        </>
    )
}
export default Home
