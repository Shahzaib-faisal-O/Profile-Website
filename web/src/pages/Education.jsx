import React from 'react'
import './css/education.css'
import commecs from '../assets/image/commecs-college.png'
import szabist from '../assets/image/Szabist.png'
const Education = () => {
    return (
        <div className=" " id="Education">
            <div className="education">
                <h1>Education </h1>
                {/* <div className="edu_row">
                    <div className=" col col_1">
                        <p>2020 February - 2022 October Karachi, Pakistan</p>
                    </div>
                    <div className="col col_2">
                        <h2>COMMECS College</h2>
                        <p>During my time at COMMECS College, I pursued in Computer Science
                            field, honing my knowledge and skills in various aspects of the field. The
                            comprehensive curriculum provided a strong foundation in programming
                            languages, data structures, algorithms, and software development
                            methodologies</p>
                    </div>
                    <div className="col col_3">
                        <a href="https://commecscollege.edu.pk/" target='_blank'><img src={commecs} alt="" /></a>
                    </div>
                </div> */}
                <div className="edu_row">
                    <div className=" col col_1">
                        <p>2022 August - present
                            Karachi, Pakistan</p>
                    </div>
                    <div className="col col_2">
                        <h2>Bachelor in Computer Science, SZABIST University
                        </h2>
                        <p>I 'm a highly motivated Computer Science student at SZABIST University.
                            Passionate about technology and problem-solving, I excel in diverse
                            courses like algorithms and AI. Beyond academics, I actively engage in
                            coding competitions, research, and internships to drive innovation and
                            make a positive impact through AI-driven solutions. Excited for the
                            future in this dynamic field, I'm determined to contribute meaningfully to
                            society's technological advancement.</p>
                    </div>
                    <div className="col col_3">
                        <a href="https://szabist.edu.pk/?%3F%3F%3F%3F%3F%3F%3F%2F" target='_blank'><img
                            src={szabist} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
