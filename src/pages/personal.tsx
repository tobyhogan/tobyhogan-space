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
        <h1 className="text-center text-2xl font-bold mt-10 underline">Personal Page</h1>
        <h1 className="text-2xl text-center mt-6">Interests:</h1>
        <ul className="mt-6 ml-20 [&>li]:mt-3 [&>li>h2]:text-md [&>li>h2]:font-bold">
          <li>
            <h2>Music:</h2>
            <h3>- My Projects:</h3>
            <a href="https://browser-music-viewer-9s0daum6l-toby-hogans-projects.vercel.app/" target="_blank" className="ml-4">- <u>Web App: Track Stem Mixer</u></a>
            <h3>- Links:</h3>
            <a href="https://open.spotify.com/user/kjejvfmuzwmjmkdykulvb39hm/playlists" target="_blank" className="ml-4">- <u>Favourite Artist Playlists ⇒ Spotify</u></a>
          </li>

          <li><h2>Photo:</h2></li>
          <li><h2>Art:</h2></li>
          <li></li>
        </ul>

        <div className="mt-20 text-center">
          <a href="/admin-page" target="_blank" className="">⊗</a>
        </div>

      </section>

      
      
      <Footer />
    </main>
  )
}

export default MePage

export const Head: HeadFC = () => <title>Home Page</title>
