import Navbar from "./components/Navbar";
import DashBoard from "./components/Dashboard";
import ReferralBox from "./components/ReferralBox";
import CardHolder from "./components/CardHolder";
import SectionStrip from "./components/SectionStrip";

function App() {

 const steps=[
{icon:"bi bi-people-fill", feat:"Invite your friends", description:"Share the link tutedude.com with your friends"},
{icon:"bi bi-tag-fill", feat:"Friend purchases any course", description:"Using your REFERRAL CODE in the payments page"},
{icon:"bi bi-percent" ,feat:"Your friend gets ₹ 200 off" ,description:"On his overall purchase using your referral code"},
{icon:"bi bi-currency-rupee", feat:"Your get ₹ 200 as referral money", description:"On total purchase the friend makes, into your wallet"},
{icon:"bi bi-wallet", feat:"Transfer Money from wallet", description:"When the wallet balance reaches ₹ 200 or more you can withdraw it"}
  ];

  const referralCode= "EDCH54"

  return (
    <div className="App ">
      <Navbar/>
      <div className="mx-5">
      <SectionStrip/>

      <div className="d-flex flex-wrap justify-content-evenly">
      <DashBoard/>
      <ReferralBox rfcode={referralCode}/>
      </div>

      <CardHolder steps={steps} />
      
      <a href="#"> Friends Enrolled</a><br/>
      <a href="#"> Terms and Condition</a>
      
    </div>
  </div>
  );
}

export default App;
