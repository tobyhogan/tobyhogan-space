import * as React from "react"
import { graphql } from "gatsby"

import '../../styles/global.css'
import '../../styles/index.css'

import Footer from '../../components/footer'


export default function BlogPostTemplate({
  data, /* this prop will be injected by the GraphQL query below. */}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="mt-6">
      <a href="/blog" className="ml-[3vw] -mt-8 rounded-md px-4 py-1 bg-grayNew-300 md:fixed sm:static border-2 border-grayNew-700 font-semibold">Back</a>
      <h1 className="text-2xl md:mt-16 sm:mt-4 text-center">{frontmatter.title}</h1>
      <h4 className="font-bold text-center mt-3">{frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{ __html: html }} className="md:px-[30vw] sm:px-[12vw] mt-12 text-[17px] [&>h2]:text-xl [&>h2]:underline [&>h2]:-ml-3 whitespace-break-spaces"/>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "DD MMM YYYY")
        slug
        title
      }
    }
  }
`