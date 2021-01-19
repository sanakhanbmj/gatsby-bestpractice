import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Dog from "../images/gatsby-astronaut.png"
import Logo from "../images/BP-Logo-colour.svg"
import "./header.css"

const width_proportion = '30%';
const height_proportion = '70%';
const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
    allWordpressWpApiMenusMenusItems{
            edges{
                node{
                    id
                    name
                    items{
                        title
                        url
                        object_slug
                          wordpress_children {
            object_slug
            title
          }
                    }
                }
            }
        }
      }
  `)
   const items = data.allWordpressWpApiMenusMenusItems.edges[2].node.items
   const second = data.allWordpressWpApiMenusMenusItems.edges[3].node.items
  return (
    <>
  
  <header className="pad-top-20 pad-bottom-15">

  <div className="clear container header-container">
  <div className="row">
    <div className="col-md-3 logo-container text-left">
     
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >

          <img src={Logo} />
        </Link>
      
    </div>
     <div className="col-md-9 text-right">
     <nav className="secondary-navigation text-right" role="navigation">
                      
            <div className="menu-secondary-menu-container">
            <ul  className="menu menu-secondary-menu-1">
             {second.map((sec) =>
                        <li key={sec.object_slug} className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                            <Link to={'http://localhost:8000/'+sec.object_slug}>
                                {sec.title}
                            </Link>
                          
                        </li>
                        
                    )}
            
            </ul></div>           <Link className="button button-access" to="https://stg-bestpractice.bmj.com/login">Log In</Link>
          </nav>
          
                <nav className="primary-navigation pad-top-35 text-right" role="navigation">
                <ul className="navigation-menu">
                    {items.map((item) =>
                        <li key={item.object_slug} className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                            <Link to={'http://localhost:8000/'+item.object_slug}>
                                {item.title}
                            </Link>
                            <ul className="sub-menu">
                            {item.wordpress_children && item.wordpress_children.map((subitem) =>
                                <li key={item.wordpress_id} className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <Link to={'http://localhost:8000/'+subitem.object_slug}>
                                        {subitem.title}
                                    </Link>
                                </li>
                            )}
                        </ul>
                        </li>
                        
                    )}
                   
                </ul>
                </nav>
            </div>

               </div>
            </div>
  </header>
  </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
