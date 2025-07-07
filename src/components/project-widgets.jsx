// @ts-nocheck
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { MdOpenInNew } from "react-icons/md"

import '../styles/global.css'
import '../styles/index.css'

// @ts-ignore
import habtiazen_screenshot from "../assets/habitazen.png"
import kazen_hero from "../assets/kazen_hero.png"
import seasons_v_sc from "../assets/seasons_v_sc.png"


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
        <h1 className="mb-3">My Projects:</h1>
        <p className="text-center mt-4 text-[18px]">My Main Projects & Project Types: </p>
      </div>
      <p className="text-center mt-3 text-[18px]">Software Projects: </p>
      <div className="mx-auto rounded-md w-fit mt-5">
        <div style={widgetsRowStyles} className="WidgetsRow">
          <div style={projectWidgetStyles} className="ProjectWidget">
            <a href="https://tobyhogan.github.io/projects-org-landing-page/" target="_blank">
              <div className="flex flex-row w-fit mx-auto">
                <h5 className="mt-2 underline ml-3">Seasons Viewer</h5>
                <MdOpenInNew className="mt-[12px] ml-[7px]" size={18}/>
              </div>
              <img src={seasons_v_sc} className="Image1"></img>
              <p className="mt-4 mb-3">A tool that lets you see information about the current day and any day based on sun information</p>
            </a>
          </div>
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
            <a href="https://tobyhogan.github.io/habit-tracker-landing-page/" target="_blank">
              <div className="flex flex-row w-fit mx-auto">
                <h5 className="mt-2 underline ml-3">Essay Website</h5>
                <MdOpenInNew className="mt-[12px] ml-[7px]" size={18}/>
              </div>
              <img src={habtiazen_screenshot} className="Image1"></img>
              <p className="mb-3">This is a website that allows people to sign in, upload their essays, save essays of others.</p>
            </a>
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







/*





<div style={projectWidgetStyles} className="ProjectWidget">
            <p>To be added...</p>
          </div>



*/