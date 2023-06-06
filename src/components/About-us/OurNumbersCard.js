import React from 'react'
import CountUp from 'react-countup'

export default function OurNumbersCard(props) {
    return (
        <div className="col-md-3 col-sm-6">
            <p className="big counter-1"><CountUp enableScrollSpy={true} end={props.number} /></p>
            <p className="small">{props.title}</p>
        </div>
    )
}
