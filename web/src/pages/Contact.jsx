import React from 'react'
import './/css/contact.css'
import { useState } from 'react'

import contactImage from '../assets/contact-center.png'
import { toast } from 'react-toastify'

const Contact = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        message: '',
    })
    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    }

    const handleFrom = async (event) => {
        event.preventDefault();
        console.log('====================================');
        console.log(user);
        console.log('====================================');
        console.log(JSON.stringify(user));
        try {
            const response = await fetch(`http://localhost:5000/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                toast.success("Registration Successful")
            } else { toast.error("Registration UnSuccessful") }
            console.log(response);
        } catch (error) {
            console.log("contact", error);
        }
    }

    return (
        <div className="contact">
            <div className="well">
                <form onSubmit={handleFrom} method="post">
                    <hgroup>
                        <h1>Welcome back!</h1>
                    </hgroup>
                    <div>
                        <input type="text" name="username" id="username" required autoComplete='off' value={user.username} onChange={handleInput} />
                        <label htmlFor="username">Username</label>
                    </div>

                    <div>
                        <input type="email" name="email" id="email" required autoComplete='off' value={user.email} onChange={handleInput} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div>
                        <textarea name="message" id="message" cols="40" rows="5" placeholder='' value={user.message} onChange={handleInput}></textarea>
                        <label htmlFor="message"></label>
                    </div>
                    <button className="btn1" type='submit'>
                        Connect
                    </button>
                </form>
            </div>
            <section className='image-section'>
                {/* <img src={contactImage} alt="" style={{ height: "600px" }} /> */}
                <img src={contactImage} alt="" style={{ height: "" }} />
            </section>
        </div>

    )
}

export default Contact
