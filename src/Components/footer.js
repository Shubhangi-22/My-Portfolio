import React from 'react'
import  GitHubIcon  from '@material-ui/icons/GitHub';
import  LinkedInIcon  from '@material-ui/icons/LinkedIn';
import  EmailIcon  from '@material-ui/icons/Email';
import "../styles/footer.css";
function Footer(){
    return (
    <div className='footer'>
        <div className='socialMedia'>
        <EmailIcon/>
        <GitHubIcon/>
        <LinkedInIcon/>
         </div>
        
        </div>
    )
}
export default Footer