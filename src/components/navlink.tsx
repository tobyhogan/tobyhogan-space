import React from "react";
import { Link, navigate } from "gatsby";

import '../styles/global.css'
import '../styles/index.css'


function NavLink({children, to, setNavOpen}: any) {

  return (
    <button
      className="Link2 underline hover:bg-grayNew-275"
      onClick={() => {
        console.log("working")
        navigate(to)
        setNavOpen(false)
    }}>
      {children}
    </button>

  )

}

export default NavLink