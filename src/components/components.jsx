import * as React from "react"
import { useState } from "react";


import { MdContentCopy } from "react-icons/md";





export const ClipboardButton = ({text}) => {

  const [successShown, setSuccessShown] = useState(false)



  function handleCopyClick() {

    navigator.clipboard.writeText(text)

    setSuccessShown(true)

  }


  return (
    <>

      {false &&
        <div className="relative bg-white bottom-5">
          Success!
        </div>}
      
      <button
        onClick={handleCopyClick}
        className="flex flex-row ml-1 mt-1 hover:bg-black hover:bg-opacity-10 rounded-md pl-2 pr-3">
      
        <MdContentCopy />
      </button>
    


    </>
  )
}
