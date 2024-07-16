import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { graphql } from "gatsby"

import PostLink from '../components/post-links/blog-link.jsx'
import '../styles/global.css'
import '../styles/index.css'

import Header from "../components/header"
import Footer from "../components/footer"



const BlogPage: React.FC<PageProps> = () => {


  return (
    <main className="">
      <Header />
      <div>
        <h1 className="mb-3">Resources</h1>
        <h4 className="mt-5 text-center">Founders Exchange KZ:</h4>
        <p className="mt-3 text-center"><a href="https://discord.gg/bQuEmWJ5dn"><u>Discord Invite Link</u></a> / (bQuEmWJ5dn)</p>
      </div>
      <Footer />
    </main>
  )
}

export default BlogPage



export const Head: HeadFC = () => <title>Blog Page</title>
