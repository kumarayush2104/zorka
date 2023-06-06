import React from 'react'
import { Link } from 'react-router-dom'

export default function OurTeamCard(props) {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="team-item">
                <div className="team-thumb">
                    <div className="main-img">
                        <Link to="/Team-members">
                            <img className="img-responsive" src={props.image} alt="img" />
                        </Link>
                    </div>
                    <div className="overlay-img">
                        <Link to="/Team-members">
                            <img className="img-responsive" src={props.imageThumb} alt="img" />
                        </Link>
                    </div>
                    <Link to="/Team-members" className="details">
                        <i className="pe-7s-search" />
                    </Link>
                </div>
                <h4> <Link to="/Team-members">{props.name}</Link></h4>
                <h5>{props.designation}</h5>
                <ul className="list-social">
                    <li><a href={props.fblink} className="facebook"><i className="fa fa-facebook"></i></a></li>
                    <li><a href={props.twlink} className="twitter"><i className="fa fa-twitter"></i></a></li>
                    <li><a href={props.iglink} className="instagram"><i className="fa fa-instagram"></i></a></li>
                    <li><a href={props.vklink} className="vk"><i className="fa fa-vk"></i></a></li>
                    <li><a href={props.bhlink} className="behance"><i className="fa fa-behance"></i></a></li>
                </ul>
            </div>
        </div>
    )
}
