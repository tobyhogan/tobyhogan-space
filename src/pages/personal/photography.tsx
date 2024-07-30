//@ts-nocheck
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { MdContentCopy } from "react-icons/md";

import Header from "../../components/header"
import Footer from "../../components/footer"



import '../../styles/global.css'
import '../../styles/index.css'


import dsc_1870 from "../../assets/photography/DSC_1870.jpg"
import dsc_1895 from "../../assets/photography/DSC_1895.jpg"
import dsc_1897 from "../../assets/photography/DSC_1897.jpg"
import dsc_1901 from "../../assets/photography/DSC_1901.jpg"
import dsc_1925 from "../../assets/photography/DSC_1925.jpg"
import dsc_1931 from "../../assets/photography/DSC_1931.jpg"
import dsc_1932 from "../../assets/photography/DSC_1932.jpg"
import dsc_1952 from "../../assets/photography/DSC_1952.jpg"
import dsc_2040 from "../../assets/photography/DSC_2040.jpg"



const PhotographyPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <Header />
      <div className="mx-auto w-fit flex flex-col">
        <h1 className="text-center text-3xl font-bold mb-3">Photography: </h1>
        <h2 className="mt-4">Forest:</h2>

        <div className="mx-auto">
          <div className="Column1 mt-4">
            <div className="Row1">
              <img src={dsc_1870} alt="" className="Image2 w-[450px]"/>
              <img src={dsc_1895} alt="" className="Image2 w-[450px]"/>
              <img src={dsc_1897} alt="" className="Image2 w-[450px]"/>
            </div>
            <div className="Row1">
              <img src={dsc_1901} alt="" className="Image2 w-[450px]"/>
              <img src={dsc_1925} alt="" className="Image2 w-[450px]"/>
              <img src={dsc_1931} alt="" className="Image2 w-[450px]"/>
            </div>
            <div className="Row1">
              <img src={dsc_1932} alt="" className="Image2 w-[450px]"/>
              <img src={dsc_1952} alt="" className="Image2 w-[450px]"/>
              <img src={dsc_2040} alt="" className="Image2 w-[450px]"/>
            </div>
          </div>
        </div>
    
      </div>
      <Footer />
    </main>
  )
}

export default PhotographyPage

export const Head: HeadFC = () => <title>Photography</title>
