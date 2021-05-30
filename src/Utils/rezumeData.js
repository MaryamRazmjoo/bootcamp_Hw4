import React from 'react';
import facebookIcon from '@material-ui/icons/Facebook';
import twitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
export default {
    name:"I'm Monica Geller.",
    title:"I'm a chef!",
    birthday:"24th April 1970",
    address:"123 test st",
    phone:"123 456 789",
    email:"monica@yahoo.com",
    socials:{
        facebook:{
            link:"#",
            text:"my facebook",
            icon:<facebookIcon/>,
        },
        twitter:{
            link:"#",
            text:"my twitter",
            icon:<twitterIcon/>,
        },
        linkedIn:{
            link:"#",
            text:"my linkedIn",
            icon:<LinkedInIcon/>,
        },
    }
}