import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css'
import SlickDemo from '../components/SlickDemo'  
import { FaBook } from "@react-icons/all-files/fa/FaBook";
import  '../components/comorbidities.css'  
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';







class HomeTemplate extends Component {
    render() {
        const data = this.props.data
       
      const acfd = data.allWordpressPage.edges[0].node.acf
      const seconebackimg = data.allWordpressPage.edges[0].node.acf.section_two_background__image.source_url
       
      const seconelogoimg = data.allWordpressPage.edges[0].node.acf.section_one_logo_image.source_url
      const secthreeback= data.allWordpressPage.edges[0].node.acf.section_three_background_color
      const items= data.allWordpressPage.edges[0].node.acf.section_two_boxes
       const four= data.allWordpressPage.edges[0].node.acf.section_four_boxes
      const item1= data.allWordpressPage.edges[0].node.acf.section_six[0].add_content
      const item2= data.allWordpressPage.edges[0].node.acf.section_six[1].add_content
      const item3= data.allWordpressPage.edges[0].node.acf.section_six[2].add_content
      
    

        return(
          <Layout>
          
     
         <section className="sec_one" style={{backgroundImage: "url(" + seconebackimg + ")"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-md-7 col-sm-7 col-xs-12">
                                <h1>


                                    <img src= {'/assets/comorbities-c-logo.png'} alt="comorbities-c-logo" />
                                </h1>

                                <h1 title="section-one-heading" dangerouslySetInnerHTML={{ __html: acfd.section_one_heading }} />
                                                                                                          <br />
                                                                </div>
                            <div className="col-md-4 col-sm-4">  
                                <div className="content_sec1">                                        
                                <img src= { seconelogoimg } alt="" />
                                        </div>
                            </div>
                        </div>

                    </div>
                </div> 
                 
                <div className="row sec_five_block_row2">
              
            
                    <div className="col-md-4 col-sm-4 embed-container">
                    
                       <a data-toggle="modal" data-target="#exampleModalCenter" tabindex="0" href="">
                           <img src={'/assets/Comorbiditiestoolvideo.png'} width="100%" alt="Comorbidities tool video"  />
                       </a>
                       <a data-toggle="modal" data-target="#exampleModalCenter" tabindex="0" href="">
                           <img src={'/assets/videoplaybutton.png'} className="play-btn-img" alt="video play button" />
                       </a>
                       
                    </div>

                    <div className="col-md-8 col-sm-8"> 
                        <h2>{acfd.section_one_video_heading}</h2>
                        <p>{acfd.section_two_heading} </p>
                        


                    </div>             
                </div>
            </div>
        </section>
    
    <section className="sec_three" style={{backgroundColor: secthreeback}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{acfd.section_three__heading}</h1>
            <button data-toggle="modal" data-target="#Sixsecmodal" width="100%" tabindex="0">{acfd.section_three_button}</button>
          </div>
        </div>
      </div>
    </section>

    <section className="sec_free">
        <div className="container">
         <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
           

                <h2>
                {acfd.free_topic_setion_heading}              
              </h2>            
           <br />
           
           


          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 free-topic-button">
              
                              <a className="trial button scrollTo" target="_blank" href={acfd.free_topic_setion_button_1_url}>
           {acfd.free_topic_setion_button_1_text}</a>
       


                       <a className="trial button scrollTo" target="_blank" href={acfd.free_topic_setion_button_2_url}>{acfd.free_topic_setion_button_2_text}
           </a>          </div>
          </div>
      </div>
  </section>
                

                <section className="sec_two">

      <div className="container">
        <div className="row">
           

            {items.map((item) =>
                       
                        <div className="col-md-4 col-sm-4">
                                 <img src={item.add_icon.source_url} alt="" />
                               <h4 className="podheading"><strong></strong> </h4>
            <p className="poddesc">{item.add_description}   </p>
            
              <div className="line"></div>
            
           </div>
                    )}

                    
         

                    
          
                              
                </div>
      </div>
    </section>

    <section className="sec_four">
       
      
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{acfd.section_four_heading}   </h1>
          </div>
           
           {four.map((item) =>
             <div className="col-md-6 col-sm-6">
            <div className="u-download">
              <div className="down-1">
                                       <a tabindex="0" href={item.add_dowlodable_file.url.source_url} title=""><img src={item.one_if.source_url} alt="" /></a>
                                   
              </div>
              <div className="down-2">
                <a className="podheading" tabindex="0" href={item.add_dowlodable_file.url.source_url} title="">
                    <strong>{item.add_ttitle}</strong></a>
              <p className="poddesc">{item.add_description} </p>
              </div>
            </div>      
     </div>

                 )}  

                


            
    </div>
</div>
    </section>
         

         <section className="sec_five">
     <div className="container">
       <div className="row">
            
                <div className="col-md-5 col-sm-5 embed-container">
                    
                        



                        <a data-toggle="modal" data-target="#fivesecmodal" tabindex="0" href="https://stg-bestpractice.bmj.com/info/wp-content/uploads/2016/06/topics video.png">
                            <img src={'/assets/topicsvideo.png'} width="100%" alt="topics video" />
                        </a>
                        <a data-toggle="modal" data-target="#fivesecmodal" tabindex="0" href="https://stg-bestpractice.bmj.com/info/wp-content/uploads/2016/06/video play button.png">
                            <img src={'/assets/videoplaybutton.png'} className="play-btn-img2" alt="video play button" />
                        </a>
                    
                </div>

                <div className="col-md-7 col-sm-7"> 
                  <h2>View the guideline combinations included in the Comorbidities tool</h2>
                  <p>This easy to use tool provides a single place for healthcare professionals to access treatment recommendations that cover a range of acute conditions that are linked to the most common and costly comorbidities.</p>
                  
                </div>
             
          </div>
     </div>
    
  </section>

  <section className="section-six">

  <div className="container">
    <div className="row">
              <div className="col-md-12">
                                   
                  <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                      
                      <div className="carousel-inner text-center">
                                                 
              
                             

                                 
                                            <div className="item" >
                              
                                  <div className="row">
                                      <div className="col-md-12">
                                        <div className="test-img">
                                          
   

                                        </div>
                                      </div>
                                      <div className="col-sm-12">
                                          
                                       <p dangerouslySetInnerHTML={{ __html: item1 }} />
                                          
                                      </div>
                                  </div>
                              
                          </div>
                                
                                <div className="item" >
                              
                                  <div className="row">
                                      <div className="col-md-12">
                                        <div className="test-img">
                                          
   

                                        </div>
                                      </div>
                                      <div className="col-sm-12">
                                          
                                       <p dangerouslySetInnerHTML={{ __html: item2 }} />
                                          
                                      </div>
                                  </div>
                              
                          </div>
                                

                                <div className="item active" >
                              
                                  <div className="row">
                                      <div className="col-md-12">
                                        <div className="test-img">
                                          
   

                                        </div>
                                      </div>
                                      <div className="col-sm-12">
                                          
                                       <p dangerouslySetInnerHTML={{ __html: item3 }} />
                                          
                                      </div>
                                  </div>
                              
                          </div>
                                
                            

                                                      
                        

                          <ol className="carousel-indicators">
                          <li data-target="#quote-carousel" data-slide-to="0" className="" tabindex="0"></li>
                          <li data-target="#quote-carousel" data-slide-to="1" tabindex="0" className=""></li>
                          <li data-target="#quote-carousel" data-slide-to="2" tabindex="0" className="active"></li>
                      </ol>
                      </div>
                      
                      

                  </div>
                              </div>

          </div>
        </div>
</section>

<div className="modal fade" id="fivesecmodal" tabindex="-1" role="dialog" aria-labelledby="fivesecmodalTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content"> 
    <div className="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>  
    </div>  
      <div className="modal-body">
        
      <iframe id="fiveVideo" width="560" height="315" src={acfd.section_five_video_iframe_code} frameborder="0" allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>      
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="fivesecmodalTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content"> 
    <div className="modal-header">
    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>  
    </div>  
      <div className="modal-body">
        
      <iframe id="fiveVideo" width="100%" height="315" src={acfd.section_two_video_url} frameborder="0" allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>      
    </div>
  </div>
</div>




<div className="modal fade" id="Sixsecmodal" tabindex="-1" role="dialog" aria-labelledby="SixsecmodalTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">CLOSE &times;</span>
        </button>
        <div className="form-head-text">
          <h2>Request a demo</h2>
          <p>Please complete this form, and a member of the BMJ team be in contact soon.</p>
        </div>
      </div>
      <div className="modal-body">
        <form action="https://domain.msgfocus.com/s/" id="submit-campaign-form" method="post">
          <input type="hidden" name="_account_id" value="829" />
            <input type="hidden" name="_table_id" value="2" />
              <input type="hidden" name="_dedupe" value="1" />
                <input type="hidden" name="_email_field" value="2.email" />
                  <input type="hidden" name="_static_update" value="1" />
                  
                    <input type="hidden" name="_list_id" value="77863" />
                    

                      <label className="lable-1">
                        {acfd.add_question_text_here}
                        <span className="form-required"/>
                      </label>
                      <div class="form-checkboxes custom_radio">
                        <input type="radio" class="cm_b2b_validation" id="b2b_validation_yes" name="179.b2b_validation" value="yes" checked />
                          <label for="b2b_validation_yes" className="yes-block">Yes</label>
                          <input type="radio" class="cm_b2b_validation" id="b2b_validation_no" name="179.b2b_validation" value="no" />
                            <label for="b2b_validation_no" className="yes-block">No</label>
                          </div>
                          
                         
                          
                          
                          <div className="row">
                            <div className="col-md-6">
                              
          
                              <label className="lable-txt">
                                {acfd.first_name} 
                                <span className="form-required">*</span>
                              </label>
                              <input type="text" id="first_name" className="cm_first_name" name="179.first_name" validate="notempty" />
                                
                                                              
                              </div>
                              <div class="col-md-6">
                                
   
                                <label class="lable-txt">
                                  {acfd.change_organisation}
                                  <span class="form-required">*</span>
                                </label>
                                <input type="text" name="179.organisation" validate="notempty" class="cm_organisation" />
                                   
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  
      
                                  <label className="lable-txt">
                                    {acfd.suname}
                                    <span className="form-required">*</span>
                                  </label>
                                  <input type="text" id="surname" className="cm_surname" name="179.surname" required />
                                   
                                  </div>
                                  <div class="col-md-6">
                                    <div class="form-block1">
                                      
                                      <label class="lable-txt">
                                        {acfd.change_profession}
                                        <span class="form-required">*</span>
                                      </label>
                                      <select name="179.profession" validate="notempty" id="profession" class="cm_profession">
                                        <option value="">Please select</option>
                                        <option value="doctor">Doctor/Physician</option>
                                        <option value="other-healthcare-professional">Other Healthcare Professional</option>
                                        <option value="nurse">Nurse/Midwife</option>
                                        <option value="pharmacist">Pharmacist</option>
                                        <option value="student">Student</option>
                                        <option value="healthcare-management">Healthcare Management</option>
                                        <option value="quality-improvement">Quality Improvement/Patient Safety/Risk</option>
                                        <option value="industry">Industry</option>
                                        <option value="education">Education</option>
                                        <option value="academic-researcher">Academic Researcher</option>
                                        <option value="librarian-information-specialist">Librarian/Information Specialist</option>
                                        <option value="member-of-public">Member of the Public</option>
                                        <option value="primary-care">Primary Care (General/Family Practice)</option>
                                        <option value="secondary-care">Secondary Care</option>
                                        <option value="other">Other</option>
                                      </select>
                                      
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                   
       
                                    <label class="lable-txt">
                                      {acfd.email}
                                      <span class="form-required">*</span>
                                    </label>
                                    <input type="text" name="2.email" id="email" class="cm_email" validate="email" />
                                    

                                    </div>
                                    <div class="col-md-6">
                                      <div class="form-block2">
                                        
                                        <label class="lable-txt">
                                          {acfd.change_country}
                                          <span class="form-required">*</span>
                                        </label>
                                        <select name="179.country" validate="notempty" class="cm_country">
                                          <option value="">Please select</option>
                                          <option value="GB">United Kingdom</option>
                                          <option value="US">United States</option>
                                          <option value="AF">Afghanistan</option>
                                          <option value="AX">Ã…land Islands</option>
                                          <option value="AL">Albania</option>
                                          <option value="DZ">Algeria</option>
                                          <option value="AS">American Samoa</option>
                                          <option value="AD">Andorra</option>
                                          <option value="AO">Angola</option>
                                          <option value="AI">Anguilla</option>
                                          <option value="AQ">Antarctica</option>
                                          <option value="AG">Antigua and Barbuda</option>
                                          <option value="AR">Argentina</option>
                                          <option value="AM">Armenia</option>
                                          <option value="AW">Aruba</option>
                                          <option value="AU">Australia</option>
                                          <option value="AT">Austria</option>
                                          <option value="AZ">Azerbaijan</option>
                                          <option value="BS">Bahamas</option>
                                          <option value="BH">Bahrain</option>
                                          <option value="BD">Bangladesh</option>
                                          <option value="BB">Barbados</option>
                                          <option value="BY">Belarus</option>
                                          <option value="BE">Belgium</option>
                                          <option value="BZ">Belize</option>
                                          <option value="BJ">Benin</option>
                                          <option value="BM">Bermuda</option>
                                          <option value="BT">Bhutan</option>
                                          <option value="BO">Bolivia, Plurinational State of</option>
                                          <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                          <option value="BA">Bosnia and Herzegovina</option>
                                          <option value="BW">Botswana</option>
                                          <option value="BV">Bouvet Island</option>
                                          <option value="BR">Brazil</option>
                                          <option value="IO">British Indian Ocean Territory</option>
                                          <option value="BN">Brunei Darussalam</option>
                                          <option value="BG">Bulgaria</option>
                                          <option value="BF">Burkina Faso</option>
                                          <option value="BI">Burundi</option>
                                          <option value="KH">Cambodia</option>
                                          <option value="CM">Cameroon</option>
                                          <option value="CA">Canada</option>
                                          <option value="CV">Cape Verde</option>
                                          <option value="KY">Cayman Islands</option>
                                          <option value="CF">Central African Republic</option>
                                          <option value="TD">Chad</option>
                                          <option value="CL">Chile</option>
                                          <option value="CN">China</option>
                                          <option value="CX">Christmas Island</option>
                                          <option value="CC">Cocos (Keeling) Islands</option>
                                          <option value="CO">Colombia</option>
                                          <option value="KM">Comoros</option>
                                          <option value="CG">Congo</option>
                                          <option value="CD">Congo, the Democratic Republic of the</option>
                                          <option value="CK">Cook Islands</option>
                                          <option value="CR">Costa Rica</option>
                                          <option value="CI">CÃ´te d'Ivoire</option>
                                          <option value="HR">Croatia</option>
                                          <option value="CU">Cuba</option>
                                          <option value="CW">CuraÃ§ao</option>
                                          <option value="CY">Cyprus</option>
                                          <option value="CZ">Czech Republic</option>
                                          <option value="DK">Denmark</option>
                                          <option value="DJ">Djibouti</option>
                                          <option value="DM">Dominica</option>
                                          <option value="DO">Dominican Republic</option>
                                          <option value="EC">Ecuador</option>
                                          <option value="EG">Egypt</option>
                                          <option value="SV">El Salvador</option>
                                          <option value="GQ">Equatorial Guinea</option>
                                          <option value="ER">Eritrea</option>
                                          <option value="EE">Estonia</option>
                                          <option value="ET">Ethiopia</option>
                                          <option value="FK">Falkland Islands (Malvinas)</option>
                                          <option value="FO">Faroe Islands</option>
                                          <option value="FJ">Fiji</option>
                                          <option value="FI">Finland</option>
                                          <option value="FR">France</option>
                                          <option value="GF">French Guiana</option>
                                          <option value="PF">French Polynesia</option>
                                          <option value="TF">French Southern Territories</option>
                                          <option value="GA">Gabon</option>
                                          <option value="GM">Gambia</option>
                                          <option value="GE">Georgia</option>
                                          <option value="DE">Germany</option>
                                          <option value="GH">Ghana</option>
                                          <option value="GI">Gibraltar</option>
                                          <option value="GR">Greece</option>
                                          <option value="GL">Greenland</option>
                                          <option value="GD">Grenada</option>
                                          <option value="GP">Guadeloupe</option>
                                          <option value="GU">Guam</option>
                                          <option value="GT">Guatemala</option>
                                          <option value="GG">Guernsey</option>
                                          <option value="GN">Guinea</option>
                                          <option value="GW">Guinea-Bissau</option>
                                          <option value="GY">Guyana</option>
                                          <option value="HT">Haiti</option>
                                          <option value="HM">Heard Island and McDonald Islands</option>
                                          <option value="VA">Holy See (Vatican City State)</option>
                                          <option value="HN">Honduras</option>
                                          <option value="HK">Hong Kong</option>
                                          <option value="HU">Hungary</option>
                                          <option value="IS">Iceland</option>
                                          <option value="IN">India</option>
                                          <option value="ID">Indonesia</option>
                                          <option value="IR">Iran, Islamic Republic of</option>
                                          <option value="IQ">Iraq</option>
                                          <option value="IE">Ireland</option>
                                          <option value="IM">Isle of Man</option>
                                          <option value="IL">Israel</option>
                                          <option value="IT">Italy</option>
                                          <option value="JM">Jamaica</option>
                                          <option value="JP">Japan</option>
                                          <option value="JE">Jersey</option>
                                          <option value="JO">Jordan</option>
                                          <option value="KZ">Kazakhstan</option>
                                          <option value="KE">Kenya</option>
                                          <option value="KI">Kiribati</option>
                                          <option value="KP">Korea, Democratic People's Republic of</option>
                                          <option value="KR">Korea, Republic of</option>
                                          <option value="KW">Kuwait</option>
                                          <option value="KG">Kyrgyzstan</option>
                                          <option value="LA">Lao People's Democratic Republic</option>
                                          <option value="LV">Latvia</option>
                                          <option value="LB">Lebanon</option>
                                          <option value="LS">Lesotho</option>
                                          <option value="LR">Liberia</option>
                                          <option value="LY">Libya</option>
                                          <option value="LI">Liechtenstein</option>
                                          <option value="LT">Lithuania</option>
                                          <option value="LU">Luxembourg</option>
                                          <option value="MO">Macao</option>
                                          <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                          <option value="MG">Madagascar</option>
                                          <option value="MW">Malawi</option>
                                          <option value="MY">Malaysia</option>
                                          <option value="MV">Maldives</option>
                                          <option value="ML">Mali</option>
                                          <option value="MT">Malta</option>
                                          <option value="MH">Marshall Islands</option>
                                          <option value="MQ">Martinique</option>
                                          <option value="MR">Mauritania</option>
                                          <option value="MU">Mauritius</option>
                                          <option value="YT">Mayotte</option>
                                          <option value="MX">Mexico</option>
                                          <option value="FM">Micronesia, Federated States of</option>
                                          <option value="MD">Moldova, Republic of</option>
                                          <option value="MC">Monaco</option>
                                          <option value="MN">Mongolia</option>
                                          <option value="ME">Montenegro</option>
                                          <option value="MS">Montserrat</option>
                                          <option value="MA">Morocco</option>
                                          <option value="MZ">Mozambique</option>
                                          <option value="MM">Myanmar</option>
                                          <option value="NA">Namibia</option>
                                          <option value="NR">Nauru</option>
                                          <option value="NP">Nepal</option>
                                          <option value="NL">Netherlands</option>
                                          <option value="NC">New Caledonia</option>
                                          <option value="NZ">New Zealand</option>
                                          <option value="NI">Nicaragua</option>
                                          <option value="NE">Niger</option>
                                          <option value="NG">Nigeria</option>
                                          <option value="NU">Niue</option>
                                          <option value="NF">Norfolk Island</option>
                                          <option value="MP">Northern Mariana Islands</option>
                                          <option value="NO">Norway</option>
                                          <option value="OM">Oman</option>
                                          <option value="PK">Pakistan</option>
                                          <option value="PW">Palau</option>
                                          <option value="PS">Palestinian Territory, Occupied</option>
                                          <option value="PA">Panama</option>
                                          <option value="PG">Papua New Guinea</option>
                                          <option value="PY">Paraguay</option>
                                          <option value="PE">Peru</option>
                                          <option value="PH">Philippines</option>
                                          <option value="PN">Pitcairn</option>
                                          <option value="PL">Poland</option>
                                          <option value="PT">Portugal</option>
                                          <option value="PR">Puerto Rico</option>
                                          <option value="QA">Qatar</option>
                                          <option value="RE">RÃ©union</option>
                                          <option value="RO">Romania</option>
                                          <option value="RU">Russian Federation</option>
                                          <option value="RW">Rwanda</option>
                                          <option value="BL">Saint BarthÃ©lemy</option>
                                          <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                          <option value="KN">Saint Kitts and Nevis</option>
                                          <option value="LC">Saint Lucia</option>
                                          <option value="MF">Saint Martin (French part)</option>
                                          <option value="PM">Saint Pierre and Miquelon</option>
                                          <option value="VC">Saint Vincent and the Grenadines</option>
                                          <option value="WS">Samoa</option>
                                          <option value="SM">San Marino</option>
                                          <option value="ST">Sao Tome and Principe</option>
                                          <option value="SA">Saudi Arabia</option>
                                          <option value="SN">Senegal</option>
                                          <option value="RS">Serbia</option>
                                          <option value="SC">Seychelles</option>
                                          <option value="SL">Sierra Leone</option>
                                          <option value="SG">Singapore</option>
                                          <option value="SX">Sint Maarten (Dutch part)</option>
                                          <option value="SK">Slovakia</option>
                                          <option value="SI">Slovenia</option>
                                          <option value="SB">Solomon Islands</option>
                                          <option value="SO">Somalia</option>
                                          <option value="ZA">South Africa</option>
                                          <option value="GS">South Georgia and the South Sandwich Islands</option>
                                          <option value="SS">South Sudan</option>
                                          <option value="ES">Spain</option>
                                          <option value="LK">Sri Lanka</option>
                                          <option value="SD">Sudan</option>
                                          <option value="SR">Suriname</option>
                                          <option value="SJ">Svalbard and Jan Mayen</option>
                                          <option value="SZ">Swaziland</option>
                                          <option value="SE">Sweden</option>
                                          <option value="CH">Switzerland</option>
                                          <option value="SY">Syrian Arab Republic</option>
                                          <option value="TW">Taiwan, Province of China</option>
                                          <option value="TJ">Tajikistan</option>
                                          <option value="TZ">Tanzania, United Republic of</option>
                                          <option value="TH">Thailand</option>
                                          <option value="TL">Timor-Leste</option>
                                          <option value="TG">Togo</option>
                                          <option value="TK">Tokelau</option>
                                          <option value="TO">Tonga</option>
                                          <option value="TT">Trinidad and Tobago</option>
                                          <option value="TN">Tunisia</option>
                                          <option value="TR">Turkey</option>
                                          <option value="TM">Turkmenistan</option>
                                          <option value="TC">Turks and Caicos Islands</option>
                                          <option value="TV">Tuvalu</option>
                                          <option value="UG">Uganda</option>
                                          <option value="UA">Ukraine</option>
                                          <option value="AE">United Arab Emirates</option>
                                          <option value="GB">United Kingdom</option>
                                          <option value="US">United States</option>
                                          <option value="UM">United States Minor Outlying Islands</option>
                                          <option value="UY">Uruguay</option>
                                          <option value="UZ">Uzbekistan</option>
                                          <option value="VU">Vanuatu</option>
                                          <option value="VE">Venezuela, Bolivarian Republic of</option>
                                          <option value="VN">Viet Nam</option>
                                          <option value="VG">Virgin Islands, British</option>
                                          <option value="VI">Virgin Islands, U.S.</option>
                                          <option value="WF">Wallis and Futuna</option>
                                          <option value="EH">Western Sahara</option>
                                          <option value="YE">Yemen</option>
                                          <option value="ZM">Zambia</option>
                                          <option value="ZW">Zimbabwe</option>
                                        </select>
                                        
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-md-6">
                                     
                                      <label class="lable-txt">
                                        {acfd.phone_number}
</label>
                                      <input type="text" name="179.phone" id="phone" class="cm_phone" validate="" />
                                        <label id="phone-error" class="error"/>
                                                                      </div>
                                      <div class="col-md-6">
                                        
        
            
                                        <div class="form-bottom-notice">
                                        
               
                                          <input type="checkbox" name="acceptance-checkbox" required />
                                            {acfd.form_bottom_text}
                                            
                
                                          </div>
                                          
           
                                          
                                          <div class="form-bottom-notice">
                                            
                                            <input type="checkbox" name="acceptance-checkbox" />
                                              {acfd.form_bottom_text} 
                                              
                                       </div>
                                            
            
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-md-6"/>
                                          <div className="col-md-6">
                                            <input name="179.ip" type="hidden" value="" />
                                            <input name="179.timestamp" type="hidden" value="" />
                                            <input name="179.campaign_id" type="hidden" value={acfd.campaign_code} />
                                            <div className="form-button-block">
                                              <input type="submit" className="button-campaign-form  {landing_page_button_colour}" value="Submit" onSubmit="alert('Thank you for your feedback.')" /></div>
                                          </div>
                                        </div>
                                      </form>
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

   query comoQuery {
  allWordpressPage(filter: {template: {eq: "comorbidities.php"}}) {
    edges {
      node {
        title
        template
        status
        acf {
          page_post_description
          external_page
          
          add_question_text_here
          want_to_hide_question
          first_name
          want_to_hide_first
          suname
          want_to_hide_last
          email
          want_to_hide_email
          phone_number
          want_to_hide_phone
          change_profession
          want_to_hide_profession
          change_organisation
          want_to_hide_organization
          change_country
          want_to_hide_country
          form_bottom_text
          want_to_hide_formtext
          checkbox_for_bottom_text
          do_you_want_to_make_form_bottom_text__required
          campaign_code
          section_one_heading

          section_one_button_text
          section_two_stat1
          section_two_stat2
          section_two_stat3
          section_two_heading
          section_two_video_url
          section_two_background_color
          section_three_heading
          section_three_button_text
          section_three_2nd_heading
          section_three_icon_one_text
          section_three_icon_two_text
          section_three_icon_three_text
          section_three_icon_one_content
          section_three_icon_two_content
          section_three_icon_three_content
          section_four_image
          section_four_background_color
          section_five_heading
          section_five_color
          section_five_video_embed_url
          section_five_content
          section_6_heading
          section_6_box_1
          section_6_box_2
          section_6_box_3
          section_6_box_4
          section_6_box_5
          section_6_box_6
          section_three__heading
          section_three_button
          section_three_background_color
          section_four_heading
          section_five_video_text
          section_five_video_iframe_code
          section_one_video_heading
          free_topic_setion_heading
          free_topic_setion_button_1_text
          free_topic_setion_button_1_url
          free_topic_setion_button_2_text
          free_topic_setion_button_2_url
          hide_free_topic_section
          section_six {
            image_six
            add_content
          }
           section_two_background__image {
           
            alt_text
          
            source_url
           
          }

           section_one_logo_image {
            alt_text
            source_url
            
          }
           section_two_boxes {
            add_ttitle
            add_description
            add_icon {
              source_url
            }
          }
          
         section_four_image
          section_four_boxes {
            add_ttitle
            one_if {
              source_url
            }
            add_dowlodable_file {
              url {
                source_url
              }
            }
            add_description
          }


        }
      }
    }
  }
}

  `

