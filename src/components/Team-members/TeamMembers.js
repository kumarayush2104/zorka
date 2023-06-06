// Libraries
import React from 'react'

// Components
import OurTeamCard from '../About-us/OurTeamCard'
import MemberCard from './MemberCard'

// Media
import TeamMember1 from '../../assets/about-us/team-img-1.jpg'
import TeamMember2 from '../../assets/about-us/team-img-2.jpg'
import TeamMember3 from '../../assets/about-us/team-img-3.jpg'
import TeamMember4 from '../../assets/about-us/team-img-4.jpg'
import Member1 from '../../assets/team-members/team-img-9.jpg'
import Member2 from '../../assets/team-members/team-img-10.jpg'

export default function TeamMembers() {
    return (
        <>
            <div className="main">
                <div className="header-page">
                    <div className="container">
                        <h1>TEAM MEMBERS</h1>
                        <p>Nulla mattis mi quis elit porttitor gravida. Ut ut laoreet justo. Suspendisse nulla ligula, aliquet sed cursus ut, sodales sit amet metus.</p>
                    </div>
                </div>
                <hr className="gray-line" />

                {/* Main Members Section Start */}
                <div className="main-content">
                    <div className="container">
                        <div className="founding-partners mgt-70">
                            <div className="row">
                                <MemberCard image={Member1} imageThumb={Member1} designation={"Stylist"} name={"JOHNSON SMITH"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tempus erat, et luctus quam. Maecenas cursus porta tortor, vel consectetur ante volutpat imperdiet. Fusce lacinia vehicula est sit amet aliquam."} />
                                <MemberCard image={Member2} imageThumb={Member2} designation={"Creative Manager"} name={"BARNEY MOLLY"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tempus erat, et luctus quam. Maecenas cursus porta tortor, vel consectetur ante volutpat imperdiet. Fusce lacinia vehicula est sit amet aliquam."} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main Members Section End */}
                
            </div>

            {/* Meet Our Team Section Start */}
            <hr className="gray-line" />
            <div className="our-team">
                <div className="container">
                    <h3 className="mgb-60">MEET OUR TEAM</h3>
                    <div className="row">
                        <OurTeamCard image={TeamMember1} imageThumb={TeamMember1} name={"JUDY WINTER"} desgination={"Model"} fblink={"#!"} iglink={"#!"} bhlink={"#!"} twlink={"#!"} vklink={"#!"} />
                        <OurTeamCard image={TeamMember2} imageThumb={TeamMember2} name={"BARNEY MOLLY"} desgination={"Creative Manager"} fblink={"#!"} iglink={"#!"} bhlink={"#!"} twlink={"#!"} vklink={"#!"} />
                        <OurTeamCard image={TeamMember3} imageThumb={TeamMember3} name={"JOHNSON SMITH"} desgination={"Stylist"} fblink={"#!"} iglink={"#!"} bhlink={"#!"} twlink={"#!"} vklink={"#!"} />
                        <OurTeamCard image={TeamMember4} imageThumb={TeamMember4} name={"LILA SIMPSON"} desgination={"Founder"} fblink={"#!"} iglink={"#!"} bhlink={"#!"} twlink={"#!"} vklink={"#!"} />
                    </div>
                </div>
            </div>
            {/* Meet Our Team Section End */}

        </>
    )
}
