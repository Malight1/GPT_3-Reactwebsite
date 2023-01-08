import React, {useState} from "react";
import './navbar.css';
import {RiMenuFill, RiCloseFill} from 'react-icons/ri';
import logo from '../../assets/logo.svg';




const Menu = ()=> (
    <> 
    <a href="#home">Home</a>
    <a href="#wgpt3">What is GPT 3?</a>
    {/* <a href="#possibility">Open AI</a> */}
    <a href="#features">Case studies</a>
    <a href="#blog">Library</a>
    </>
)

const Navbar = () => {
    const [toggleMenu, SetToggleMenu] = useState(false)


    const [fix , setFix] = useState(false)

    function setFixed(){
        if(window.scrollY >= 80){
            setFix(true)
        }
        else setFix(false)

    }
    window.addEventListener("scroll", setFixed)


    return (  
        <div className={fix? 'navbar fixed' : 'navbar'}>
            <div className="navbar_container">
                <div className="navbar-logo">
                    <img src={logo}alt="logo" />
                </div>
                <div className="navbar_link">
                   <Menu />
                </div>
            </div>


            <div className="navbar_sign">
                <a href="#sign">Sign In</a>
                <button type="button">Sign up</button>
            </div>


            <div className="navbar_menu">
                {toggleMenu
                    ?<RiCloseFill color="#fff" size={27} onClick={()=>SetToggleMenu(false)} />
                    :<RiMenuFill color="#fff" size={27} onClick={()=>SetToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="menu_container scale-up-center">
                        <div className="menu-links">
                            <Menu />
                        </div>
                        <div className="menu_sign">
                            <a href="#sign">Sign In</a>
                            <button type="button">Sign up</button>  
                        </div>
                    </div>
                )


                }
            </div>
        </div>
    );
}
 
export default Navbar;