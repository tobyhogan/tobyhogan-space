import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { MdContentCopy } from "react-icons/md";

import Header from "../../components/header"
import Footer from "../../components/footer"



import '../../styles/global.css'
import '../../styles/index.css'

// @ts-ignore
import moss_bricks_1 from "../../assets/photography/moss-bricks-1.jpg"



const PhotographyPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <Header />
      <div className="mx-auto w-fit flex flex-col">
        <h1 className="text-center text-3xl font-bold mb-3">Photography: </h1>
        <div className="mt-8 flex flex-col">
          <div className="flex flex-row">
            <img src={moss_bricks_1} alt="" className="Image2 w-[450px]"/>
            <img src={moss_bricks_1} alt="" className="Image2 w-[450px]"/>
            <img src={moss_bricks_1} alt="" className="Image2 w-[450px]"/>
          </div>
          <div className="flex flex-row">
            <img src={moss_bricks_1} alt="" className="Image2 w-[450px]"/>
            <img src={moss_bricks_1} alt="" className="Image2 w-[450px]"/>
            <img src={moss_bricks_1} alt="" className="Image2 w-[450px]"/>
          </div>
          <div className="flex flex-row">
            <img src={moss_bricks_1} alt="" className="Image2 w-[450px]"/>
            <img src={moss_bricks_1} alt="" className="Image2 w-[450px]"/>
            <img src={moss_bricks_1} alt="" className="Image2 w-[450px]"/>
          </div>
        </div>
    
      </div>
      <Footer />
    </main>
  )
}

export default PhotographyPage

export const Head: HeadFC = () => <title>Photography</title>
