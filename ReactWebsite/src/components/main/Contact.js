import React, { useState } from "react";
import "../../styles/Forms.css";
import { SendEmail } from "../../utils/EmailUtil";
import { Link } from "react-router-dom";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [comments, setComments] = useState("");
    const [result, setResult] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const result = await SendEmail(name, email, phone, comments);

        if (result) {
            setSuccess(true);
        } else {
            setSuccess(false);
            setResult("There was an error. Please try again later.");
        }
    };

    if (success) {
        return (
            <>
                <div className="inset-box column">
                    <h1>Your comments have been submitted.</h1>
                    <h2>We will get back to you shortly. In the mean time, feel free to explore our site.</h2>
                    <Link to="/" className="button">Home</Link>
                    <Link to="/services" className="button">Services</Link>
                    <Link to="/about" className="button">About</Link>
                </div>
            </>
        );
    }

    return (
        <>
            <h1>Contact Us</h1>
            <div className="inset-box">
                <div className="col">
                    <div className="pane">
                        <h1>Better yet, see us in person!</h1>
                        <h2>We love our customers, so feel free to visit during normal business hours.</h2>
                        <div className="hr" />
                        <p>County Road E<br />Whitehall, WI 54773</p>
                        <p><a href="tel:7155295936" className="link">715 295 5936</a></p>
                        <div className="hr" />
                        <h2>Hours</h2>
                        <p>Monday - Friday</p>
                        <p>9:00 am - 5:00 pm</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="col">
                    <div className="input-box">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="input-box">
                        <label htmlFor="phone">Phone Number</label>
                        <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <label htmlFor="comments">Comments</label>
                        <textarea id="comments" value={comments} onChange={(e) => setComments(e.target.value)} required />
                    </div>
                    <button type="submit">Submit</button>
                    {
                        (result) ?
                            <p className="error">{result}</p>
                            : <></>
                    }
                </form>
            </div>
        </>
    );
}