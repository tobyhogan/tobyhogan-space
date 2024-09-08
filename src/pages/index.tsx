// @ts-nocheck
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { MdOpenInNew } from "react-icons/md"

import '../styles/global.css'
import '../styles/index.css'

// @ts-ignore
import habtiazen_screenshot from "../assets/habitazen.png"
import kazen_hero from "../assets/kazen_hero.png"


import Header from "../components/header"
import Footer from "../components/footer"


const widgetsRowStyles = {
  margin: "auto",
  justifyContent: "space-between",

}

const projectWidgetStyles = {
  backgroundColor: "#f1e9e9",
  border: "2px solid gray",
  borderRadius: "8px",
  width: "28%",
  margin: "1%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",


}


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <Header />
      <div className="px-8 mx-auto w-fit">
        <h1 className="mb-3">Toby: Developer</h1>
        <p className="w-64 text-center text-md">Hey I'm Toby, a UK based software developer; making some stuff people hopefully find useful :)</p>
        <p className="text-center mt-6 text-[17px]">My Main Projects: </p>
      </div>
      <div className="mx-auto rounded-md w-fit mt-5">
        <div style={widgetsRowStyles} className="WidgetsRow">
          <div style={projectWidgetStyles} className="ProjectWidget">
            <a href="https://tobyhogan.github.io/habit-tracker-landing-page/" target="_blank">
              <div className="flex flex-row w-fit mx-auto">
                <h5 className="mt-2 underline ml-3">Habitazen</h5>
                <MdOpenInNew className="mt-[12px] ml-[7px]" size={18}/>
              </div>
              <img src={habtiazen_screenshot} className="Image1"></img>
              <p className="mb-3">A flexible habit tracker, with advanced features.</p>
            </a>
          </div>
          <div style={projectWidgetStyles} className="ProjectWidget">
            <a href="https://tobyhogan.github.io/projects-org-landing-page/" target="_blank">
              <div className="flex flex-row w-fit mx-auto">
                <h5 className="mt-2 underline ml-3">Kazen Projects</h5>
                <MdOpenInNew className="mt-[12px] ml-[7px]" size={18}/>
              </div>
              <img src={kazen_hero} className="Image1"></img>
              <p className="mb-3">A Group of Projects Including: Software, Consulting and Open Source</p>
            </a>
          </div>
          <div style={projectWidgetStyles} className="ProjectWidget">
            <p>To be added...</p>
          </div>

        </div>
        <div></div>
        <div></div>
      </div>
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
