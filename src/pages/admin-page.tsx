import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'


import Header from "../components/header"
import Footer from "../components/footer"





const AdminPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <Header />
      <div className="px-8 mx-auto w-fit">
        <h1 className="mb-3">Admin Page</h1>
        <h3 className="text-xl">Links:</h3>
        <ul className="w-fit mx-auto mt-2">
          <li><a href="https://tobyhogan.github.io/metrics-dashboard/" target="_blank">- <u>Project Metrics</u></a></li>
        </ul>
      </div>
      <Footer />
    </main>
  )
}

export default AdminPage

export const Head: HeadFC = () => <title>Admin Page</title>
