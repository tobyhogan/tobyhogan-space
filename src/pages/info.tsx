import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { MdContentCopy } from "react-icons/md";

import Header from "../components/header"
import Footer from "../components/footer"


import { ClipboardButton } from '../components/components'


import '../styles/global.css'
import '../styles/index.css'



const InfoPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <Header />
      <div className="mx-auto w-fit flex flex-col">
        <h1 className="text-center text-3xl font-bold mb-3">Information</h1>
        <h3 className="text-center mt-4">Contact & Profiles:</h3>
        <div className="InfoLinks ml-10 mt-2 text-start flex flex-col">
          <p className="mt-4 flex flex-row">-&nbsp;<b>Email:</b>&nbsp;tobyhogan44@gmail.com<ClipboardButton text={"tobyhogan44@gmail.com"} /></p>

          <p className="flex flex-row">-&nbsp;<b>Discord:&nbsp;</b>@tobyh_dev<ClipboardButton text={"tobyh_dev"} /></p> 


          <p className="LContainer1">-&nbsp;<b>IndieHackers:&nbsp;</b><a href="https://www.indiehackers.com/Dev_TobyH" target="_blank" className="Link1">@<u>Dev_TobyH</u></a></p>
          

          <p className="LContainer1">-&nbsp;<b>GitHub:&nbsp;</b><a href="https://github.com/tobyhogan" target="_blank" className="Link1">@<u>tobyhogan</u></a></p>
          <p className="LContainer1">-&nbsp;<b>Mastodon:&nbsp;</b><a href="https://mastodon.social/@tobyhogan" target="_blank" className="Link1">@<u>tobyhogan</u></a></p>
          <p className="LContainer1">-<b>&nbsp;Stack&nbsp;Overflow:&thinsp;</b><a href="https://stackoverflow.com/users/14429974/toby-hogan" target="_blank" className="Link1"><u>user:14429974</u></a></p>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default InfoPage

export const Head: HeadFC = () => <title>Info Page</title>
