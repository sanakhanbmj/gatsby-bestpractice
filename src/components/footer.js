import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Dog from "../images/gatsby-astronaut.png"
import Logo from "../images/BP-Logo-colour.svg"
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaRss } from "@react-icons/all-files/fa/FaRss";


const Footer = ({}) => {


	const data = useStaticQuery(graphql`
    query footerQuery {
    allWordpressWpApiMenusMenusItems{
            edges{
                node{
                    id
                    name
                    items{
                        title
                        url
                        object_slug
                    }
                }
            }
        }
      }
  `)
   const items = data.allWordpressWpApiMenusMenusItems.edges[0].node.items
	return (
    <>
  
 <footer id="colophon" className="site-footer" role="contentinfo">
		<div className="blue-bkg">
			<div className="clear container footer-container">
				<div className="col-sm-12 col-md-4 footer-col-1">
											<h3>Helpful Links</h3>
										<div class="menu-helpful-links-container"><ul id="menu-helpful-links" class="menu">

                    {items.map((item) =>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page " key={item.object_slug}>
                            <Link to={item.object_slug}>
                                {item.title}
                            </Link>
                        </li>
                    )}
                


</ul></div>				</div>
									
									<div class="col-sm-12 col-md-4 social-icons footer-col-2">
						<section id="text-8" class="widget widget_text"><h3 class="widget-title">Connect with us</h3>			<div className="textwidget"><p><a href="https://twitter.com/BMJBestPractice" target="_blank" rel="noopener noreferrer" className="fai"><FaTwitter /></a><a href="https://www.facebook.com/BMJBestPractice" target="_blank" rel="noopener noreferrer" className="fai"><FaFacebookSquare /></a><a href="https://www.youtube.com/user/BMJCompany" target="_blank" rel="noopener noreferrer" className="fai"><FaYoutube /></a><a href="http://stg-bestpractice.bmj.com/rss-feeds/" target="_blank" rel="noopener noreferrer" className="fai"><FaRss /></a></p>
</div>
		</section>					</div>
								<div className="col-sm-12 col-md-4 footer-col-3">
																				</div>
			</div>
		</div>
		<div class="clear container site-footer-copyright">
			<div class="col-12">
				<div class="pad-top-10 pad-bottom-10 text-right-m">
											<p>© BMJ Publishing Group Limited 2019. All rights reserved. | <a title="link back to top of page" class="backtotop" href="#">Back to top</a></p>
									</div>
			</div>
		</div>
	</footer>
  </>
  )
}

	export default Footer