import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

function Experience(){
    return (
    <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2016-2017"
        iconStyle={{background:"#3e497a",color:"#fff"}}
        icon={<SchoolIcon/>}>
        <h3 className='vertical-timeline-element-title'>
             My Secondary School-Lancers Convent school,Sikandrabad,Uttar Pradesh
        </h3><p>Secondary School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2017-2019"
        iconStyle={{background:"pink",color:"#fff"}}
        icon={<SchoolIcon/>}>
        <h3 className='vertical-timeline-element-title'>
           My Senior Secondary School-Lancers Convent school,Sikandrabad,Uttar Pradesh
        </h3><p>Senior Secondary School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2020-2024"
        iconStyle={{background:"#e9d35b",color:"#fff"}}
        icon={<SchoolIcon/>}>
        <h3 className='vertical-timeline-element-title'>
            My College-KIET group of institutions,Ghaziabad,Uttar Pradesh
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>Bachelor's Degree</h4>
        <p>Computer Science & Information Technology</p>
        </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    );
}
export default Experience