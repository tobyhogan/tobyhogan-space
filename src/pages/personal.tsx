import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"


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
            <a href="https://browser-music-viewer-9s0daum6l-toby-hogans-projects.vercel.app/" target="_blank" className="ml-4">- <u>Web App: Track Stem Mixer</u></a>
            <h5>- Links:</h5>
            <a href="https://open.spotify.com/user/kjejvfmuzwmjmkdykulvb39hm/playlists" target="_blank" className="ml-4">- <u>My Playlists of Favourite Artists ⇒ Spotify</u></a>
          </li>

          <li><h4>Photo:</h4></li>
          <li><h4>Art:</h4></li>
          <li></li>
        </ul>

        <div className="mt-20 text-center">
          <a href="/admin-page" className="">⊗</a>
        </div>

      </section>

      
      
      <Footer />
    </main>
  )
}

export default PersonalPage

export const Head: HeadFC = () => <title>Personal Page</title>
