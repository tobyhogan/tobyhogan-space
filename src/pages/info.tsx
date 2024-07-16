import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { MdContentCopy } from "react-icons/md";

import Header from "../components/header"
import Footer from "../components/footer"

import '../styles/global.css'
import '../styles/index.css'



const InfoPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <Header />
      <div className="px-8 mx-auto w-fit">
        <h1 className="text-center text-3xl font-bold mb-3">Information</h1>
        <h3 className="text-center mt-4">Contact:</h3>
        <div className="ml-8 text-start flex flex-col">
          <p className="mt-4">- Email: tobyhogan44@gmail.com; <a href="mailto:tobyhogan44@gmail.com"><u>Link</u></a></p>
          <p>- Discord: @dev_tobyh</p>
          <a href="https://www.indiehackers.com/Dev_TobyH" target="_blank">- IndieHackers: @<u>Dev_TobyH</u></a>
          <a href="https://github.com/tobyhogan" target="_blank">- GitHub: @<u>tobyhogan</u></a>
          <a href="https://stackoverflow.com/users/14429974/toby-hogan" target="_blank">- Stack Overflow: <u>Toby Hogan; user:14429974</u></a>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default InfoPage

export const Head: HeadFC = () => <title>Info Page</title>
