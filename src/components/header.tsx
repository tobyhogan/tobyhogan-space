import * as React from "react"

import { VscGithub } from "react-icons/vsc";
import { AiOutlineSpotify } from "react-icons/ai";



function Header() {
  return (
      <div className="flex flex-row mx-auto w-fit mb-8">
        <a href="/" className="mt-5 text-center text-neutral-500 text-lg tracking-wider ml-3 hover:underline">tobyhogan.space</a>
        <ul className="my-auto pt-5 [&>a]:ml-5 text-md tracking-wide list-none">
          <a href="/" className="underline hover:bg-grayNew-275">HOME</a>
          <a href="/blog" className="underline hover:bg-grayNew-275">BLOG</a>
          <a href="/patch-notes" className="underline hover:bg-grayNew-275">PATCHES</a>
          <a href="/resources" className="underline hover:bg-grayNew-275">RESOURCES</a>
          <a href="/personal" className="underline hover:bg-grayNew-275">ME</a>
          <a href="/info" className="underline hover:bg-grayNew-275">INFO</a>
        </ul>
      </div>
    )
}

export default Header