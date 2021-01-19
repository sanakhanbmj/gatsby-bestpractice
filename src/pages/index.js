import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css'
import SlickDemo from '../components/SlickDemo'  
import { FaBook } from "@react-icons/all-files/fa/FaBook";





class HomeTemplate extends Component {
    render() {
        const data = this.props.data
       
      const sidebartitle = data.allWordpressPage.edges[0].node.acf.sidebar_cta_title
        const cont= data.allWordpressPage.edges[0].node.content
        const acft = data.allWordpressPage.edges[0].node.acf
  const linksidebar=acft.sidebar_cta_link
  const whitetext=acft.box_1_text
  const whiteback=acft.box_1_colour
  const blueback=acft.box_2_colour
  const box3links= acft.box_3_links

        return(
          <Layout>
          
          
       <div className="home-slider">
           <SlickDemo/>
           </div>
            <div className="clear container page-home-container">
           

            <div className="row">
  <div  className="col-md-8 col-sm-12 content-area type" >
  <p dangerouslySetInnerHTML={{ __html: cont }} />
    
  </div>
  <div className="col-sm-12 col-md-4 sidebar-area">
   
    <div className="sidebar-cta">
      <a href={linksidebar} >
        <h2>{sidebartitle}</h2>
        <p>{acft.sidebar_cta_text}</p>
      </a>
    </div>
  </div>
</div>
</div>

<div className="light-blue-bkg pad-top-30 pad-bottom-30">
  <div className="clear container homepage-boxes">
  <div className="row">
    <div className="col-sm-12 col-md-4 box-1">
      <div className="box-white" style={{backgroundColor: whiteback}}>
        <p dangerouslySetInnerHTML={{ __html: whitetext }} />
          
          
        <a href={acft.box_1_button_url} className="button" target="_blank">{acft.box_1_button_text}</a>
      </div>
    </div>
    <div className="col-sm-12 col-md-4 box-2">
      <div className="box-blue">
        <p dangerouslySetInnerHTML={{ __html: acft.box_2_text}}/>
          <a href={acft.box_2_button_url} className="button" target="_blank">{acft.box_2_button_text}</a>
        </div>
      </div>
      <div className="col-sm-12 col-md-4 box-3">
        <h3>{acft.box_3_title}</h3>
        <ul className="whats-new">
                       {/*box3links.map((item) =>
                        <li key={item.object_slug}>
                             <FaBook /> {item.title}<a href="https://stg-bestpractice.bmj.com/info/evidence-on-demand-health-education-england-brings-bmj-best-practice-to-the-bedside/" >
                                
                            </a>
                        </li>
                         )*/}
          
           
            
            <li>
            <a href={box3links[0]}>
              <FaBook /> Evidence on demand: Health Education England brings BMJ Best Practice to the bedside
            </a>
          </li>
          <li>
            <a href={box3links[1]}>
              <FaBook /> BMJ Best Practice and BMJ Learning available to all NHS staff in Wales
            </a>
          </li>
          <li>
           <a href={box3links[2]}>
              <FaBook /> BMJ Best Practice patient leaflets awarded The Information Standard
            </a>
          </li>
          <li>
            <a href={box3links[3]}>
              <FaBook /> BMJ Best Practice website and app wins Silver in W3 Awards
            </a>
            
           
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
                
         


            </Layout>
        )
    }
}
HomeTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default HomeTemplate

export const pageQuery = graphql`

    query homeQuery {
  allWordpressPage(filter: {title: {eq: "Home"}}) {
    edges {
      node {
        id
        title
        content
        acf {
          
          sidebar_navigation_title
          choose_pages
          show_sidebar_cta
          show_sidebar_quote
          show_bottom_boxes
          show_sub_box
          show_annual_tab
          annual_subscription_1_title
          annual_subscription_1_price
          annual_subscription_1_original_price
          annual_subscription_1_link
          annual_subscription_2_title
          annual_subscription_2_price
          annual_subscription_2_original_price
          annual_subscription_2_link
          annual_subscription_3_title
          annual_subscription_3_price
          annual_subscription_3_original_price
          annual_subscription_3_link
          annual_subscription_4_title
          annual_subscription_4_price
          annual_subscription_4_original_price
          annual_subscription_4_link
          annual_bottom
          show_monthly_tab
          monthly_subscription_title
          monthly_subscription_price
          monthly_subscription_original_price
          monthly_subscription_link
          monthly_bottom
          
          sidebar_cta_colour
          sidebar_cta_link
          sidebar_cta_title
          sidebar_cta_text
          sidebar_quote_text
          sidebar_quote_source
          
          
          box_1_colour
          box_1_image_or_text
          box_1_text
          box_1_button_text
          box_1_text_top
          box_1_button_url
          box_2_colour
          box_2_image_or_text
          box_2_text_top
          box_2_text
          box_2_button_url
          box_2_button_text
          box_3_title
          box_3_links
          show_access_button
          box_1_button_url_new_tab
          box_2_button_url_new_tab
        }
      }
    }
  }
}

  `

