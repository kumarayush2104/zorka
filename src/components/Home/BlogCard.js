import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard(props) {
    return (
        <div className="col-md-4">
            <div className="media">
                <div className="media-left">
                    <Link to={`/Blog/${props.id}`}>
                        <img className="img-responsive" src={props.image} alt="BlogImage" />
                    </Link>
                </div>
                <div className="media-body">
                    <h4><Link to={`/Blog/${props.id}`}>{props.title}</Link></h4>
                    <p>{props.content}</p>
                    <Link to={`/Blog/${props.id}`} className="readmore">READ MORE</Link>
                </div>
            </div>
        </div>
    )
}
