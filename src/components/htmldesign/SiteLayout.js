import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"


//import "./layout.css"


const SiteLayout = ({ children }) => {
  /*const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author {
		name
	 }
        }
      }
    }
  `)*/

  return (
    <>
      <Header /*siteTitle={data.site.siteMetadata.title}*/ />
      {children}
      <Footer />
    </>
  )
}

/*SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}*/

export default SiteLayout
