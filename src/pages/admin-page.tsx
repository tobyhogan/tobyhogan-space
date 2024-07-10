import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'


import Header from "../components/header"
import Footer from "../components/footer"





const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <Header />
      <div className="px-8 mx-auto w-fit">
        <h1 className="text-center text-3xl font-bold mb-3">Admin Page</h1>
        <h2 className="text-center text-xl">Links:</h2>
        <ul className="w-fit mx-auto mt-2">
          <li><a href="https://tobyhogan.github.io/metrics-dashboard/">- <u>Metrics Tracker</u></a></li>
        </ul>
      </div>
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
