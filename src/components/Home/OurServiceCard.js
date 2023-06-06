import React from 'react'

export default function OurServiceCard(props) {
    return (
        <div className="col-md-4">
            <div className="media">
                <div className="media-left">
                    <i className={props.image} />
                </div>
                <div className="media-body">
                    <h4>{props.title}</h4>
                    <h5>{props.content}</h5>
                </div>
            </div>
        </div>
    )
}
