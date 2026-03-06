import { Link, NavLink } from "react-router-dom"
import { FaGithub } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";
import logo from "../../assets/ganesh-logo.png"
import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseLargeFill } from "react-icons/ri";


const Navbar = () => {
    const [show, setShow] = useState(true)
    const [scrolled, setScrolled] = useState()
    const [menuSlide, setMenuSlide] = useState(false);
    useEffect(() => {

        const handleScrolly = () => {
            const scroll = window.scrollY;

            if (scroll > 1 && scroll < 100) {
                setShow(false);
            } else {
                setShow(true)
            }

            if (scroll > 0) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScrolly);
        return () => window.removeEventListener("scroll", handleScrolly)

    }, [])

    return (
        <>
            <header className={`${show ? "show " : "hide"}
             ${scrolled ? "scrolled" : "default"}`} >
                <nav className="header-navbar">
                    <div className="container">
                        <div className="navbar-container" >
                            <div className="left-navbar">
                                <div className="navbar-logo-container" >
                                    <Link to="/">
                                        <img src={logo} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <ul className="middle-navbar">
                                <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""} >Home</NavLink></li>
                                <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} >About</NavLink></li>
                                <li><NavLink to="projects/" >Projects</NavLink></li>
                                <li><NavLink to="experience/" >Experience</NavLink></li>
                                <li><NavLink to="contact/" >Contact</NavLink></li>
                            </ul>
                            <ul className="right-navbar">
                                <li>
                                    <a href="https://www.linkedin.com/in/ganesh-saini-dev" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/ganeshsaini-official" target="_blank" rel="noopener noreferrer">
                                        <FaGithub />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@GS_tech_world" target="_blank" rel="noopener noreferrer">
                                        <IoLogoYoutube />
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <GrInstagram />
                                    </a>
                                </li>
                            </ul>

                            <div className="menu-icon-container" >
                                <div className="opening-menu-icon"
                                    onClick={() => setMenuSlide(!menuSlide)}>
                                    {menuSlide ? <AiOutlineMenu /> : <CgMenuRightAlt />}

                                </div>
                                <div className="closing-menu-icon"> </div>
                            </div>


                        </div>
                        {menuSlide && <div className="menu-overlay"
                            onClick={() => setMenuSlide(false)} >
                        </div>
                        }

                    </div>
                </nav>
            </header>

            <div className={`menu-slide ${menuSlide ? "open-menu-slide" : ""}`}>                            <div className="menu-slide-logo-container">
                <div className="menu-slide-logo"  >
                    <img src={logo} alt="" />
                </div>
                <div className="menu-slide-close-icon"
                    onClick={() => setMenuSlide(false)}>
                    <RiCloseLargeFill />
                </div>
            </div>
                <div className="menu-slide-pages" onClick={() => setMenuSlide(false)} >
                    <div> <NavLink to="/"  >Home</NavLink></div>
                    <div> <NavLink to="/about" >About</NavLink></div>
                    <div> <NavLink to="projects/" >Projects</NavLink></div>
                    <div> <NavLink to="experience/" >Experience</NavLink></div>
                    <div> <NavLink to="contact/" >Contact</NavLink></div>
                </div>
            </div>
        </>
    )
}
export default Navbar

