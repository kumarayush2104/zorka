import React from 'react'

export default function FeatureCard(props) {
    return (
        <div className="col-md-4">
            <div className="sale">
                <Link to="/Services">
                    <div className="text-box">
                        {props.title}
                    </div>
                    <div className="icon-box">
                        <i className={props.image}></i>
                    </div>
                </Link>
            </div>
        </div>
    )
}
