import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

import logoysnhlq1 from "./assets/logo_ysnhlq 1.png";
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Header(){
    return(
        <>
                                <div class="header-a-nav">
                        <div class="header-a-nav-logo">
                        <Link to="/" style={{textDecoration: 'none', color:'white'}}><img src={logoysnhlq1}></img></Link>
                        </div>
                        <div class="header-a-nav-div2">
                            <span class='header-a-nav-div2-txt'>Light Paper</span>
                            <span class='header-a-nav-div2-txt'>Docs</span>
                            <div class="header-a-nav-div2-new-btn" >< ConnectButton /></div>
                        </div>
                    </div>
        </>
    )
}
export default Header;