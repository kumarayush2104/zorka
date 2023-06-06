import React from 'react'
import { Link } from 'react-router-dom'

export default function PortfolioCard(props) {
    return (
        <div className="mix filter-1 col-md-4 col-sm-6">
            <div className="works-item">
                <div className="works-thumb">
                    <div className="main-img">
                        <Link to={`/Portfolio/${props.id}`}>
                            <img className="img-responsive" src={props.image}
                                alt="img" />
                        </Link>
                    </div>
                    <div className="overlay-img">
                        <Link to={`/Portfolio/${props.id}`}>
                            <img className="img-responsive" src={props.imageThumb}
                                alt="img" />
                        </Link>
                    </div>
                    <Link to={`/Portfolio/${props.id}`} className="details"><i className="pe-7s-search"></i></Link>
                </div>
                <h4><Link to={`/Portfolio/${props.id}`}>{props.title}</Link></h4>
                <h6>{props.content}</h6>
            </div>
        </div>
    )
}
