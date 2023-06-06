import React from 'react'
import { Link } from 'react-router-dom'

export default function StoreCard(props) {
    return (
        <div class="col-md-6">
            <div class="fashion-store" style={{ background: `url(${props.image}) no-repeat center center / cover` }}>
                <Link to="/Store">
                    <h3>{props.title}</h3>
                    <h5>{props.optional}</h5>
                    <div class="overlay"></div>
                </Link>
            </div>
        </div>
    )
}
