import React, { useState } from 'react';
import "./P2PDashboard.css";
import Header from "./Header";
import Footer from "./Footer";

import logoysnhlq1 from "./assets/logo_ysnhlq 1.png";
import usdt from "./assets/usdt.png";
import busd from "./assets/busd.png";
import bnb from "./assets/bnb.png";
import p2ph1 from "./assets/p2p-h-1.png";
import p2ph2 from "./assets/p2p-h-2.png";
import p2ph3 from "./assets/p2p-h-3.png";
import p2ph4 from "./assets/p2p-h-4.png";
import p2ph5 from "./assets/p2p-h-5.png";
import p2ph6 from "./assets/p2p-h-6.png";
import { ethers } from 'ethers';
import { BnbPrice } from '../sdk/p2p';


function P2PDashboard() {
    const [busdPrice, newBusdPrice] = useState()
    const [bnbPrice, newBnbPrice] = useState()
    const [usdtPrice, newUsdtPrice] = useState()
    const address = "0x2c9F84Baa3071Dac7661c48760Ca78f601d95fF1"
    async function setUSDTPrice(newPrice) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const abi = [
            "function setTokenPriceUsdt(uint256 _newPrice) returns (uint256)"
        ];
        const contract = new ethers.Contract(address, abi, signer);
        const tx = await contract.functions.setTokenPrice(newPrice.toString());

        const receipt = await tx.wait();
        console.log("receipt", receipt);
    }
    async function setBnbPrice(newPrice) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()

        const abi = [
            "function setTokenPriceBnb(uint256 _newPrice) returns (uint256)"
        ];
        const contract = new ethers.Contract(address, abi, signer);
        const tx = await contract.functions.setTokenPrice(newPrice.toString());

        const receipt = await tx.wait();
        console.log("receipt", receipt);
    }
    async function setBusdPrice(newPrice) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()

        const abi = [
            "function setTokenPriceBusd(uint256 _newPrice) returns (uint256)"
        ];
        const contract = new ethers.Contract(address, abi, signer);
        const tx = await contract.functions.setTokenPrice(newPrice.toString());

        const receipt = await tx.wait();
        console.log("receipt", receipt);
    }
    return (
        <>
            <div class="dashb-main">
                <Header/>
                {/* <div class="dashb-a">
                    <div class="dashb-a-nav-logo">
                        <img src={logoysnhlq1}></img>
                    </div>
                </div> */}

                <div class="dashb-b-container">
                    <div class="dashb-b-div1">
                        <span>Price Updating Dashboard</span>
                    </div>

                    <div class="dashb-b-div2">
                        {/* 1////// */}
                        <div class="dashb-b-div2a">
                            <div class="dashb-b-div2a-div1">
                                <img src={usdt}></img>
                                <div class="dashb-b-div2a-div1-txt">USDT</div>
                            </div>
                            <div class="dashb-b-div2a-div2">
                                <input onChange={(e) => newUsdtPrice(e.target.value)} type="text" placeholder="USDT Price" ></input>
                            </div>
                            <div class="dashb-b-div2a-div3">
                                <button
                                    onClick={() => setUSDTPrice(usdtPrice)} >Update</button>
                            </div>
                        </div>
                        {/* 2/////// */}
                        <div class="dashb-b-div2b">
                            <div class="dashb-b-div2a-div1">
                                <img src={busd}></img>
                                <div class="dashb-b-div2a-div1-txt">BUSD</div>
                            </div>
                            <div class="dashb-b-div2a-div2">
                                <input onChange={(e) => newBusdPrice(e.target.value)} type="text" placeholder="BUSD Price" ></input>
                            </div>
                            <div class="dashb-b-div2a-div3">
                                <button
                                    onClick={() => busdPrice ? setBusdPrice(busdPrice) : alert("empty value")} >Update</button>
                            </div>
                        </div>
                        {/* 3////////// */}
                        <div class="dashb-b-div2b">
                            <div class="dashb-b-div2a-div1">
                                <img src={bnb}></img>
                                <div class="dashb-b-div2a-div1-txt">BNB</div>
                            </div>
                            <div class="dashb-b-div2a-div2">
                                <input onChange={(e) => newBnbPrice(e.target.value)} type="text" placeholder="BNB Price" ></input>
                            </div>
                            <div class="dashb-b-div2a-div3">
                                <button
                                    onClick={() => bnbPrice ? setBnbPrice(BnbPrice) : alert("empty value")}
                                >Update</button>
                            </div>
                        </div>
                        {/* //////////// */}
                    </div>

                    {/* <div class="dashb-b-div2">
        <div class="dashb-b-div2a">
            <div class="dashb-b-div2a-div1">
                <img src={usdt}></img>
                <div class="dashb-b-div2a-div1-txt">USDT</div>
            </div>
            <div class="dashb-b-div2a-div3 dashb-b-div2a-div3-wd">
                <button>Withdraw</button>
            </div>
        </div>
        <div class="dashb-b-div2b">
            <div class="dashb-b-div2a-div1">
                <img src={busd}></img>
                <div class="dashb-b-div2a-div1-txt">BUSD</div>
            </div>
            <div class="dashb-b-div2a-div3 dashb-b-div2a-div3-wd">
                <button>Withdraw</button>
            </div>
        </div>
        <div class="dashb-b-div2b">
            <div class="dashb-b-div2a-div1">
                <img src={bnb}></img>
                <div class="dashb-b-div2a-div1-txt">BNB</div>
            </div>
            <div class="dashb-b-div2a-div3 dashb-b-div2a-div3-wd">
                <button>Withdraw</button>
            </div>
        </div>
                    </div> */}



                </div>


            </div>
            <Footer/>
        </>
    )
};
export default P2PDashboard