import React, {useRef, useEffect} from 'react';
import companyLogo from '../images/contactImages/Boldin_White.webp'
import contactImage from '../images/contactImages/Contact-bg.webp'
import './Contact.css'


function Contact(props) {
    
    const contactSec = useRef(null)
    function removeContactSec(){
        contactSec.current.classList.remove('active');
    }
    return (
        <section className={props.className ? "contact_alt default-padding d-flex flex-column active": "contact_alt default-padding d-flex flex-column"} ref={contactSec}>
            <div className="contact-nav d-flex jcsb">
                    <a href="#" className="">
                        <img src={companyLogo} alt="Company's Logo" />
                    </a>
                    <div id="cancel" onClick={removeContactSec}>
                        <span></span>
                        <span></span>
                    </div>
            </div>
            <div className="contact-inner default-padding-3">
                    <h3 className="contact-heading">Hello, <span className="emoji">&#129321;</span></h3>
                    <p className="contact-text">Complete the form or email <a href="mailto:hello@boldin.co" className="mailUs">mailto:hello@boldin.co</a></p>
                    <form action="#" id="contact-form" className="contact-form">
                        <div className="form-input d-flex jcsb">
                            <div className="form-input_single d-flex flex-column column-50">
                                <label for="name">Full Name</label>
                                <input type="text" name="Full Name" id="name" placeholder="e.g Jane Doe" />
                            </div>
                            <div className="form-input_single d-flex flex-column column-50">
                                <label for="company">Company Name</label>
                                <input type="text" name="Full Name" id="company" placeholder="Your Company Name here" />
                            </div>
                        </div>
                        <div className="form-input d-flex jcsb">
                            <div className="form-input_single d-flex flex-column column-50">
                                <label for="phone">Phone Number</label>
                                <input type="text" name="Full Name" id="phone" placeholder="e.g +2348123456789" />
                            </div>
                            <div className="form-input_single d-flex flex-column column-50">
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
                        <button type="submit" className="btn btn-secondary contact-submit hover-rocket">Send Message</button>
                    </form>
            </div>
            <div className="contact-illustration">
                <img src={contactImage} alt="Contact Form's Illustration" />
            </div>
        </section>  
    )
}

export default Contact;
