import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import habtiazen_screenshot from "../assets/habitazen.png"

import { VscGithub } from "react-icons/vsc";
import { AiOutlineSpotify } from "react-icons/ai";


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
      <div className="flex flex-row mx-auto w-fit mb-8">
        <h1 className="mt-5 text-center text-neutral-500 text-lg tracking-wider ml-3">tobyhogan.space</h1>
        <a href="https://github.com/tobyhogan" target="_blank"><VscGithub size={30} className='mt-4 ml-3 text-grayNew-550 hover:text-grayNew-650'/></a>
      </div>
      <div className="px-8 mx-auto w-fit">
        <h6 className="text-center text-3xl font-bold mb-3">Toby: Indie Dev</h6>
        <p className="w-64 text-center text-md">Hey I'm Toby, a UK based software devleoper; making some stuff people hopefully find useful :)</p>
        <p className="text-center my-5 text-lg">Some of my projects: </p>
      </div>
      <div className="mx-auto rounded-md w-fit">
        <div style={widgetsRowStyles} className="WidgetsRow">
          <div style={projectWidgetStyles} className="ProjectWidget">
            <a href="https://kaizenprojects.co" target="_blank">
              <h1 className="">Habitazen</h1>
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
      <p className="text-center mt-12 font-bold">© tobyhogan.space 2024</p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
