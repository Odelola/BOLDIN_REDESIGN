import React from 'react';
// import companyLogo from '../images/footerImages/BOLDIN_LOGO.webp'
import companyLogo from '../ServicesPage_images/footerImages/BOLDIN_LOGO.webp'
import './Footer.css'

function Footer() {
    return (
        <footer id="footer" class="footer default-padding-2">
            <div class="footer-inner d-flex jcsb">
                <div class="footer-logo column-25">
                    <div class="logo">
                        <img src={companyLogo} alt="Company's Logo" />
                    </div>
                </div>
                <div class="footer-links-container d-flex flex-column column-15">
                    <ul class="footer-links">
                        <li><a href="#">Work with us</a></li>
                        <li><a href="#">About Boldin</a></li>
                    </ul>
                    <a href="#" className="footer-social-link">Linkedin</a>
                </div>
                <div class="footer-links-container d-flex flex-column column-15">
                    <ul class="footer-links">
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                    <a href="#" className="footer-social-link">Twitter</a>
                </div>
                <div class="footer-links-container d-flex flex-column column-15">
                    <ul class="footer-links">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookies Policy</a></li>
                    </ul>
                    <a href="#" className="footer-social-link">Instagram</a>
                </div>
                <div class="footer-address column-15">
                    <div>
                        <h5><a href="mailto:hello@boldin.co">hello@boldin.co</a></h5>
                        <h5><a href="tel:+234 90651 33849" className="telephone">+234 90651 33849</a></h5>
                        <span class="address">
                                1, Buluro Street, Dopemu, Lagos State, Nigeria.
                        </span>
                    </div>
                </div>
            </div>
                <div class="footer-credits">
                    &copy; 2022 Boldin Technology Solutions
                </div>
        </footer>
    )
}

export default Footer
