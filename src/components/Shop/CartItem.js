import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function CartItem(props) {

    const [quantity, setQuantity] = useState(props.quantity)

    // Handle Quantity of the item
    const increaseQuantity = () => setQuantity(quantity + 1)
    const decreaseQuantity = () => setQuantity((quantity > 1)? quantity - 1 : 1)

    return (
        <tr className="cart_item">
            <td className="product-remove">
                <a href="#!" className="remove"><i className="fa fa-times" /></a>
            </td>
            <td className="product-thumbnail">
                <Link to={`/Products/${props.id}`}>
                    <img className="img-responsive" src={props.image} alt="img" />
                </Link>
            </td>
            <td className="product-name">
                <Link to={`/Products/${props.id}`}>
                    {props.title}
                </Link>
            </td>
            <td className="product-price"><span className="amount">{props.amount} USD</span></td>
            <td className="product-quantity">
                <div className="quantity">
                    <button type='button' className="minus-btn" onClick={decreaseQuantity}><i className="fa fa-minus" /></button>
                    <input type="text" value={quantity} />
                    <button type='button' className="plus-btn" onClick={increaseQuantity}><i className="fa fa-plus" /></button>
                </div>
            </td>
            <td className="product-subtotal"><span className="amount">{props.amount * quantity} USD</span></td>
        </tr>
    )
}
