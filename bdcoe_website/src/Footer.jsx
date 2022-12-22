import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="left">
            <div className="content">
            <h1><span> Big Data </span> - Centre Of Excellence</h1>
            is the R & D Centre established under Ajay Kumar Garg Engineering College. <br/><br/>
            At BDCOE , we strive to stimulate interest in Big Data concept and related technologies among the students of the Instutions . Besides making serious endeavors to spread knowledge on Big Data, we stand by the stuble acronym of TEAM-'Together Everyone Achieves More'.
            </div>
        </div>
        <div className="right">
            <div className="map">
            <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=27th Km Milestone, Delhi-Meerut Expressway, P.O. Adhyatmik Nagar, Ghaziabad - 201009&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://formatjson.org/">format json</a></div><style></style></div>
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Domains</li>
                    <li>Team</li>
                    <li>Info</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="social">
                <ul>
                    <li>icon1</li>
                    <li>icon2</li>
                    <li>icon3</li>
                </ul>
            </div>
        </div>
        
    </div>
    
  )
}

export default Footer