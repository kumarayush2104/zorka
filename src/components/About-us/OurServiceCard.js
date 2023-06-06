import React from 'react'

export default function OurServiceCard(props) {
    return (
        <div className="col-md-4 col-sm-6">
            <div className={`feature-item ${props.icon}`}>
                <h4>{props.title}</h4>
                <p>{props.content}</p>
            </div>
        </div>
    )
}
