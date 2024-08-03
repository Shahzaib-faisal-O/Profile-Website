import React from 'react'
import './css/about.css'
const About = () => {
    return (
        <div className="about " id="About">
            <h1 className="margin">About <span className="muted size">Me</span></h1>
            <div className="box1 glass border">
                <h3>Introducation</h3>
                <p>My name is Shahzaib Faisal, and I am an undergraduate student currently studying for a Bachelor's degree in Computer Science at Szabist. I have a strong passion for computer science and technology, with a particular interest in programming, software development, and web development.
                </p>
            </div>
            <div className="flex">
                <div className="box2 glass borders ">
                    <div className="center">
                        <span className="muted">!Constantly try to improve </span>
                        <h3>My Tech stack</h3>
                    </div>

                    <div className="language center ">
                        <div className="capsule  ">ReactJs</div>
                        <div className="capsule ">Express</div>
                        <div className="capsule ">Node</div>
                        {/* <div className="capsule ">Flask</div> */}
                        {/* <div className="capsule ">PostgreSQL</div> */}
                        <div className="capsule ">MongoDB</div>
                        <div className="capsule ">MySQL</div>
                        <div className="capsule ">Prisma</div>
                        <div className="capsule ">REST</div>
                        <div className="capsule ">React Three Fiber</div>
                        <div className="capsule ">Taliwind</div>
                        <div className="capsule ">Three.js</div>
                        <div className="capsule ">HTML 5</div>
                        <div className="capsule ">CSS 3</div>
                        <div className="capsule ">JavaScript</div>
                    </div>
                </div>
                <div className="box3 glass border">
                    <h3>Tech enthusiast with a passion for </h3>
                    <h3>development</h3>
                    <span className="muted">Connect with me professionally</span>
                    <div className="button">
                        <a href=""><button className="btn ">Connect<img src="./image/paperplane.svg" alt="" /></button></a>

                        <a href="https://drive.google.com/file/d/17nH94VZviU3_vMT9L2otnJSMy6au2C3-/view?usp=sharing"><button
                            className="btn ">Resume<img src="./image/paperplane.svg" alt="" /></button></a>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
