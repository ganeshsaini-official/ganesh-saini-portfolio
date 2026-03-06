import { useState } from "react"
import { MdArrowOutward } from "react-icons/md"
import toDo from "../assets/projectingimg/to-do.png"
import dashboard from "../assets/projectingimg/dashboard.png"
import CurrencyConverter from "../assets/projectingimg/currency-converter.png"
import spotifyIcon from "../assets/projectingimg/spotify.png"
import WeatherApp from "../assets/projectingimg/weather-app.png"
import Restaurant from "../assets/projectingimg/restaurant.png"


const Projects = () => {

    const [readMoreIndex, setReadMoreIndex] = useState(null)

    const projects = [
        {
            title: "Product Management Dashboard",
            img: dashboard,
            description:
                "A full-stack MERN application that allows users to efficiently manage products.",
            fullDescription:
                "Features include add, edit, delete, search, and real-time updates with secure authentication and RESTful APIs.",
            live: "https://product-management-dashboard-812v.onrender.com/",
        },
        {
            title: "Spotify Clone",
            img: spotifyIcon,
            description:
                "Spotify web player clone with responsive design.",
            fullDescription:
                "Built with modern UI and smooth music player experience with playlist features.",
            live: "https://ganeshsaini-official.github.io/spotify-clone/",
        },
        
        {
            title: "The Ganesh Restaurant ",
            img: Restaurant,
            description: " A responsive restaurant website built with pure JavaScript,",
            fullDescription:
                "HTML, and CSS, featuring a dynamic menu, interactive about section, and working contact form.",
            live: " https://ganeshsaini-official.github.io/The-Ganesh-Restaurant/",

        },

        {
            title: "Weather App",
            img: WeatherApp,
            description:
                "Live weather app using OpenWeatherMap API.",
            fullDescription:
                "Shows real-time temperature, humidity, and weather conditions worldwide.",
            live: "https://ganeshsaini-official.github.io/weather-app/",
        },
        {
            title: "Todo List App",
            img: toDo,
            description:
                "A simple and responsive To-Do List app built with React.",
            fullDescription:
                "Users can add, edit, delete, and mark tasks completed to stay organized.",
            live: "https://ganeshsaini-official.github.io/Todo-List-App/",
        },
        {
            title: "Currency Converter",
            img: CurrencyConverter,
            description:
                "Responsive Currency Converter application.",
            fullDescription:
                "Allows users to convert currencies in real-time using exchange rate API.",
            live: "https://ganeshsaini-official.github.io/Currency-Converter/",
        }
    ]

    return (
        <section className="section-6">
            <div className="container">
                <div className="project-heading">Projects</div>

                <div className="projects-main-container">
                    {projects.map((project, index) => (
                        <div className="single-project-container" key={index}>

                            <div className="project-img-container">
                                <img src={project.img} alt={project.title} />
                            </div>

                            <div className="project-detail-container">

                                <div className="project-title-container">
                                    <h2>{project.title}</h2>

                                    <p>
                                        {project.description}

                                        {readMoreIndex !== index && (
                                            <span style={{ color: " #141414", cursor: "pointer", fontWeight: "600 ", marginLeft: "2px" }}
                                                className="read-more"
                                                onClick={() => setReadMoreIndex(index)}
                                            >
                                                {" "}Read More
                                            </span>
                                        )}

                                        {readMoreIndex === index && (
                                            <>
                                                {" "}
                                                {project.fullDescription}
                                                <span
                                                    style={{ color: "#ff014f", cursor: "pointer", marginLeft: "5px" }} className="read-less"
                                                    onClick={() => setReadMoreIndex(null)}
                                                >
                                                    {" "}Read Less
                                                </span>
                                            </>
                                        )}
                                    </p>
                                </div>
                                <div className="project-live-arrow">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-view-arrow"
                                    >
                                        <MdArrowOutward className="arrow first-arrow" />
                                        <MdArrowOutward className="arrow second-arrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Projects