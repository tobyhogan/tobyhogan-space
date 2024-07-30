import * as React from "react"
import { useState, useEffect, useRef } from "react"

import { VscGithub } from "react-icons/vsc";
import { AiOutlineSpotify } from "react-icons/ai";
import { MdMenu } from "react-icons/md";


function Header() {

  const [navOpen, setNavOpen] = useState(false)

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);


  
  
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
      <a href="/" className="underline hover:bg-grayNew-275">HOME</a>
      <a href="/blog" className="underline hover:bg-grayNew-275">BLOG</a>
      <a href="/patch-notes" className="underline hover:bg-grayNew-275">PATCHES</a>
      <a href="/resources" className="underline hover:bg-grayNew-275">RESOURCES</a>
      <a href="/personal" className="underline hover:bg-grayNew-275">ME</a>
      <a href="/info" className="underline hover:bg-grayNew-275">INFO</a>
    </>


  return (
      <div className="flex flex-row mx-auto w-fit mb-8">
        <a href="/" className="mt-5 ml-4 mr-4 text-center text-neutral-500 text-lg tracking-wider hover:underline">tobyhogan.space</a>
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
      </div>
    )
}

export default Header