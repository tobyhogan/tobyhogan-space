import * as React from "react"

import { VscGithub } from "react-icons/vsc";
import { AiOutlineSpotify } from "react-icons/ai";



function Header() {
  return (
      <div className="flex flex-row mx-auto w-fit mb-8">
        <a href="/" className="mt-5 text-center text-neutral-500 text-lg tracking-wider ml-3 hover:underline">tobyhogan.space</a>
        <ul className="my-auto pt-5 [&>a]:ml-5 [&>a:hover]-bg-blue-700 text-md underline tracking-wide list-none">
          <a href="/">HOME</a>
          <a href="/blog">BLOG</a>
          <a href="/patch-notes">PATCH NOTES</a>
        </ul>
        <a href="https://github.com/tobyhogan" target="_blank"><VscGithub size={30} className='mt-4 ml-6 text-grayNew-550 hover:text-grayNew-650'/></a>
      </div>
    )
}

export default Header