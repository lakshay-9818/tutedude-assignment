import { Component } from "react";

const ReferralBox =(props)=>{
    return(<div className="referralBox col-lg-4 col-12 text-center p-2 m-4">
        <h2>Your Referral Code</h2>
        <div className="codeBox">{props.rfcode}</div>
         </div>
    );
}

export default ReferralBox;