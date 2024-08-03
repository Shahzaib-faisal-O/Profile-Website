import React from 'react'
import './css/skills.css'
import express from '../assets/image/express.svg'
import mongo from '../assets/image/mongo.svg'
import react from '../assets/image/react-js.svg'
import nodeJS from '../assets/image/nodejs.svg'
const Skills = () => {
    return (
        <div className=" " id='Skills'>
            <div className="Skills">
                <h1 className="bigsize">MERN</h1>
                <div className="skills">
                    <div className="item">
                        <h2>Mongo</h2>
                        <p>A NoSQL database that stores data in flexible, JSON-like documents, allowing for dynamic
                            schemas and scalability.</p>
                        <img src={mongo} alt="" />
                    </div>
                    <div className="item">
                        <h2>Express JS</h2>
                        <p> A minimal and flexible Node.js web application framework that provides a robust set of
                            features for web and mobile applications.</p>
                        <img src={express} alt="" />
                    </div>
                    <div className="item">
                        <h2>React Js</h2>
                        <p>A JavaScript library for building user interfaces, developed by Facebook, that enables the
                            creation of reusable UI components for single-page applications.</p>
                        <img src={react} alt="" />
                    </div>
                    <div className="item">
                        <h2>Node JS</h2>
                        <p>A runtime environment that allows JavaScript to be used for server-side development, enabling
                            fast and scalable network applications.</p>
                        <img src={nodeJS} alt="" />
                    </div>




                </div>
            </div>
        </div>
    )
}

export default Skills
