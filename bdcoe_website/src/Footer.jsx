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
            <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Big%20Data%20Center%20of%20Excellence&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a></div></div>
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
                    <li><a href="https://www.instagram.com/bdcoe/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/school/big-data-centre-of-excellence/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://www.youtube.com/@bigdatacentreofexcellence3334" target="_blank"><i class="fa-brands fa-youtube"></i></a></li>
                </ul>
            </div>
        </div>
        
    </div>
    
  )
}

export default Footer