import React from 'react'
import { Helmet } from 'react-helmet-async'


const DocumentTitle = () => {
  return (
    <Helmet>
      <title>
        { `${ location.pathname } | vrdel play` }
      </title>
    </Helmet>
  )
}

export default DocumentTitle
