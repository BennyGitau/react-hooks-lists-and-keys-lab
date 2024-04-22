import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const userLinks = links.map((link) =>{
    return <a key={link} href={'#' + link}>{link}</a>
  })
  return <nav>{userLinks}</nav>;
}

export default NavBar;
