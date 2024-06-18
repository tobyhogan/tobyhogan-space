import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import habtiazen_screenshot from "../assets/habitazen.png"


const widgetsRowStyles = {
  margin: "auto",
  display: "flex",
  justifyContent: "space-between",

}

const projectWidgetStyles = {
  backgroundColor: "#f5f5f5",
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
    <main className="px-64">
      <h1 className="mt-5 mb-8 text-center italic text-xl">tobyhogan.space</h1>
      <div className="px-8 mx-auto w-fit">
        <h6 className="text-center text-3xl font-bold mb-3">Indie Dev: Toby</h6>
        <p className="w-64 text-center text-md">Hey I'm Toby, a UK based software devleoper; making some stuff people hopefully find useful :)</p>
        <p className="text-center my-5 text-lg">Some of my projects: </p>
      </div>
      <div className="mx-auto flex rounded-md w-fit">
        <div style={widgetsRowStyles}>
          <div style={projectWidgetStyles} className="ProjectWidget">
            <a href="https://kaizenprojects.co" target="_blank">
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
      <p className="text-center mt-12 font-bold">tobyhogan.space © 2024</p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
