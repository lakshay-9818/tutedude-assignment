import { Component } from "react";
import Frame from "./frame";

class DashBoard extends Component{
    render(){
        return(<div className="dashBoard col-lg-4 col-12 text-center p-2 m-4">
        <div className="d-flex flex-wrap justify-content-evenly text-center"> 
        <Frame title="Referral Earning" value="₹ 2500"/>
        <Frame title="Total Referrals" value="7"/>
        <Frame title="Wallet Balance" value="₹ 500"/>
        </div>  
        <button className="withdrawButton ">Withdraw Button</button>
        </div>);

    }
}

export default DashBoard;