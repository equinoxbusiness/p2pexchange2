import React from 'react';
import "./Footer.css";

import { Link } from 'react-router-dom';

import p2ph1 from "./assets/p2p-h-1.png";
import p2ph2 from "./assets/p2p-h-2.png";
import p2ph3 from "./assets/p2p-h-3.png";
import p2ph4 from "./assets/p2p-h-4.png";
import p2ph5 from "./assets/p2p-h-5.png";
import p2ph6 from "./assets/p2p-h-6.png";
import linkedin from "./assets/linkedin.png";
import medium from "./assets/medium.png";
import reddit from "./assets/reddit.png";

function Footer(){
    // mailtoHref = "mailto:support@example.com?subject=SendMail&body=Description";
    return(
        <>
        <div class="footer-main">
        <div class="footer">
    <div class="footer-div1">
    <div class="footer-div1a">
        <p><Link to="/fees" style={{textDecoration: 'none', color:'white'}}>Fees</Link></p>
        <p><Link to="/termsOfServices" style={{textDecoration: 'none', color:'white'}}>Terms of Services</Link></p>
        <p><a href="mailto:p2pablc@ablc.io" style={{textDecoration: 'none', color:'white'}}>Contact Us</a></p>
        {/* <p>Create an Offer</p> */}
    </div>
    <div class="footer-div2">
            <a href="https://discord.gg/MfBpz63ehs" target="_blank"><img src={p2ph1}></img></a>
            <a href="https://twitter.com/ARABELLAablc" target="_blank"><img src={p2ph2}></img></a>
            <a href="https://youtube.com/channel/UC0Xe-zHFQrDZDjoime0mU1A" target="_blank"><img src={p2ph3}></img></a>
            <a href="https://t.me/ablctelegram" target="_blank"><img src={p2ph4}></img></a>
            <a href="https://www.facebook.com/Arabella-103503552210330/" target="_blank"><img src={p2ph5}></img></a>
            <a href="https://www.instagram.com/ablc_arabella_official/" target="_blank"><img src={p2ph6}></img></a>
            <a href="https://www.linkedin.com/in/arabella-ablc-05b451234/" target="_blank"><img class="linkedin" src={linkedin}></img></a>
            <a href="https://arabellaablc.medium.com/" target="_blank"><img class="linkedin" src={medium}></img></a>
            <a href="https://www.reddit.com/user/ARABELLAablc" target="_blank"><img class="linkedin" src={reddit}></img></a>
            
            
            
    </div>
    </div>

</div>
</div>
        </>
    )

}
export default Footer;