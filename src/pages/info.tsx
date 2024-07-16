import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from "../components/header"
import Footer from "../components/footer"



const InfoPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <Header />
      <div className="px-8 mx-auto w-fit">
        <h1 className="text-center text-3xl font-bold mb-3">Information</h1>
        <h3 className="text-center mt-4">Contact:</h3>
        <div className="ml-8 text-start flex flex-col">
          <a href="mailto:tobyhogan44@gmail.com" className="mt-4">- Email: <u>tobyhogan44@gmail.com</u></a>
          <a href="https://github.com/tobyhogan">- GitHub: @<u>tobyhogan</u></a>
          <p>- Discord: @dev_tobyh</p>
          <a href="https://www.indiehackers.com/Dev_TobyH">- IndieHackers: @<u>Dev_TobyH</u></a>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default InfoPage

export const Head: HeadFC = () => <title>Info Page</title>
