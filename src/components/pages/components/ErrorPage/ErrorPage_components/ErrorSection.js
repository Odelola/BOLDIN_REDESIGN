import React from 'react'
import { Link } from "react-router-dom";
import errorImage from '../ErrorPage_images/errorSectionImages/error_404.svg'
import './ErrorSection.css'

function ErrorSection() {
    return (
        <section id="error" className="error d-flex flex-center text-center bg-primary">
            <div className="error-inner">
                <h3 className="error-header">Hey! It seems you lost</h3>
                <div className="error-image">
                    <img src={errorImage} alt="" />
                </div>
                <p className="error-text text-bold">We are sorry for the inconveniece. It looks like you are trying to access a page that has either been deleted or never existed.</p>
                <Link className="btn btn-secondary text-bold btn-link" to="/">Go back Home &#x1F680;</Link>
                <p className="error-alternative">or send a mail to <a href="mailto:hello@boldin.co" className="company-mail text-white text-bold">hello@boldin.co</a></p>
            </div>
        </section>
    )
}

export default ErrorSection;
