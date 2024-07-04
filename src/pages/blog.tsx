import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import habtiazen_screenshot from "../assets/habitazen.png"



import Header from "../components/header"
import Footer from "../components/footer"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <Header />
      <div>
        <h1 className="text-center text-3xl font-bold mb-3">Blog</h1>
        <h6 className="mt-5 text-center text-xl underline">Blog Posts:</h6>
        <ul className="list-none">
          <li></li>
        </ul>
      </div>
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
