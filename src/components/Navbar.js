

const Navbar=()=>{

    return (           


          <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">

    <div className="d-inline float-left">
      <a className="navbar-brand" href="#">TuteDude</a>
      </div>

    <div  className="d-inline float-right">
    <ul class="navbar-nav mr-auto">      

      <li className="nav-item d-none d-sm-block">
          <a className="nav-link disabled">My Assignment</a>
      </li> 
      <li class="nav-item d-none d-sm-block">
          <a className="nav-link disabled">Chat with Mentor</a>
      </li>

      <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle profileInfo" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="bi bi-person-circle p-1 d-none d-sm-inline-block"></i> ProfileName
          </a>
          
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
      </li>
     </ul> 
    </div>
    


    
  </div>
</nav>

       
      );
};

export default Navbar;