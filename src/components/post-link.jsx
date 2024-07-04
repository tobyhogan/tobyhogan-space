import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.slug} className="flex">•<p className="underline ml-2 mr-1">{post.frontmatter.title}</p>(@ {post.frontmatter.date})</Link>
  </div>
)

export default PostLink