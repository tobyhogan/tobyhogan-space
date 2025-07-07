import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { Link } from "gatsby";

import NavLink from "./navlink";

import { VscGithub } from "react-icons/vsc";
import { AiOutlineSpotify } from "react-icons/ai";
import { IoInvertMode } from "react-icons/io5";
import { MdMenu } from "react-icons/md";


function Header() {

  const [navOpen, setNavOpen] = useState(false)

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useOutsideTrigger(menuRef, buttonRef);


  const [isDark, setIsDark] = useState(false)

  useEffect(() => {


    if (!localStorage.getItem("theme")) {

      
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

        localStorage.setItem("theme", "light")
        document.body.classList.add('light')
  
        setIsDark(false)


       // === CODE ABOVE MAKE SITE DEFAULT TO LIGHT NO MATTER WHAT === 
          

      } else {

        localStorage.setItem("theme", "light")
        document.body.classList.add('light')
  
        setIsDark(false)

      }


    } else if (localStorage.getItem("theme") == "light") {

      
      
      document.body.classList.add('light');

      setIsDark(false)



    } else if (localStorage.getItem("theme") == "dark") {

      
      document.body.classList.add('dark');

      setIsDark(true)
    }


  }, [])


  function handleToggleTheme() {


    if (localStorage.getItem("theme") == "light") {


      localStorage.setItem("theme", "dark")

      
      document.body.classList.add('dark');
      document.body.classList.remove('light');

      setIsDark(true)
      

    } else if (localStorage.getItem("theme") == "dark") {

      localStorage.setItem("theme", "light")

      document.body.classList.add('light');
      document.body.classList.remove('dark');

      setIsDark(false)

    } 

  }
  

  function useOutsideTrigger(ref1: any, ref2: any) {

    useEffect(() => {

      function handleClickOutside(event: any) {

        if (ref1.current && !ref1.current.contains(event.target) && !ref2.current.contains(event.target)) {
          
          setNavOpen(false)

        }}
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };

      
    }, [ref1, ref2]);
  }
  

  const navList = 
    <>{/*
      <NavLink to="/portfolio" setNavOpen={setNavOpen}>PORTFOLIO</NavLink>

      <NavLink to="/personal" setNavOpen={setNavOpen}>PERSONAL</NavLink>
      <NavLink to="/blog"setNavOpen={setNavOpen}>BLOG</NavLink>
      <NavLink to="/patch-notes" setNavOpen={setNavOpen}>PATCHES</NavLink>

      <NavLink to="/demo-projects" setNavOpen={setNavOpen}>DEMOS</NavLink>
      <NavLink to="/resources" setNavOpen={setNavOpen}>RESOURCES</NavLink>

      */}

      <NavLink to="/" setNavOpen={setNavOpen}>HOME</NavLink>

      <NavLink to="/projects" setNavOpen={setNavOpen}>PROJECTS</NavLink>

      <NavLink to="/info" setNavOpen={setNavOpen}>CONNECT</NavLink>

    </>

    

  return (
      <div className="flex flex-row mx-auto w-fit mb-8">
        <Link to="/" className="mt-5 ml-4 mr-4 text-center text-neutral-500 text-lg tracking-wider hover:underline">tobyhogan.space</Link>
        <div className="FullNav">
          <ul className="my-auto pt-5 [&>*]:ml-5 text-md tracking-wide list-none">
            {navList}
          </ul>
        </div>
        <div className="ToggleNav">

          <button ref={buttonRef} onClick={() => {setNavOpen((navOpen: any) => !navOpen)}}>
            <MdMenu className="ml-4 mt-5" size={24}/>
          </button>

          {navOpen ?

            <div ref={menuRef} className="border-1 border-black pt-4 pb-3 pl-2 pr-4 -ml-16 absolute rounded-sm">
              <ul className="flex flex-col [&>*]:text-start ml-3 [&>*]:mb-1">
                {navList}
              </ul>
            </div>
            : null }

        </div>
        <button onClick={handleToggleTheme} className="mt-3 ml-8">
          <IoInvertMode size={22}/>

        </button>
      </div>
    )
}

export default Header