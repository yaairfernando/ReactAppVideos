import React from 'react'

import icons from '../../assets/sprite.svg'

const Icon = ({ name }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={`icon icon-${name}`}
    >
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  )
}

export default Icon