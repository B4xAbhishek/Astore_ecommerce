import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To Tickly-Tots',
  description: 'A Kids Clothing online store',
  keywords: 'Tickly tots, Tickly tots website,Tickly tots kids clothing',
}

export default Meta
