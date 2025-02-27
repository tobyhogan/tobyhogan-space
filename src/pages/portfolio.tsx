import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"

import { OutboundLink } from "gatsby-plugin-google-gtag"

import Header from "../components/header"
import Footer from "../components/footer"

import '../styles/global.css'
import '../styles/index.css'




const TemplatePage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <Header />
      <section className="w-fit mx-auto">
        <h1 className="mt-10">Portfolio</h1>
        <h2 className="mt-6">Subtitle:</h2>
        <ul className="mt-6 ml-20 [&>li]:mt-3 [&>li>h5]:mt-2">
          <li>
            <h4>Item:</h4>
            <h5>- My Projects:</h5>
            <a href="https://browser-music-viewer.vercel.app/" target="_blank" className="Link1 ml-4">-&nbsp;<u>Web App: Track Stem Mixer</u></a>
            <h5>- Links:</h5>
            <a href="https://open.spotify.com/user/kjejvfmuzwmjmkdykulvb39hm/playlists" target="_blank" className="Link1 ml-4">-&nbsp;<u>My Playlists of Favourite Artists ⇒ Spotify</u></a>
          </li>

          <li>
            <h4>Item2:</h4>
            <h5>- Links:</h5>
            <a href="https://www.duolingo.com/profile/tobyhogann" target="_blank" className="Link1 ml-4">-&nbsp;<u>Duolingo: @tobyhogann</u></a>
          </li>
          <li>
            <h4>Item3:</h4>
            <Link to="/personal/photography" className="Link1 ml-4">-&nbsp;<u>My Photography Gallery</u></Link>

          </li>

        </ul>
        <OutboundLink href="https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/" className="ml-32">
          -- test --
        </OutboundLink>
      </section>
      <Footer />
    </main>
  )
}

export default TemplatePage

export const Head: HeadFC = () => <title>Template Page</title>
