/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Link from "gatsby-link"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import SlickDemo from '../components/SlickDemo'   
import { FaBook } from "@react-icons/all-files/fa/FaBook";

const Layout = ({ children }) => {
 
  

  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          
          
        }}
      >
        <main 
        style={{
          margin: `0 auto`,
        
          
        }}
        

        >
       
        
        
           {children}

        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


