import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from "../components/header"
import Footer from "../components/footer"



const InfoPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <Header />
      <div className="px-8 mx-auto w-fit">
        <h6 className="text-center text-3xl font-bold mb-3">Info</h6>
      </div>
      <Footer />
    </main>
  )
}

export default InfoPage

export const Head: HeadFC = () => <title>Info Page</title>
