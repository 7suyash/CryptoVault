document.addEventListener("DOMContentLoaded",function(){

document.getElementById("accountList").addEventListener("click ",changeAccount);
document.getElementById("UserAddress").addEventListener("click ",copyAddress);
document.getElementById("transferfund").addEventListener("click ",handler);

document.getElementById("Header_network").addEventListener("click ",getOpenNetwork);
document.getElementById("network_item").addEventListener("click ",getselectedNetwork);
document.getElementById("Add_network").addEventListener("click ",setnetwork);

document.getElementById("login_account").addEventListener("click ",logininUSER);
document.getElementById("account_create").addEventListener("click ",createuser);
document.getElementById("Open_create").addEventListener("click ",openCreate);

document.getElementById("SIGN_UP").addEventListener("click ",signUP);
document.getElementById("login_up").addEventListener("click ",login);
document.getElementById("logout").addEventListener("click ",logout);

document.getElementById("open_transfer").addEventListener("click ",opentransfer);
document.getElementById("go_back").addEventListener("click ",goBack);
document.getElementById("open_import").addEventListener("click ",openImport);


document.getElementById("open_assets").addEventListener("click ",openAssets);
document.getElementById("open_activity").addEventListener("click ",openActive);
document.getElementById("go_homepage").addEventListener("click ",goHomepage);

document.getElementById("open_account_import").addEventListener("click ",openImportmodel);
document.getElementById("close_account_import").addEventListener("click ",closeImport);
document.getElementById("add_new").addEventListener("click ",addToken);

document.getElementById("add_acount").addEventListener("click ",addAccoount);





})
let providerURL="";
//let provider;
let privatekey;
let address;


//function 
function handler(){
    document.getElementById("transfer_center").style.display="flex";
    const amount=document.getElementById("amount").value;
    const address=document.getElementById("amount").value;
    const private_key="";
    const testaccount="";
    //provider building
    const provider = new ethers.providers.JsonRcpProvider(providerURL);


    let wallet = new ethers.Wallet(privatekey,provider);

    const tx={
        to: address,
        value: ethers.utils.parseEther(amount),
    };


    let a = document.getElementById("link");
    a.href = "some link url";

    wallet.sendTransactions(tx).then((txobj)=> {
    console.log("txHash:",txobj.hash);


    document.getElementById("transfer_center").style.display="none";
    const a =document.getElementById("link");
    });
    


};
function checkbalance(){};
function getOpenNetwork(){};
function getselectedNetwork(){};
function setnetwork(){};
function logininUSER(){};
function createuser(){};
function openCreate(){};
function signUP(){};
function login(){};
function logout(){};
function opentransfer(){};
function goBack(){};
function openImport(){};
function importgoBack(){};
function openActive(){};
function openAssets(){};
function goHomepage(){};
function openImportmodel(){};
function closeImport(){};
function addToken(){};
function addAccoount(){};
function myFunction(){};
function copyAddress(){};
function changeAccount(){};
