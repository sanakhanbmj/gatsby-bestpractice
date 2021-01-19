import React, {Component} from "react"
import Layout from "../components/layout"


class PageTemplate extends Component {
    render() {
        const siteMetadata = this.props.data.site.siteMetadata
        const currentPage = this.props.data.wordpressPage
        const colorcta = this.props.data.wordpressPage.acf.sidebar_cta_colour


        console.log(currentPage)

        return (
             <Layout>
             {currentPage.acf !== null &&
             
        <div>
          <div class="blue-bkg pad-top-30 pad-bottom-30 page-header" style={{color:`white`}}>
            <div class="container clear">
             <div class="col-md-12">
                   {currentPage.acf.page_header_text !== '' && 
               
                        <h1 dangerouslySetInnerHTML={{__html: currentPage.acf.page_header_text}}/>
                    }
              </div>
            </div>
          </div>
                
                <div className="container">
                <div className="row" style={{marginTop:30 }} >
                <div className="col-md-8">
                <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>
                </div>
                <div className="col-md-4">
                
                { currentPage.acf.show_sidebar_cta !== null && 
                <div className="sidebar-cta" style={{backgroundColor: colorcta }}>
                {currentPage.acf.show_sidebar_cta}
            <a href={currentPage.acf.sidebar_cta_link} style={{padding:20 , display:`block`, postion:`relative`,color:`white`}}>
                <h2 style={{color:`white !important`}}>{currentPage.acf.sidebar_cta_title}</h2>
                {currentPage.acf.sidebar_cta_text !== '' &&
                <p>{currentPage.acf.sidebar_cta_text}</p>
            }
            </a>
        </div>
    }

          { currentPage.acf.show_sidebar_quote !== null && 
        <div className="sidebar-quote">
            <blockquote dangerouslySetInnerHTML={{__html: currentPage.acf.sidebar_quote_text}} />
            <p className="quote-source">{currentPage.acf.sidebar_quote_source}</p>
        </div>
    }
 

                </div>








                </div>
                </div>
               
                
                


                
        </div>
        }
            </Layout>
        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            slug
            id
            date(formatString: "MMMM DD, YYYY")
            acf {
      page_header_text
      page_subheader_text
      sidebar_cta_colour
      sidebar_cta_link
      sidebar_cta_title
      sidebar_cta_text
      show_sidebar_quote
      show_sidebar_cta
      sidebar_quote_text
      sidebar_quote_source
    }
        }
        site {
            id
            siteMetadata {
                title
                subtitle
            }
        }
    }
`