import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/nav.css'
import github from '../assets/image/github.svg'
import instagram from '../assets/image/instagram.svg'
import linkedin from '../assets/image/linkedin.svg'
import mail from '../assets/image/mail.svg'
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
const Nav = () => {
    return (



        <header>
            <nav>
                <IconContext.Provider value={{ className: "react-icons" }}>
                    <input type="checkbox" name="" id="sidebar-active" />
                    <label htmlFor="sidebar-active" className='open-sidebar-button'>
                        <IoMenu value={{ className: 'react-icons' }} />
                    </label>
                    <label htmlFor="sidebar-active" id='overlay'></label>
                    <div className='links-container'>
                        <label htmlFor="sidebar-active" className='close-sidebar-button' >
                            <IoMdClose value={{ className: 'react-icons' }} />
                        </label>

                        <ul>
                            <li>
                                <NavLink to="/" >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/education">Education</NavLink>
                            </li>
                            <li>
                                <NavLink to="/skills">Skills</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="social">
                            <ul>
                                <li>
                                    <a href="https://github.com/Shahzaib-faisal-O" target='_blank' >
                                        <img src={github} alt="social" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target='_blank'>
                                        <img src={instagram} alt="social" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/shahzaib-faisal-o/" target='_blank'>
                                        <img src={linkedin} alt="social" />
                                    </a>
                                </li>
                                <li>
                                    <a href=" mailto:shahzaibfaisal44@gmail.com" target='_blank'>
                                        <img src={mail} alt="social" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </IconContext.Provider>;
            </nav>

        </header >
    )
}

export default Nav
