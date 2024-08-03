import React from 'react'
import './css/home.css'
import profileImg from '../assets/image/profile.jpeg'
const Home = () => {
    return (
        <div className=" content-div active " id="Home">
            <div className=" home">
                <div className="content">
                    <h6>Hello! My Name is</h6>
                    <h2>Shahzaib Faisal</h2>
                    <h1>DEVELOPER</h1>
                    <span className='change_content'> <span className='line'> | </span></span>
                </div>
                <div className="profile-image">
                    <img src={profileImg} alt="My image " />
                </div>
            </div>
        </div>
    )
}

export default Home
