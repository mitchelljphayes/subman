import React from 'react'

const Sub = (props) => {
    return (
       // <div className="sub-group flex space-between">
            <div className="sub-item flex space-between">
                <div className="sub-icon-background flex">
                    {props.subIcon}
                </div>
                <div className="sub-description flex">
                    <div className="textarea">
                        {/* <h4>{props.subName}</h4> */}
                        {/* <p className="sub-price">{props.subPrice}</p>
                        <p className="sub-time-period">{props.subTimePeriod}</p> */}
                        <p className="f3">{props.subName}</p>
                        <span className="f5 bold">{props.subPrice}</span><span className="f2 gray"> /per {props.subTimePeriod}</span>
                    </div>
                    
                </div>
                <span className="sub-time-left-icon">{props.subTimeLeftIcon}</span>
            </div>
        //</div>
    )
}

export default Sub
