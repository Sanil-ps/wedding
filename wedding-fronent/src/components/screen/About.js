import React from 'react'

const About = () => {
    return (
        <div>
            <div className="w3-panel">
                <h1><b>Welcome</b></h1>
                <p></p>
            </div>
            <div className="w3-container">
                <div className="w3-display-container mySlides">
                    <img src="https://impresario.co.in/wp-content/uploads/2018/11/LMP09265-1-scaled.jpg" style={{ width: "100%" }} alt='q' />
                    <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "absolute", top: '140px', left: '210px' }}>
                        <div style={{ fontSize: "4.615rem", lineHeight: '1.4', fontWeight: "700", color: "#FFFFFF", marginBottom: "30px", }}>
                            Events with Style & Strategy</div>
                    </div>
                </div>
            </div>
            <div style={{position: "relative"}}>
            <div style={{    boxSizing: 'border-box', paddingLeft: "7.5px",  paddingRight: '7.5px', width: '100%'}}>
             <div style={{textAlign: 'center'}}>
             <h1 style={{fontFamily: "Comic Sans MS"}}>Wedding Planner - Your Destination Wedding Specialist</h1>
             </div>
            </div></div>
            {/* we offer */}
            <div class="w3-row w3-container">
                <div class="w3-center w3-padding-64">
                    <span class="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">What We Offer</span>
                </div>
                <div class="w3-col l3 m6 w3-light-grey w3-container w3-padding-16">
                    <h3>Eentartainment Planning</h3>
                    <p>Artist Liaison & Management, Celebrity Liaison, Artist Contracts, Entertainment Scripting..</p>
                </div>

                <div class="w3-col l3 m6 w3-grey w3-container w3-padding-16">
                    <h3>Branding</h3>
                    <p>We are a team of passionate experts who will plan, design and organise your programs through our creative and exclusive concepts in accordance with your needs.</p>
                </div>

                <div class="w3-col l3 m6 w3-dark-grey w3-container w3-padding-16">
                    <h3>Consultation</h3>
                    <p>With a comprehensive range of services and professionals available at your fingertips.</p>
                </div>

                <div class="w3-col l3 m6 w3-black w3-container w3-padding-16">
                    <h3>Promises</h3>
                    <p>Find the perfect service providers for their needs and for service providers to connect with potential clients and expand their businesses.</p>
                </div>
            </div>
           
            {/* we offer */}


            {/* <!-- Contact --> */}
            <div class="w3-padding-24" style={{ width: "800px", position: "absolute", left: "270px" }}>
                <div className="w3-center w3-padding-64" id="contact">
                    <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">Contact Us</span>
                </div>

                <form className="w3-container" action="/action_page.php" target="_blank">
                    <div className="w3-section">
                        <label>Name</label>
                        <input className="w3-input w3-border w3-hover-border-black" style={{ width: "100%" }} type="text" name="Name" required />
                    </div>
                    <div className="w3-section">
                        <label>Email</label>
                        <input className="w3-input w3-border w3-hover-border-black" style={{ width: "100%" }} type="text" name="Email" required />
                    </div>
                    <div className="w3-section">
                        <label>Subject</label>
                        <input className="w3-input w3-border w3-hover-border-black" style={{ width: "100%" }} name="Subject" required />
                    </div>
                    <div className="w3-section">
                        <label>Message</label>
                        <input className="w3-input w3-border w3-hover-border-black" style={{ width: "100%" }} name="Message" required />
                    </div>
                    <button type="submit" className="w3-button w3-block w3-black">Send</button>
                </form>
            </div>

        </div>
    )
}

export default About;