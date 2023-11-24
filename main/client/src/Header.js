import { useEffect, useState, useContext } from "react";
import {Link} from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header() {

  const {setUserInfo, userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials : 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout(){
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
        <Link to="/" className="logo">Welcome to my <span className="styleText">Kitchen!</span></Link>
        <nav>
          {username  && (
            <>
            <Link to="/publish" className="post-tag">Post Blog</Link>
            <a onClick={logout} className="logout-tag">Logout ({username})</a>
            </>
          )}
          {!username && (
            <>
            <Link to="/login" className="login-tag">Login</Link>
            <Link to="/register" className="reg-tag">Register</Link>
            </>
          )}
        </nav>
      </header>
  );
}