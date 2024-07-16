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
        <h3 className="text-center mt-4">Contact & Profiles:</h3>
        <div className="ml-10 mt-2 text-start flex flex-col">
          <p className="mt-4">- <b>Email:</b> tobyhogan44@gmail.com</p>
          <p>- <b>Discord: </b>@dev_tobyh</p>
          <a href="https://www.indiehackers.com/Dev_TobyH" target="_blank">- <b>IndieHackers:</b> @<u>Dev_TobyH</u></a>
          <a href="https://github.com/tobyhogan" target="_blank">- <b>GitHub:</b> @<u>tobyhogan</u></a>
          <a href="https://stackoverflow.com/users/14429974/toby-hogan" target="_blank">- <b>Stack Overflow: </b><u>Toby Hogan; user:14429974</u></a>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default InfoPage

export const Head: HeadFC = () => <title>Info Page</title>
