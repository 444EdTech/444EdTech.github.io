import React, { useEffect } from 'react';
import image from './images/img22.png';

const Home = () => {
    // Typing effect script
    const text = "Zeal for 4 things in 4 Ways and 4 Directions for You!!!";
    let index = 0;

    function typeText() {
        const typingText = document.getElementById("typing-text");
        if (typingText && index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust typing speed by changing the delay
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        typeText();
    }, []); // Run only once when the component mounts

    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row align-items-center" style={{ height: "100vh" }}>
                    
                    {/* Left Column with Typing Effect and Text */}
                    <div className="col-sm-8 d-flex flex-column justify-content-center align-items-center">
                        
                        {/* Typing Effect */}
                        <div className="typing-container mb-2" style={{color: 'blue', whiteSpace: 'normal', wordWrap: 'break-word', overflowWrap: 'break-word'}}>
                            <b><span id="typing-text"></span></b>
                        </div>


                        {/* Text Content Below Typing Effect */}
                        <div>
                            <h4>
                                Your Future Starts Here
                                <br />
                                <span>We bridge the gap between your potential and success...</span>
                                <br />
                                <span>We do more than just guide you - We inspire and energize you!</span>
                            </h4>
                        </div>
                    </div>

                    {/* Right Column with Image */}
                    <div className="col-sm-4 d-flex justify-content-center">
                        <img
                            src={image}
                            alt="444"
                            className="img-fluid"
                            style={{ width: 300, height: 300 }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;