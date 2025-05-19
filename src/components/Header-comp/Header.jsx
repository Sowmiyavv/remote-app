import React from "react";
import { FaPodcast, FaUser } from "react-icons/fa";
import './header-style.css';
import Search from "../Search-comp/Search";

function Header(){
  return (<div>
    <header className="header">
      <FaPodcast size={36} className="logo-icon"/>
      <Search />
      <FaUser size={22} className="profile-icon"/>
    </header>
  </div>)
}

export default Header;