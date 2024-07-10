import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"


import Header from "../components/header"
import Footer from "../components/footer"


import '../styles/global.css'
import '../styles/index.css'




const MePage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <Header />
      <section className="w-fit mx-auto">
        <h1 className="text-2xl text-center mt-10">Interests</h1>
        <ul className="mt-8 ml-8">
          <li>
            <h2 className="text-lg">Music</h2>
            <h3>- My Projects:</h3>
            <a href="https://browser-music-viewer-9s0daum6l-toby-hogans-projects.vercel.app/" target="_blank" className="ml-4">- <u>Web App: Track Stem Mixer</u></a>
            <h3>- Links:</h3>
            <a href="https://open.spotify.com/user/kjejvfmuzwmjmkdykulvb39hm/playlists" target="_blank" className="ml-4">- <u>Favourite Artists ⇒ Spotify</u></a>
          </li>

          <li>Photo</li>
          <li>Art</li>
          <li></li>
        </ul>

        <a href="/admin-page">test</a>
      </section>

      
      
      <Footer />
    </main>
  )
}

export default MePage

export const Head: HeadFC = () => <title>Home Page</title>
