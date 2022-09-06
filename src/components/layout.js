import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import HeaderMoon from './headerMoon'
import {
  container,
  header,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from './layout.module.scss'
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
  return (

      
    <div className={container}>
      
        <div className={header}>
          <StaticImage picture="../images/header.JPG"></StaticImage>
            <nav>
              <ul className={navLinks}>
                <li className={navLinkItem}>
                  <Link to="/" className={navLinkText}>
                    Home
                  </Link>
                </li>
                <li className={navLinkItem}>
                  <Link to="/about" className={navLinkText}>
                    About
                  </Link>
                </li>
              </ul>
          </nav>
          <HeaderMoon picture = "../images/gatsby-icon.png"/>
        </div>
        <title>{data.site.siteMetadata.title}</title>
       
        <main>  
          <h1 className={heading}>{pageTitle}</h1>
          {children}
      </main>
    </div>
  )
}
export default Layout