import React from 'react'

export default function MemberCard(props) {
    return (
        <div className="col-sm-6">
            <div className="team-item">
                <div className="row">

                    {/* Member Details Section */}
                    <div className="col-md-6">
                        <div className="team-thumb">
                            <div className="main-img">
                                <img className="img-responsive" src={props.image} alt="img" />
                            </div>
                            <div className="overlay-img">
                                <img className="img-responsive" src={props.imageThumb} alt="img" />
                            </div>
                        </div>
                    </div>
                    {/* Member Details Section */}

                    {/* Member Social Media Section */}
                    <div className="col-md-6">
                        <h4><a href="#">{props.name}</a></h4>
                        <h5>{props.designation}</h5>
                        <ul className="list-social">
                            <li><a href="#!" className="facebook"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#!" className="twitter"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#!" className="instagram"><i className="fa fa-instagram" /></a></li>
                            <li><a href="#!" className="vk"><i className="fa fa-vk" /></a></li>
                            <li><a href="#!" className="behance"><i className="fa fa-behance" /></a></li>
                        </ul>
                        <p>{props.content}</p>
                    </div>
                    {/* Member Social Media Section */}
                    
                </div>
            </div>
        </div>
    )
}
