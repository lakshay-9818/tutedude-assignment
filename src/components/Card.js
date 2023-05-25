const Card=(props)=>{

    return (
        
        <div className="cardi col-lg-6 col-12 d-flex flex-row">

            <div className="col-md-2 imC">
            <i class={props.icon}></i>            
            </div>

            <div className="do ">

            <h4>{props.feat}</h4>
            <p>{props.para}</p>
            </div>

        </div>
        
      );
};

export default Card;