const Contact = () => {
    return (
        <>
            <section className="Contact-section" >
                <div className="container" >
                    <div className="contact-heading">Contact</div>
                    <div className="contact-container" >
                        <div className="contact-form-container">
                            <div className="left-contact-form">
                                <div className="heading-cotent" >
                                    <h2>GET IN TOUCH</h2>
                                    <h1>Let’s Build Something Amazing Together</h1>
                                    <p>Have a project idea or looking for a Full Stack Developer?
                                        I'm available for freelance projects, internships, and full-time opportunities.
                                    </p>
                                </div>
                            </div>
                            <div className="right-contact-form">
                                <div className="form-inputs-group">
                                    <div className="form-input">
                                        <input type="text" placeholder="Enter Your Name" />
                                    </div>
                                    <div className="form-input">
                                        <input type="text" placeholder="Enter Your Nuumber" />
                                    </div>
                                    <div className="form-input">
                                        <input type="email" placeholder="Enter Your Email" />
                                    </div>
                                    <div className="form-input ">
                                        <input type="text" placeholder="Enter Your Subject" />
                                    </div>
                                    <div className="form-text-area full">
                                        <textarea name="" id="" placeholder="Your Message"></textarea>
                                    </div>
                                    <div className="form-submit-button full" >
                                        Send Message
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>        </>
    )
}
export default Contact