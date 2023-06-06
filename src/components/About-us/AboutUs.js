// Libraries
import React from 'react'
import OwlCarousel from 'react-owl-carousel';

// Components
import OurServiceCard from './OurServiceCard'
import BrandCard from '../Home/BrandCard'
import OurTeamCard from './OurTeamCard';
import OurNumbersCard from './OurNumbersCard';
import TestimonialCard from './TestimonialCard';
import OurOfficeCard from './OurOfficeCard';

// Media
import Banner from '../../assets/about-us/about-company-banner.jpg'
import Banner1 from '../../assets/about-us/about-company-banner-title-1.png'
import Banner2 from '../../assets/about-us/about-company-banner-title-2.png'
import OfficeImage1 from '../../assets/about-us/office-1.jpg'
import OfficeImage2 from '../../assets/about-us/office-2.jpg'
import OfficeImage3 from '../../assets/about-us/office-3.jpg'
import OfficeImage4 from '../../assets/about-us/office-4.jpg'
import BershkaImage from '../../assets/home/bershka.png';
import PullBearImage from '../../assets/home/pull-bear.png';
import HMImage from '../../assets/home/hm.png';
import ZaraImage from '../../assets/home/zara.png';
import MangoImage from '../../assets/home/mango.png';
import TeamMember1 from '../../assets/about-us/team-img-1.jpg'
import TeamMember2 from '../../assets/about-us/team-img-2.jpg'
import TeamMember3 from '../../assets/about-us/team-img-3.jpg'
import TeamMember4 from '../../assets/about-us/team-img-4.jpg'
import OurNumberBanner from '../../assets/about-us/home-bg-7.jpg'
import TestimonialImage1 from '../../assets/about-us/testimonial-avatar2.png'

export default function AboutUs() {

    const carousel3Options = {
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    }

    const TestimonialCarousel = {
        loop: true,
        items: 1,
        dots: true,
        navigation: false,
        pagination: true,
        dotsSpeed: 1000,
    }

    return (
        <>
            {/* Page Banner Start */}
            <div className="about-company-banner parallax" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="wrapper">
                    <div className="middle">
                        <div>
                            <img className="content-img" src={Banner1} alt="img" />
                            <img className="content-img" src={Banner2} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Banner End */}

            {/* Our Services Section Start */}
            <div className="theme-features center-features">
                <div className="container">
                    <h3 className="mgb-60">OUR SERVICES</h3>
                    <div className="row">
                        <OurServiceCard icon={"pe-7s-star"} title={"CLEAN DESIGN"} content={"Fusce ac odio odio. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."} />
                        <OurServiceCard icon={"pe-7s-mail-open-file"} title={"LOADED WITH POWERCOMPLETELY CUSTOMIZABLE"} content={"Fusce ac odio odio. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."} />
                        <OurServiceCard icon={"pe-7s-cart"} title={"COMPLETELY CUSTOMIZABLE"} content={"Fusce ac odio odio. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."} />
                        <OurServiceCard icon={"pe-7s-mouse"} title={"FREE UPDATE & SUPPORT"} content={"Fusce ac odio odio. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."} />
                        <OurServiceCard icon={"pe-7s-gift"} title={"CHOOSE THE PRODUCT YOU LOVE"} content={"Fusce ac odio odio. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."} />
                        <OurServiceCard icon={"pe-7s-wristwatch"} title={"STYLE FOR EVERY BUDGET"} content={"Fusce ac odio odio. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."} />
                    </div>
                </div>
            </div>
            {/* Our Service Section End */}

            {/* Our Office Section Start */}
            <hr className="gray-line" />
            <div className="our-office">
                <div className="container-fluid">
                    <h3 className="mgb-60">OUR OFFICE</h3>
                    <div className="row">
                        <OurOfficeCard image={OfficeImage1} imageThumb={OfficeImage1} />
                        <OurOfficeCard image={OfficeImage2} imageThumb={OfficeImage2} />
                        <OurOfficeCard image={OfficeImage3} imageThumb={OfficeImage3} />
                        <OurOfficeCard image={OfficeImage4} imageThumb={OfficeImage4} />
                    </div>
                </div>
            </div>
            {/* Our Office Section End */}

            {/* Testimonial Section Start */}
            <div className="testimonial-block">
                <div className="container">
                    <h3 className="mgb-60">WHAT THEY SAY</h3>
                    <OwlCarousel id="carousel-8" className="owl-theme" {...TestimonialCarousel} >
                        <TestimonialCard image={TestimonialImage1} title={"ANNA PANDORA"} desgination={"Stylist"} content={"Etiam accumsan est arcu. Quisque a metus eu tempor. Nullam purus eros, elementum imperdiet lacus. Vestibulum imperdiet, leo id tempus mollis ..."} />
                        <TestimonialCard image={TestimonialImage1} title={"ANNA PANDORA"} desgination={"Stylist"} content={"Etiam accumsan est arcu. Quisque a metus eu tempor. Nullam purus eros, elementum imperdiet lacus. Vestibulum imperdiet, leo id tempus mollis ..."} />
                        <TestimonialCard image={TestimonialImage1} title={"ANNA PANDORA"} desgination={"Stylist"} content={"Etiam accumsan est arcu. Quisque a metus eu tempor. Nullam purus eros, elementum imperdiet lacus. Vestibulum imperdiet, leo id tempus mollis ..."} />
                    </OwlCarousel>
                </div>
            </div>
            {/* Testimonial Section End */}

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

            {/* Our Number Section Start */}
            <div className="parallax-banner-3 parallax" style={{ backgroundImage: `url(${OurNumberBanner})` }}>
                <div className="container">
                    <div className="row">
                        <OurNumbersCard title="LOVELY CUSTOMERS" number="45000" />
                        <OurNumbersCard title="FACEBOOK FANS" number="7750" />
                        <OurNumbersCard title="PRODUCTS" number="19500" />
                        <OurNumbersCard title="RATINGS" number="3570" />
                    </div>
                </div>
            </div>
            {/* Our Number Section End */}

            {/* Brands Section Start */}
            <div className="brand-logos">
                <div className="container">
                    <OwlCarousel id='carousel-3' className='owl-theme' {...carousel3Options}>
                        <BrandCard image={BershkaImage} title={"Bershka"} />
                        <BrandCard image={PullBearImage} title={"Pull & Bear"} />
                        <BrandCard image={HMImage} title={"H & M"} />
                        <BrandCard image={ZaraImage} title={"Zara"} />
                        <BrandCard image={MangoImage} title={"Mango"} />
                        <BrandCard image={PullBearImage} title={"Pull & Bear"} />
                        <BrandCard image={HMImage} title={"H & M"} />
                    </OwlCarousel>
                </div>
            </div>
            {/* Brands Section End */}
        </>
    )
}
