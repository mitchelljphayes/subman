import React from 'react'
import Nav from '../components/Nav'
import TotalSubs from '../components/TotalSubs'
import Sub from "../components/Sub"

/* TEMPORARY, FOR TESTING PURPOSES */
import {ReactComponent as YoutubeLogo} from '../icons/youtube-logo.svg'

const HomePage = () => {
    return (
        <div className="container">
            Home Page
            <Nav/>
            <TotalSubs />
            <Sub 
                subIcon={<YoutubeLogo className="sub-icon"/>}
                subName="Youtube Premium"
                subPrice="$99.99"
                subTimePeriod="month"
            />
            <Sub 
                subIcon={<YoutubeLogo className="sub-icon"/>}
                subName="Youtube Premium"
                subPrice="$99.99"
                subTimePeriod="month"
            />
            <Sub 
                subIcon={<YoutubeLogo className="sub-icon"/>}
                subName="Youtube Premium"
                subPrice="$99.99"
                subTimePeriod="month"
            />
            <Sub 
                subIcon={<YoutubeLogo className="sub-icon"/>}
                subName="Youtube Premium"
                subPrice="$99.99"
                subTimePeriod="month"
            />
        </div>
    )
}

export default HomePage
