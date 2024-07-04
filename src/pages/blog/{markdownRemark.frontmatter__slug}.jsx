import * as React from "react"
import { graphql } from "gatsby"


export default function BlogPostTemplate({
  data, /* this prop will be injected by the GraphQL query below. */}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="mt-6">
      <a href="/" className="ml-12 border-2 rounded-md border-black px-3 py-0.5 bg-grayNew-300">Back</a>
      <h1 className="text-2xl mt-6 text-center">{frontmatter.title}</h1>
      <h2 className="font-bold text-center mt-3">{frontmatter.date}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} className="px-[35rem] mt-12 mb-20 text-[17px] [&>h2]:text-xl [&>h2]:underline [&>h2]:-ml-3 whitespace-break-spaces"/>
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