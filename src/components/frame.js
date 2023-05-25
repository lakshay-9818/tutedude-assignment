const Frame=(props)=>{

    return (
        <div className="frame p-1">
          <p>{props.title}</p>
          <span>{props.value}</span>      
        </div>
      );
};

export default Frame;