import React from 'react'
import { Link } from 'react-router-dom'


const Image = ({href, src, alt, className}) => {
    
  return (
      <>
          <a to={href}>
             <picture>
                 <img src={src} alt={alt} className={ ` inline-block w-full ${className} ` }/>
                </picture>
        </a>
      </>

  )
}

export default Image
