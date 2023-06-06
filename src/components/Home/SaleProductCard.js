import React from 'react'
import { Link } from 'react-router-dom'

export default function SaleProductCard(props) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="product-item">
                <div className="product-thumb">
                    <div className="main-img">
                        <Link to={`/Product/${props.id}`}>
                            <img className="img-responsive" src={props.image} alt="img" />
                        </Link>
                    </div>
                    <div className="overlay-img">
                        <Link to={`/Product/${props.id}`}>
                            <img className="img-responsive" src={props.imageThumb} alt="img" />
                        </Link>
                    </div>
                    <div className="product-sale">
                        -{props.discount}%
                    </div>
                    <Link to={`/Product/${props.id}`} className="details"><i className="pe-7s-search" /></Link>
                </div>
                <h4 className="product-name"><Link to={`/Product/${props.id}`}>{props.title}</Link></h4>
                <p className="product-price">
                    <ins><span className="amount">{props.amount} USD</span></ins>
                    <del><span className="amount">{props.actualAmount} USD</span></del>
                </p>
                <div className="group-buttons">
                    <button type="button" className="add-to-cart" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                        <span>Add to Cart</span>
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
    )
}
