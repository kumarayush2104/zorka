import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryShopCard(props) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="product-item">
                <div className="product-thumb">
                    <div className="main-img">
                        <Link to={`/Products/${props.id}`} >
                            <img className="img-responsive" src={props.image} alt="img" />
                        </Link>
                    </div>
                    <div className="overlay-img">
                        <Link to={`/Products/${props.id}`} >
                            <img className="img-responsive" src={props.imageThumb} alt="img" />
                        </Link>
                    </div>
                    <Link to={`/Products/${props.id}`} className="details"><i className="pe-7s-search" /></Link>
                    {props.new ? <div className="product-new">NEW</div> : ""}
                    {props.discount ? <div className="product-sale">
                        -{props.discount}%
                    </div> : ""}
                </div>
                <h4 className="product-name"><Link to={`/Products/${props.id}`} >{props.title}</Link></h4>

                {props.amountNow ? <>
                    <span className="product-price">{props.amountNow} USD </span> 
                    <del><span className="amount">{props.amount} USD</span></del></> :
                    <span className="product-price"> {props.amount} USD</span>}

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
