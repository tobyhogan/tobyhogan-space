import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import habtiazen_screenshot from "../assets/habitazen.png"



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
        <h1 className="mb-3">Toby: Indie Dev</h1>
        <p className="w-64 text-center text-md">Hey I'm Toby, a UK based software developer; making some stuff people hopefully find useful :)</p>
        <p className="text-center my-5 text-lg">Some of my projects: </p>
      </div>
      <div className="mx-auto rounded-md w-fit">
        <div style={widgetsRowStyles} className="WidgetsRow">
          <div style={projectWidgetStyles} className="ProjectWidget">
            <a href="https://tobyhogan.github.io/habit-tracker-landing-page/" target="_blank">
              <h6 className="">Habitazen</h6>
              <img src={habtiazen_screenshot}></img>
              <p className="mb-3">A flexible habit tracker.</p>
            </a>
          </div>
          <div style={projectWidgetStyles} className="ProjectWidget">
            <p>To be added...</p>
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
