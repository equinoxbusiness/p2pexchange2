import { ethers } from "ethers";
import axios from 'axios';

const address = "0x789D099aa554B0e01FFC26cB591bE35C24dDE40c";


//approve
async function approve(amount, token) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const abi = [
        "function approve(address spender, uint256 amount) returns (bool)"
    ];
    const contract = new ethers.Contract(token, abi, signer);
    const tx = await contract.functions.approve("0x789D099aa554B0e01FFC26cB591bE35C24dDE40c", amount);

    const receipt = await tx.wait();
    console.log("receipt", receipt);
}


export async function allowance(token, spender, owner) {
    const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed4.binance.org");
    const abi = [
        "function allowance(address owner, address spender) view returns (uint256)"
    ];
    const contract = new ethers.Contract(token, abi, provider);
    const result = await contract.functions.allowance(owner, spender);

    console.log("result", parseFloat(result[0].toString()));
    return parseInt(result[0].toString())
}



//create Order
async function CreateOrder(orderType, tokenB, baseAmount, quoteAmount) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const abi = [
        "function CreateOrder(string _orderType, address _tokenB, uint256 _baseAmount, uint256 _quoteAmount) payable"
    ];
    const contract = new ethers.Contract("0x789D099aa554B0e01FFC26cB591bE35C24dDE40c", abi, signer);
    const tx = await contract.functions.CreateOrder(orderType.toString(), tokenB.toString(), baseAmount.toString(), quoteAmount.toString());

    const receipt = await tx.wait();
    console.log("receipt", receipt);
}

export const createPair = async (orderType, tokenA, tokenB, baseAmount, quoteAmount) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const owner = signer.getAddress()
    alert("approving Token")
    const amountOfAllowance = await allowance(tokenA, address, owner);
    if (amountOfAllowance > 0) {
        alert("creating Order")
        await CreateOrder(orderType, tokenA, tokenB, ethers.utils.parseUnits(baseAmount, 8), ethers.utils.parseUnits(quoteAmount, 18));
    } else {
        await approve("10000000000000000000000000000", tokenA).then(async (res) => {
            alert("creating Order")
            await CreateOrder(orderType, tokenA, tokenB, ethers.utils.parseUnits(baseAmount, 8), ethers.utils.parseUnits(quoteAmount, 18));
        })
    }

}

export async function ablcPrice() {
    const abi = [
        "function ablcPrice() view returns (uint256)"
    ];
    const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed4.binance.org");
    const contract = new ethers.Contract(address, abi, provider);
    const result = await contract.functions.ablcPrice();
    console.log("result", parseFloat(result[0].toString()) / 1000000000000000000);
    const cPrice = parseFloat(result[0].toString()) / 1000000000000000000;
    return cPrice;
}
export async function UsdtPrice() {
    const abi = [
        "function UsdtPrice() view returns (uint256)"
    ];

    const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed4.binance.org");
    const contract = new ethers.Contract(address, abi, provider);
    const result = await contract.functions.UsdtPrice();
    console.log("result", parseFloat(result[0].toString()) / 1000000000000000000);
    const cPrice = parseFloat(result[0].toString()) / 1000000000000000000;
    return cPrice;
}
export async function BusdPrice() {
    const abi = [
        "function BusdPrice() view returns (uint256)"
    ];
    const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed4.binance.org");
    const contract = new ethers.Contract(address, abi, provider);
    const result = await contract.functions.BusdPrice();
    console.log("result", parseFloat(result[0].toString()) / 1000000000000000000);
    const cPrice = parseFloat(result[0].toString()) / 1000000000000000000;
    return cPrice;
}
export async function BnbPrice() {
    const abi = [
        "function BnbPrice() view returns (uint256)"
    ];
    const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed4.binance.org");
    const contract = new ethers.Contract(address, abi, provider);
    const result = await contract.functions.BnbPrice();
    console.log("result", parseFloat(result[0].toString()) / 1000000000000000000);
    const cPrice = parseFloat(result[0].toString()) / 1000000000000000000;
    return cPrice;
}

//Cancel Order
async function cancelOrder(Oid) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const abi = [
        "function cancelOrder(uint256 id)"
    ];
    const contract = new ethers.Contract(address, abi, signer);
    const tx = await contract.functions.cancelOrder(Oid);

    const receipt = await tx.wait();
    console.log("receipt", receipt[0]);
}


//Exchnage



export async function Exchange( quoteToken, _baseAmount) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const owner = signer.getAddress()
    const amountOfAllowance = await allowance(quoteToken, address, owner);
    if (amountOfAllowance > 0) {
        alert("Exchanging")
        const abi = [
            "function Exchange(address _wallet, uint256 id)"
        ];
        const contract = new ethers.Contract("0x789D099aa554B0e01FFC26cB591bE35C24dDE40c", abi, signer);
        const tx = await contract.functions.Exchange(wallet, id);

        const receipt = await tx.wait();
        console.log("receipt", receipt);
    } else {


        alert("Approving Token")
        await approve("1000000000000000000000000000", tokenB).then(async (res) => {
            alert("Exchanging")
            const abi = [
                "function Exchange(address _wallet, uint256 id)"
            ];
            const contract = new ethers.Contract("0x789D099aa554B0e01FFC26cB591bE35C24dDE40c", abi, signer);
            const tx = await contract.functions.Exchange(wallet, id);

            const receipt = await tx.wait();
            console.log("receipt", receipt);

        })
    }

}


//get orders
