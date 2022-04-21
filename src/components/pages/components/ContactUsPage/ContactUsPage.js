import React from 'react';
import {useNavigate} from 'react-router-dom';
import companyLogo from './ContactUsPage_images/contactImages/Boldin_White.webp'
import contactBg from './ContactUsPage_images/contactImages/contactBg.svg'
import './ContactUsPage.css'
function Contact(props) {

const history = useNavigate()

{/* <button onClick={() => history.goBack()}>Go Back</button> */}
    return (
        // <section className={props.className ? "contact default-padding active" : "contact default-padding"}>
        <section className="contact default-padding active">
            <div className="contact-nav d-flex jcsb">
                    <a href="/" className="">
                        <img src={companyLogo} alt="Company's Logo" />
                    </a>
                    
                    <div id="cancel" className="d-flex x-center" onClick={() => {history(-1)}}>
                        <span></span>
                        <span></span>
                    </div>
            </div>
            <div className="contact-inner default-padding-3">
                    <h3 className="contact-heading">Contact Us, <span className="emoji">&#129321;</span></h3>
                    <p className="contact-text">Hey! Tell us all the things</p>
                    <form action="#" id="contact-form" className="contact-form">
                        <div className="form-input d-flex jcsb">
                            <div className="form-input_single d-flex flex-column column-45">
                                <label for="name">Full Name</label>
                                <input type="text" name="Full Name" id="name" placeholder="e.g Jane Doe" />
                            </div>
                            <div className="form-input_single d-flex flex-column column-45">
                                <label for="company">Company Name</label>
                                <input type="text" name="Full Name" id="company" placeholder="Your Company Name here" />
                            </div>
                        </div>
                        <div className="form-input d-flex jcsb">
                            <div className="form-input_single d-flex flex-column column-45">
                                <label for="phone">Phone Number</label>
                                <input type="text" name="Full Name" id="phone" placeholder="e.g +2348123456789" />
                            </div>
                            <div className="form-input_single d-flex flex-column column-45">
                                <label for="email">Email Address</label>
                                <input type="text" name="Full Name" id="email" placeholder="e.g me@example.com" />
                            </div>
                        </div>
                        <div className="form-input message">
                            <div className="form-input_single">
                                <label for="submit">Please tell us a little more about your project*</label>
                                <input type="text" name="Full Name" id="submit" placeholder="e.g +2348123456789" />
                            </div>
                        </div>
                        <button type="submit" className="contact-submit btn btn-secondary hover-rocket">Send Request</button>
                    </form>
            </div>
            <div className="contact-info d-flex jcsb default-padding-3">
                <div className="contact-info_column">
                    <p>or send a mail</p>
                    <a href="mailto:hello@boldin.co" className="hover-rocket text-bold text-white">hello@boldin.co</a>
                </div>
                <div className="contact-info_column">
                    <p>Call</p>
                    <a href="#" className="hover-rocket text-bold text-white">+234 90651 33849</a>
                </div>
                <div className="contact-info_column">
                    <p>Visit us</p>
                    <p>1, Buluro Street, Dopemu,</p>
                    <p>Lagos State, Nigeria</p>
                </div>
            </div>
            <img src={contactBg} alt="Background of Contact Section" className="contact-bg-img"/>
        </section>
        
    )
}

export default Contact;
