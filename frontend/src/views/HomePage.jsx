import React from 'react'
import Nav from '../components/Nav'
import TotalSubs from '../components/TotalSubs'
import Sub from "../components/Sub"
import AddButton from "../components/AddButton"
import RecentSubs from '../components/RecentSubs'
import Chart from '../components/Chart'
import axios from "axios";

/* TEMPORARY, FOR TESTING PURPOSES */
import {ReactComponent as YoutubeLogo} from '../icons/youtube-logo.svg'
import {ReactComponent as PieChart} from '../icons/pie-chart.svg'
import {ReactComponent as PlusIcon} from '../icons/plus.svg'





const HomePage = () => {

    // const axios = require('axios').default;
    const subList = axios.get("/subscription/")
    .then((response) => {console.log(
        response.data, "response");
        var list = response.data;
    })
    .catch((error) => {console.log(error)})
    .then(() => {console.log('logging get request')})
    .then()
        console.log(subList, "outside axios");
    return (
        <div className="container">
            Home Page
            <Nav />
            <TotalSubs />
            <div className=" flex row overflow-x">
                <AddButton buttonIcon = {<PlusIcon className="button-icon"/>}
                buttonMessage = "Add Subscription"/>
                <RecentSubs />
                <RecentSubs />
                <RecentSubs />
            </div>
                
            <div style={{margin:"10px 0"}}>
                <b>Up comming payments(days)</b>
                
                <Sub 
                    subIcon={<YoutubeLogo className="sub-icon"/>}
                    subName='{props.data.subscription_name}'
                    subPrice="$99.99"
                    subTimePeriod="month"
                    subTimeLeftIcon={<Chart className=""/>}
                />


                {/* <Sub 
                    subIcon={<YoutubeLogo className="sub-icon"/>}
                    subName="Netflix"
                    subPrice="$32.50"
                    subTimePeriod="week"
                    subTimeLeftIcon={<PieChart className="sub-time-left-icon"/>}
                />
                <Sub 
                    subIcon={<YoutubeLogo className="sub-icon"/>}
                    subName="Figma"
                    subPrice="$100"
                    subTimePeriod="year"
                    subTimeLeftIcon={<PieChart className="sub-time-left-icon"/>}
                />
                <Sub 
                    subIcon={<YoutubeLogo className="sub-icon"/>}
                    subName="Monash University"
                    subPrice="$10000"
                    subTimePeriod="year"
                    subTimeLeftIcon={<PieChart className="sub-time-left-icon"/>}
                /> */}
            </div>
            
        </div>
    )
}

export default HomePage
