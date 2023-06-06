import React from 'react'

export default function Contacts() {
    return (
        <div className="contact-content">
            {/* Map Section Start */}
            <div style={{ overflow: "hidden", resize: "none", maxWidth: "100%", width: "1920px", height: "500px" }}>
                <div id="display-google-map" style={{ height: "100%", width: "100%", maxWidth: "100%" }}>
                    <iframe style={{ height: "100%", width: "100%", border: "0" }} frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" />
                </div>
            </div>
            {/* Map Section End */}

            {/* Form Section Start */}
            <div className="container">
                <h3>GET IN TOUCH</h3>
                <p>Nulla mattis mi quis elit porttitor gravida. Ut ut laoreet justo. Suspendisse nulla ligula, aliquet sed cursus ut, sodales sit amet metus.</p>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <form action="http://nouthemes.com/html/zorka/sendmail.php" method="post" className="contact-form">
                            <label for="your_name">Your name*</label>
                            <input className="input-form" type="text" name="your_name" id="your_name" />
                            <label for="your_email">Your email*</label>
                            <input className="input-form" type="email" name="your_email" id="your_email" />
                            <label for="your_message">Your message*</label>
                            <textarea className="textarea-form" name="your_message" id="your_message"></textarea>
                            <button className="submit-btn" type="submit">Send</button>
                        </form>
                        <div className="form-note"></div>
                    </div>
                </div>
            </div>
            {/* Form Section End */}
            
        </div>
    )
}
