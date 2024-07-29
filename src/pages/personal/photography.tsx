import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { MdContentCopy } from "react-icons/md";

import Header from "../../components/header"
import Footer from "../../components/footer"



import '../styles/global.css'
import '../styles/index.css'



const PhotographyPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <Header />
      <div className="mx-auto w-fit flex flex-col">
        <h1 className="text-center text-3xl font-bold mb-3">Photography:</h1>
        <div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
    
      </div>
      <Footer />
    </main>
  )
}

export default PhotographyPage

export const Head: HeadFC = () => <title>Photography</title>
