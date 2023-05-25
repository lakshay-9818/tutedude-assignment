import Card from "./Card";
const CardHolder=(props)=>  
  (
     <div className="cardHolder ">
       <h2>How Does it Work?</h2> 
       <div className="d-flex flex-wrap justify-space-evenly p-3"> 
       {props.steps.map(step=>        
        {return (<Card icon={step.icon} feat={step.feat} para={step.description}/>)
         })}       
       </div>
     </div>
   );



export default CardHolder;