import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width: "full",
}


const titleStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  fontSize: "20px",
  textAlign: "center",
  margin: "auto",
}

const widgetsRowStyles = {
  width: "content-max",
  display: "flex",
  justify: "space-between",

}


const projectWidgetStyles = {
  border: "2px solid black",
  borderRadius: "16px",

}



const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={titleStyles}>tobyhogan.space</h1>
      <p>Some of my projects: </p>
      <div>
        <div style={widgetsRowStyles}>
          <div style={projectWidgetStyles}>
            <p>Habitazen</p>
            <img></img>
          </div>
          <div style={projectWidgetStyles}>
            <p>test</p>
          </div>

          <div style={projectWidgetStyles}></div>
        </div>
        <div></div>
        <div></div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
