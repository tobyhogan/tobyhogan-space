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
  border: "2px solid black",
  borderRadius: "16px",
  width: "28%",
  margin: "1%",
  textAlign: "center",
  display: "flex",
  flexDirection: "col",

}



const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="px-64">
      <h1 className="mt-5 mb-8 text-center italic">tobyhogan.space</h1>
      <div className="px-8 mx-auto w-fit">
        <p className="w-64 text-center">Hey I'm Toby, a UK based indie dev; hopefully making some stuff people find useful.</p>
        <p className="text-center my-5">Some of my projects: </p>
      </div>
      <div className="mx-auto flex border-2 border-black rounded-lg w-fit">
        <div style={widgetsRowStyles}>
          <div style={projectWidgetStyles}>
            <p>Habitazen</p>
            <img src={habtiazen_screenshot}></img>
          </div>
          <div style={projectWidgetStyles}>
            <p>test</p>
          </div>
          <div style={projectWidgetStyles}><p></p></div>
        </div>
        <div></div>
        <div></div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
