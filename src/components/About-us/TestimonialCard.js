// Libraries
import React from 'react'

// Media
import QuoteIcon from '../../assets/about-us/quote.png'

export default function TestimonialCard(props) {
    return (
        <div className="testimonial-item">
            <div className="media">
                <div className="media-left">
                    <img className="avatar img-responsive" src={props.image} alt="img" />
                </div>
                <div className="media-body">
                    <h4>{props.name}</h4>
                    <h5>{props.designation}</h5>
                    <div>
                        <img className="quote" src={QuoteIcon} alt="img" />
                        <p>{props.content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
