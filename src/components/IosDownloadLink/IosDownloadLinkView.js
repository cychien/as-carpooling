import React from 'react'
import AppleIcon from '../../assets/icons/AppleIcon'
import cx from 'classnames'

function IosDownloadLinkView({ styles }) {
  return (
    <a
      href="http://"
      target="_blank"
      className={cx(
        'inline-block bg-black text-white rounded py-1 px-2',
        styles
      )}
    >
      <div className="flex items-center">
        <AppleIcon />
        <div
          className="flex flex-col justify-center h-full relative pr-1"
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

export default IosDownloadLinkView
