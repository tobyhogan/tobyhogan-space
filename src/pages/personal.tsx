import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"

import { OutboundLink } from "gatsby-plugin-google-gtag"

import Header from "../components/header"
import Footer from "../components/footer"

import '../styles/global.css'
import '../styles/index.css'




const PersonalPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <Header />
      <section className="w-fit mx-auto">
        <h1 className="mt-10">Personal Page</h1>
        <h2 className="mt-6">Interests:</h2>
        <ul className="mt-6 ml-20 [&>li]:mt-3 [&>li>h5]:mt-2">
          <li>
            <h4>Music:</h4>
            <h5>- My Projects:</h5>
            <a href="https://browser-music-viewer.vercel.app/" target="_blank" className="Link1 ml-4">-&nbsp;<u>Web App: Track Stem Mixer</u></a>
            <h5>- Links:</h5>
            <a href="https://open.spotify.com/user/kjejvfmuzwmjmkdykulvb39hm/playlists" target="_blank" className="Link1 ml-4">-&nbsp;<u>My Playlists of Favourite Artists ⇒ Spotify</u></a>
            <OutboundLink href="https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/">
              Visit the Google Global Site Tag plugin page!
            </OutboundLink>
          </li>

          <li>
            <h4>Language:</h4>
            <h5>- Links:</h5>
            <a href="https://www.duolingo.com/profile/tobyhogann" target="_blank" className="Link1 ml-4">-&nbsp;<u>Duolingo: @tobyhogann</u></a>
          </li>
          <li>
            <h4>Photo:</h4>
            <Link to="/personal/photography" className="Link1 ml-4">-&nbsp;<u>My Photography Gallery</u></Link>

          </li>
          <li><h4>Art:</h4></li>
          <li></li>
        </ul>
      </section>
      <Footer />
    </main>
  )
}

export default PersonalPage

export const Head: HeadFC = () => <title>Personal Page</title>
