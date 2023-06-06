import React from 'react'
import { Link } from 'react-router-dom'

export default function OurFeatureCard(props) {
    return (
        <div className="col-md-4">
            <div className="sale">
                <Link to={`/Services`}>
                    <div className="text-box" style={{ backgroundColor: props.color1 }}>
                        {props.title}
                    </div>
                    <div className="icon-box" style={{ backgroundColor: props.color2 }}>
                        <i className={props.icon} />
                    </div>
                </Link>
            </div>
        </div>
    )
}
