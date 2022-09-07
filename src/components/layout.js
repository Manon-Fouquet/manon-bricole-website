import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import HeaderMoon from './headerMoon'
import HeaderImage from "../images/header.jpg"
import {
  container,
  heading,
  header,
  navMenu,
  topRow,
  navLinks,
  navLinkItem,
  navLinkText,
  content
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
        <div className = {topRow}>
          
          <div className = {heading}> Manon FOUQUET</div>
          
          <nav className = {navMenu}>
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
        </div>

        <div className={header} style={{backgroundImage: `url(${HeaderImage})`}}>
          <HeaderMoon/>
        </div>
        <div className={content}>
          Contenu principal
        </div>
    </div>
  )
}
export default Layout