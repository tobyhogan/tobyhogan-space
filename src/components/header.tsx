import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { Link } from "gatsby";

import { VscGithub } from "react-icons/vsc";
import { AiOutlineSpotify } from "react-icons/ai";
import { IoInvertMode } from "react-icons/io5";
import { MdMenu } from "react-icons/md";



 


function Header() {

  const [navOpen, setNavOpen] = useState(false)

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);


  const [isDark, setIsDark] = useState(false)

  useEffect(() => {


    if (!localStorage.getItem("theme")) {

      
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

        localStorage.setItem("theme", "dark")
        document.body.classList.add('dark')
  
        setIsDark(true)
          

      } else {

        localStorage.setItem("theme", "dark")
        document.body.classList.add('dark')
  
        setIsDark(true)

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






  
  
  function useOutsideAlerter(ref: any) {

    useEffect(() => {

      function handleClickOutside(event: any) {

        if (ref.current && !ref.current.contains(event.target)) {
          
          setNavOpen(false)

        }}
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };

      
    }, [ref]);
  }
  


  const navList = 
    <>
      <Link to="/" className="underline hover:bg-grayNew-275">HOME</Link>
      <Link to="/blog" className="underline hover:bg-grayNew-275">BLOG</Link>
      <Link to="/patch-notes" className="underline hover:bg-grayNew-275">PATCHES</Link>
      <Link to="/resources" className="underline hover:bg-grayNew-275">RESOURCES</Link>
      <Link to="/personal" className="underline hover:bg-grayNew-275">ME</Link>
      <Link to="/info" className="underline hover:bg-grayNew-275">INFO</Link>
    </>

    

  return (
      <div className="flex flex-row mx-auto w-fit mb-8">
        <Link to="/" className="mt-5 ml-4 mr-4 text-center text-neutral-500 text-lg tracking-wider hover:underline">tobyhogan.space</Link>
        <div className="FullNav">
          <ul className="my-auto pt-5 [&>a]:ml-5 text-md tracking-wide list-none">
            {navList}
          </ul>
        </div>
        <div className="ToggleNav">
          <button onClick={() => {setNavOpen(navOpen => !navOpen)}}>
            <MdMenu className="ml-4 mt-5" size={24}/>
          </button>

          {navOpen ?

            <div ref={wrapperRef} className="border-1 border-black pt-4 pb-3 pl-2 pr-4 -ml-16 absolute rounded-sm">
              <ul className="flex flex-col text-start ml-3 [&>a]:mb-1">
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