import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faBars, faComputerMouse, faDownload, faPhone, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";



const Home = (theme) => {
    const image1 = `${theme.theme === "light" ? "/shape-top-white-80.png" : "/shape-top-black-80.png"}`;
    return (
        <div>
            <>
                <div id="top" /> 
                <AliceCarousel autoPlay autoPlayInterval={3000} infinite disableButtonsControls disableSlideInfo disableDotsControls className="owl-carousel">
                    <div className="slider1" />
                    <div className="slider2" />
                    <div className="slider3" />
                </AliceCarousel>
                <section id="header">
                    <div className="navbar">
                        <div className="logo">
                            <Image src="/logo.png" alt="Logo" width={50} height={50} />
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#header">Intro</a>
                                </li>
                                <li>
                                    <a href="#countdown-section">Countdown</a>
                                </li>
                                <li>
                                    <a href="#important-info-section">Note</a>
                                </li>
                                <li>
                                    <a href="#map-section">Location</a>
                                </li>
                                <li>
                                    <a href="#contact-info-section">Contact</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="toggle-switch">
                            <FontAwesomeIcon icon={faMoon} className="fa-solid fa-moon" />
                            <button className="toggle" onclick="toggleBar()">
                                <FontAwesomeIcon icon={faToggleOn} id="toggle" className="fa-solid fa-toggle-on toggleon" />
                            </button>
                            <FontAwesomeIcon icon={faSun} className="fa-solid fa-sun" />
                        </div>
                        <a href="#" className="call">
                            <FontAwesomeIcon icon={faPhone} className="fas fa-phone" />
                            Call Us
                        </a>

                        <div className="bars">
                            <FontAwesomeIcon icon={faBars} className="fa-solid fa-bars" />
                        </div>
                    </div>
                    <div className="header-content">
                        <p className="imomotimi">Imomotimi Foundation Present</p>
                        <h1>
                            Imomotimi Ijaw <br />
                            Dance Contest 2024
                        </h1>
                        <a href="#" className="download-btn">
                            <FontAwesomeIcon icon={faDownload} className="fas fa-download" /> Download Entry Form
                        </a>
                        <p>
                            All dully filled out forms and the entry fees should be brought along to
                            the audition.
                        </p>
                    </div>
                    <div id="mouseIcon" className="mouse">
                        <a href="#">
                            <FontAwesomeIcon icon={faComputerMouse} className="fa-solid fa-computer-mouse" />
                        </a>
                    </div>
                    <div className="top-white">
                        <Image
                            id="border1"
                            src= {image1}
                            alt="Top Border"
                            width={500}
                            height={100}
                        />
                    </div>
                </section>
            </>

        </div>
    )
}

export default Home;
