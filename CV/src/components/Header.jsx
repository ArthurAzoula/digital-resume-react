import React, { useState, useEffect } from "react";
import profileImage from "../assets/images/me.png";
import School from "../icons/School";
import User from "../icons/User";
import Experience from "../icons/Experience";
import Contact from "../icons/Contact";
import Skills from "../icons/Skills";

const Header = () => {
    const [showTitle, setShowTitle] = useState(false);
    const [animatedTitle, setAnimatedTitle] = useState("");
    const titleText = "Arthur's CV...";

    useEffect(() => {
        const titleTimeout = setTimeout(() => {
            setShowTitle(true);
        }, 10000);

        return () => clearTimeout(titleTimeout);
    }, []);

    useEffect(() => {
        let currentChar = 0;
        let animationInterval;

        const animateTitle = () => {
            if (currentChar <= titleText.length) {
                setAnimatedTitle(titleText.slice(0, currentChar));
                currentChar++;
            } else {
                currentChar = 0;
                setAnimatedTitle("");
            }
        };

        if (showTitle) {
            animationInterval = setInterval(animateTitle, 200); // Délai entre chaque caractère (en millisecondes)
        }

        return () => {
            clearInterval(animationInterval);
        };
    }, [showTitle]);

    const ScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <header className="bg-dark-purple text-champagne p-6 border-b-4 border-solid border-chamoisee">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src={profileImage} alt="Your Profile" className="w-20 h-20 p-2 bg-chamoisee rounded-full" />
                    {showTitle ? (
                        <h1 className="font-semibold animate-title-in p-2 capitalize font-mono text-base md:text-2xl">
                            {animatedTitle}
                        </h1>
                    ) : null}
                </div>
                <nav className="lg:flex transition-all duration-300 flex-col lg:flex-row">
                    <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 bg-chamoisee p-4 rounded-md">
                        <li className="flex items-center hover:text-black-raisin hover:underline">
                            <User className="w-5 h-5" />
                            <a
                                className="ml-2 cursor-pointer"
                                onClick={() => ScrollToSection("about")}
                            >
                                About me
                            </a>
                        </li>
                        <li className="flex items-center hover:text-black-raisin hover:underline">
                            <Experience className="w-5 h-5" />
                            <a
                                className="ml-2 cursor-pointer"
                                onClick={() => ScrollToSection("experience")}
                            >
                                Experience
                            </a>
                        </li>
                        <li className="flex items-center hover:text-black-raisin hover:underline">
                            <School className="w-5 h-5 mr-2" />
                            <a
                                className="ml-2 cursor-pointer"
                                onClick={() => ScrollToSection("education")}
                            >
                                Education
                            </a>
                        </li>
                        <li className="flex items-center hover:text-black-raisin hover:underline">
                            <Skills className="w-5 h-5 mr-2 " />
                            <a
                                
                                className="ml-2 cursor-pointer"
                                onClick={() => ScrollToSection("skills")}
                            >
                                Skills
                            </a>
                        </li>
                        <li className="flex items-center hover:text-black-raisin hover:underline">
                            <Contact className="w-5 h-5 mr-2" />
                            <a
                                
                                className="ml-2 cursor-pointer"
                                onClick={() => ScrollToSection("contact")}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
