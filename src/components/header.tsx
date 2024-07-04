import * as React from "react"

import { VscGithub } from "react-icons/vsc";
import { AiOutlineSpotify } from "react-icons/ai";



function Header() {
  return (
      <div className="flex flex-row mx-auto w-fit mb-8">
        <h1 className="mt-5 text-center text-neutral-500 text-lg tracking-wider ml-3">tobyhogan.space</h1>
        <li className="my-auto pt-5 [&>*]:ml-5 text-md underline tracking-wide list-none">
          <a href="/">HOME</a>
          <a href="/blog">BLOG</a>
        </li>
        <a href="https://github.com/tobyhogan" target="_blank"><VscGithub size={30} className='mt-4 ml-6 text-grayNew-550 hover:text-grayNew-650'/></a>
      </div>
    )
}

export default Header