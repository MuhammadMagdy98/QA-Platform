import "./Navbar-style.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { LoginContext } from "../../helpers/Context";
import { useContext, useEffect } from "react";
import { useState } from "react";
import DownArrow from "../../assets/caret-down-solid.svg";

import UserMenu from "../UserMenu/UserMenu";



function Navbar() {
  let navigate = useNavigate();

  function changeUrl(url) {
    navigate(`/${url}`);
  }
  const { setUsername, isLoggedIn, username } = useContext(LoginContext);
  const [loginState, setLoginState] = useState();

  console.log(loginState);
  

  useEffect(() => {
    console.log("use effect navbar");
    if (localStorage.getItem('username')) {
      const userName = localStorage.getItem('username');
      setLoginState(<>
      <UserMenu userName={userName}/>
      
      </>);

     
    } else {
      setLoginState(<><button onClick={() => changeUrl('signup')}>Sign Up</button>
      <button onClick={() => changeUrl('login')}>Log in</button></>);
    }
    console.log(isLoggedIn);
  }, [username, isLoggedIn]);
  return (
    <nav className="main-nav">
      <ul>
        <li>
          {" "}
          <a href="questions">Questions</a>
        </li>
        <li>
          {" "}
          <a href="users">Users</a>
        </li>
        <li>
          {" "}
          <a href="tags">Tags</a>
        </li>
      </ul>
      <div className="nav-button-group">{loginState}
        
      </div>
    </nav>
  );
}

export default Navbar;
