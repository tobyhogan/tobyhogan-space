import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { graphql } from "gatsby"

import PostLink from '../components/post-links/blog-link.jsx'
import '../styles/global.css'
import '../styles/index.css'

import Header from "../components/header"
import Footer from "../components/footer"



const BlogPage: React.FC<PageProps> = ({data: {allMarkdownRemark: { edges }, },}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node}/>)


  return (
    <main className="">
      <Header />
      <div>
        <h1 className="mb-3">Development Blog</h1>
        <h3 className="mt-5">Posts:</h3>
        <div className="mx-auto w-fit mt-5 pl-10">
          {Posts}
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC }}, filter: {fileAbsolutePath: {regex: "/(blog)/"  }}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD/MMM/YYYY")
            slug
            title
          }
        }
      }
    }
  }
`


export const Head: HeadFC = () => <title>Blog Page</title>
