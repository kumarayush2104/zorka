import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomBlockProductCard(props) {
    return (
        <div className="col-md-12 col-sm-6">
            <div className="media">
                <div className="media-left">
                    <div className="block-thumb">
                        <div className="main-img">
                            <Link to={`/Product/${props.id}`}>
                                <img className="img-responsive" src={props.image} alt="img" />
                            </Link>
                        </div>
                        <div className="overlay-img">
                            <Link to={`/Product/${props.id}`}>
                                <img className="img-responsive" src={props.image} alt="img" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="media-body">
                    <h4><Link to={`/Product/${props.id}`}>{props.title}</Link></h4>
                    <p className="price">{`${props.amount} USD`}</p>
                    <div className="group-buttons">
                        <button type="button" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                            <i className="pe-7s-cart" />
                        </button>
                        <button type="button" data-toggle="tooltip" data-placement="top" title="Compare this Product">
                            <i className="pe-7s-repeat" />
                        </button>
                        <button type="button" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                            <i className="pe-7s-like" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
