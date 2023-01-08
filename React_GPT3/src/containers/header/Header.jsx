import React from "react";
import './header.css';
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";


const Header = () => {
    return ( 
        <div className="header section_padding" id="home"> 
            <div className="header_content">
                <h2 className="gradient_text">Let’s Build Something amazing with GPT-3 OpenAI</h2>
                
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className="header_input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                </div>

                <div className="header_people">
                    <img src={people} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="header_image">
                <img src={ai} alt="aiimage" />
            </div>
        </div>
     );
}
 
export default Header;