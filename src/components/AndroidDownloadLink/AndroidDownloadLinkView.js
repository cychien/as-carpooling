import React from 'react'
import GooglePlayIcon from '../../assets/icons/GooglePlayIcon'

function AndroidDownloadLinkView() {
  return (
    <a
      href="http://"
      target="_blank"
      className="inline-block bg-black text-white rounded py-0 px-2"
    >
      <div className="flex items-center">
        <GooglePlayIcon />
        <div
          className="flex flex-col justify-center h-full relative pr-2"
          style={{ top: '-2px' }}
        >
          <div className="text-xs whitespace-no-wrap">Dwnload on the</div>
          <div className="leading-4 font-semibold tracking-wider text-lg whitespace-no-wrap">
            App Store
          </div>
        </div>
      </div>
    </a>
  )
}

export default AndroidDownloadLinkView
