import React from 'react'

export default function BrandCard(props) {
    return (
        <div className='my-owl-item'>
            <img className="img-responsive" src={props.image} alt={props.name} />
        </div>
    )
}
