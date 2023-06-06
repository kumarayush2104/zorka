import React from 'react'

export default function OurOfficeCard(props) {
    return (
        <div className="col-md-3 col-sm-6 no-pd">
            <div className="office-item">
                <div className="office-thumb">
                    <div className="main-img">
                        <img className="img-responsive" src={props.image} alt="img" />
                    </div>
                    <div className="overlay-img">
                        <img className="img-responsive" src={props.imageThumb} alt="img" />
                    </div>
                    <div className="details"><i className="pe-7s-search" /></div>
                </div>
            </div>
        </div>
    )
}
