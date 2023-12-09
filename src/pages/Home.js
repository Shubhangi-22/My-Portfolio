import React from 'react'
import  GitHubIcon  from '@material-ui/icons/GitHub';
import  LinkedInIcon  from '@material-ui/icons/LinkedIn';
import  EmailIcon  from '@material-ui/icons/Email';
import "../styles/home.css";
function Home(){
    return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, My Name is Shubhangi</h2>
            <div className='prompt'>
                <p>A Software Developer with a passion of learning and creating.</p>
                <EmailIcon/>
                <GitHubIcon/>
                <LinkedInIcon/>
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                <h2>Front-End</h2>
                <span> 
                    ReactJs,HTML,CSS,Bootstrap,basic MySQL
                </span>
                </li>
                <li className='item'>
                <h2>Languages</h2>
                <span>
                    JavaScript,C++,C
                </span>
                </li>
               

            </ol>
        </div>
    </div>
    )
}
export default Home