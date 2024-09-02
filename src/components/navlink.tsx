import React from "react";
import { Link, navigate } from "gatsby";

import '../styles/global.css'
import '../styles/index.css'


function NavLink({text, href, setNavOpen}: any) {

  return (
    <button
      className="Link2 hover:underline"
      onClick={() => {
        console.log("working")
        navigate(href)
        setNavOpen(false)
    }}>
      {text}
    </button>

  )

}

export default NavLink