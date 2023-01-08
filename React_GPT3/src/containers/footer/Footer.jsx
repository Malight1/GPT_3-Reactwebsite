import React from "react";
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
    return ( 
        <div className="footer section_padding">
            <div className="footer_header">
                <h1 className="gradient_text">
                Do you want to step in to the future before others
                </h1>
            </div>
            <div className="footer_btn">
                <a href="#2">Request Early Access</a>
            </div>

            <div className="footer_content">
                <div className="footer_logo">
                    <img src={gpt3Logo} alt="logo" />
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <div className="footer_link">
                    <h4>Links</h4>
                    <a href="#home">Home</a>
                    <a href="#wgpt3">What is GPT 3?</a>
                    <a href="#features">Case studies</a>
                    <a href="#blog">Library</a>
                </div>
                <div className="footer_link">
                    <h4>Comapany</h4>
                    <a href="#wg">Terms & Conditions</a>
                    <a href="#fe">Privacy</a>
                    <a href="#bl">Contact</a>
                </div>
                <div className="footer_link">
                    <h4>Get in touch</h4>
                    <a href="#w">Crechterwoord K12 182 DK Alknjkcb</a>
                    <a href="#f">085-132567</a>
                    <a href="#b">info@payme.net</a>
                </div>
            </div>

            <div className="copyright"><p>© 2023 Oguntunde Mubarak. All rights reserved.</p></div>
        </div>
     );
}
 
export default Footer;