import React from 'react';
import './Newsletter.css'

function Newsletter() {
    return (
        <section id="newsletter" className="newsletter default-padding-2">
            <div className="newsletter-inner d-flex jcsb">
                <div className="newsletter-text column-40">
                    <h3 className="section-title" data-aos="fade-right">Subscribe to our newsletter</h3>
                    <p className="section-text" data-aos="fade-right">Stay updated on our latest news, blog posts and promotions.</p>
                </div>
                <div className="newsletter-form column-45" data-aos="zoom-in">
                    <form action="#" className="newsletter-signup d-flex flex-column">
                        <input type="email" name="email" placeholder="Enter your email address" />
                        <button type="submit" className="btn btn-primary hover-bold hover-rocket">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
