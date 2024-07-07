import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"


import Header from "../components/header"
import Footer from "../components/footer"


import '../styles/global.css'
import '../styles/index.css'




const MePage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <Header />
      <h1>Interests</h1>
      <ul>
        <li>Music</li>
          <h2>Projects:</h2>
            <ul>
              <li>Browser Music Viewer: </li>
            </ul>
        <li>Photo</li>
        <li>Art</li>
        <li></li>
      </ul>
      
      
      <Footer />
    </main>
  )
}

export default MePage

export const Head: HeadFC = () => <title>Home Page</title>
