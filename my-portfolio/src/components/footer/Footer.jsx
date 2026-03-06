import { Link } from "react-router-dom"
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import logo from "../../assets/ganesh-logo.png"


const Footer = () => {
    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-main-container">
                        <div className="footer-colomn-first">
                            <div className="footer-logo-container">
                                <Link>
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                            <h2>MERN Stack Developer</h2>
                            <h3> <span>Ready To </span>
                                Build Something Amazing?
                            </h3>
                            <div></div>
                            <p></p>
                        </div>
                        <div className="footer-colomn-second">
                            <div className="footer-colomn-heading">Quick Link</div>
                            <div><Link to="/about" >About Me</Link></div>
                            <div><Link to="skills">Skills</Link></div>
                            <div><Link to="projects">Projects</Link></div>
                            <div><Link to="experience">Experience</Link></div>
                            <div><Link to="contact">Contact</Link></div>
                        </div>
                        <div className="footer-single-colomn">
                            <div className="footer-colomn-heading">
                                Contact
                            </div>
                            <div className="footer-colomn-content">
                                <div className="footer-contact-icon"><MdEmail /></div>
                                <p>ganeshsaini5486@gmail.com</p>
                            </div>
                            <div className="footer-colomn-content">
                                <div className="footer-contact-icon"><MdLocationPin /></div>
                                <p>Jaipur, Rajasthan</p>
                            </div>
                            <div className="footer-colomn-content">
                                <div className="footer-contact-icon" ><FaPhoneAlt /></div>
                                <p>9982885486</p>
                            </div>
                            <div className="footer-media-container">

                                <a href="https://www.linkedin.com/in/ganesh-saini-dev" target="_blank" rel="noopener noreferrer">
                                    <div className="footer-media-icon">
                                        <FaLinkedinIn />
                                    </div>
                                </a>

                                <a href="" target="_blank" rel="noopener noreferrer">
                                    <div className="footer-media-icon">
                                        <GrInstagram />
                                    </div>
                                </a>

                                <a href="https://github.com/ganeshsaini-official" target="_blank" rel="noopener noreferrer">
                                    <div className="footer-media-icon">
                                        <FaGithub />
                                    </div>
                                </a>

                                <a href="https://www.youtube.com/@GS_tech_world" target="_blank" rel="noopener noreferrer">
                                    <div className="footer-media-icon">
                                        <IoLogoYoutube />
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-bottom-copyright">
                            © 2026 Ganesh Saini | All Rights Reserved
                        </div>
                        <div className="footer-bottom-terms">
                            <Link>Privacy Policy</Link>
                            <Link>Terms</Link>
                            <Link to="contact" >Contact</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer