import React from 'react'

export default function CustomBlockCard(props) {
    return (
        <div className="col-md-4">
            <div className="block-item">
                <h3>{props.title}</h3>
                <div className="row">
                    {props.content}
                </div>
            </div>
        </div>
    )
}
