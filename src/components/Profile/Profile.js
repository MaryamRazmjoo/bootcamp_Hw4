import { Typography } from '@material-ui/core';
import React from 'react';
import CustomTimeline ,{CustomTimelineSeprator} from '../Timeline/Timeline';
import rezumeData from '../../Utils/rezumeData';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import customButton from '../Button/Button';
import GetAppIcon from '@material-ui/icons/GetApp'

import './Profile.css';
{/*}
const CustomTimelineItem = ({title,text,link}) => {
    <TimelineItem>
       <CustomTimelineSeprator/>
        <TimelineContent className='timeline-content'>
            {link ? (
            <Typography className='timelineItem-text'>
            <span>{title}:<a href={link} target="_blank">{text}</a></span>
            </Typography>
            ):
            (<Typography className='timelineItem-text'><span>{title}:< /span>{text}</Typography>)
            }
        </TimelineContent>
    </TimelineItem>
};
{*/}
const Profile =() =>{
    return(
        <div className='profile container-shadow'>
            <div className='profile-name'>
                <Typography className='name'>{rezumeData.name}</Typography>
                <Typography className='title'>{rezumeData.title}</Typography>
            </div>
            <figure className='profile-image'>
                <img  src= {require("../../assets/images/myPicture.jpg")} alt=""/>
            </figure>
            <div className='profile-information'>
                <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
               {/*} <CustomTimelineItem title='Name' text={rezumeData.name} />
                <CustomTimelineItem title='Title' text={rezumeData.title}/>
                <CustomTimelineItem title='Email' text={rezumeData.email}/>
                
                {object.keys(rezumeData.socials).map((key)=>(
                    <ustomTimelineItem title={key} text={rezumeData.socials[key].text} link={rezumeData.socials[key].link}/>
                ))
                }
                {*/}
                </CustomTimeline>
                <div className='btn-container'>
                <customButton text={'Download Cv'} icon={'GetAppIcon'}/>
                </div>
                

            </div>
        </div>
    )
}
export default Profile