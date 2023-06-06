// Libraries
import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Components
import BlogCard from './BlogCard';
import BrandCard from './BrandCard'
import OurServiceCard from './OurServiceCard'
import OurFeatureCard from './OurFeatureCard';
import CustomBlockProductCard from './CustomBlockProductCard';
import CustomBlockCard from './CustomBlockCard';
import SaleProductCard from './SaleProductCard';
import StoreCard from './StoreCard';

// Media
import SlideShowImage1 from '../../assets/home/slideshow1.jpg';
import SlideShow1Content1 from '../../assets/home/slide1-content-1.png';
import SlideShow1Content2 from '../../assets/home/slide1-content-2.png';
import SlideShowImage2 from '../../assets/home/slideshow2.jpg';
import SlideShow2Content1 from '../../assets/home/slide2-content-1.png';
import SlideShow2Content2 from '../../assets/home/slide2-content-2.png';
import SlideShowImage3 from '../../assets/home/slideshow3.jpg';
import SlideShow3Content1 from '../../assets/home/slide3-content-1.png';
import SlideShow3Content2 from '../../assets/home/slide3-content-2.png';
import StoreBackground1 from '../../assets/home/home-bg-1.jpg'
import StoreBackground2 from '../../assets/home/home-bg-2.jpg'
import FeaturedImage1 from '../../assets/home/featured-img-1.jpg';
import FeaturedImage2 from '../../assets/home/featured-img-2.jpg';
import TopRatedImage1 from '../../assets/home/toprated-img-1.jpg';
import TopRatedImage2 from '../../assets/home/toprated-img-2.jpg';
import ProductImage1 from '../../assets/home/product-img-1.jpg';
import ProductImageThumb1 from '../../assets/home/product-img-1-thumb.jpg';
import ProductImage2 from '../../assets/home/product-img-2.jpg';
import ProductImageThumb2 from '../../assets/home/product-img-2-thumb.jpg';
import ProductImage3 from '../../assets/home/product-img-3.jpg';
import ProductImageThumb3 from '../../assets/home/product-img-3-thumb.jpg';
import ProductImage4 from '../../assets/home/product-img-4.jpg';
import ProductImageThumb4 from '../../assets/home/product-img-4-thumb.jpg';
import ProductImage5 from '../../assets/home/product-img-5.jpg';
import ProductImageThumb5 from '../../assets/home/product-img-5-thumb.jpg';
import ProductImage6 from '../../assets/home/product-img-6.jpg';
import ProductImageThumb6 from '../../assets/home/product-img-6-thumb.jpg';
import ProductImage7 from '../../assets/home/product-img-7.jpg';
import ProductImageThumb7 from '../../assets/home/product-img-7-thumb.jpg';
import ProductImage8 from '../../assets/home/product-img-8.jpg';
import ProductImageThumb8 from '../../assets/home/product-img-8-thumb.jpg';
import NewInImage1 from '../../assets/home/new-in-img-1.jpg';
import NewInImage2 from '../../assets/home/new-in-img-2.jpg';
import BershkaImage from '../../assets/home/bershka.png';
import PullBearImage from '../../assets/home/pull-bear.png';
import HMImage from '../../assets/home/hm.png';
import ZaraImage from '../../assets/home/zara.png';
import MangoImage from '../../assets/home/mango.png';
import BlogImage1 from '../../assets/home/blog-img-1.jpg';
import BlogImage2 from '../../assets/home/blog-img-2.jpg';
import BlogImage3 from '../../assets/home/blog-img-3.jpg';
import SubscribeImage from '../../assets/home/home-bg-3.jpg';

export default function Home() {

    useEffect(() => {
        window.$('#slideshow1').allinone_bannerRotator({
            skin: 'universal', width: 1920, height: 700, responsive: true, thumbsWrapperMarginBottom: 35, showCircleTimer: false, showNavArrows: false, autoHideBottomNav: false, showPreviewThumbs: false
        })
    }, [])

    const carousel2Option = {
        autoplay: true,
        loop: true,
        items: 1,
        dots: false,
        smartSpeed: 1500
    }

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

    return (
        <>
            {/* Page Banner Section Start  */}
            <div className="slideshow">
                <div id="slideshow1">
                    <ul className="allinone_bannerRotator_list">
                        <li data-text-id="#content_ss_1"><img src={SlideShowImage1} alt="img" /></li>
                        <li data-text-id="#content_ss_2"><img src={SlideShowImage2} alt="img" /></li>
                        <li data-text-id="#content_ss_3"><img src={SlideShowImage3} alt="img" /></li>
                    </ul>
                    <div id="content_ss_1" className="allinone_bannerRotator_texts">
                        <div className="content-slideshow" data-initial-left="50" data-initial-top="280" data-final-left="0" data-final-top="280" data-duration="0.7" data-fade-start="0" data-delay="0.2">
                            <img className="content-img" src={SlideShow1Content1} alt="img" />
                        </div>
                        <div className="content-slideshow" data-initial-left="50" data-initial-top="320" data-final-left="0" data-final-top="320" data-duration="0.6" data-fade-start="0" data-delay="0.6">
                            <img className="content-img" src={SlideShow1Content2} alt="img" />
                        </div>
                        <div className="content-link" data-initial-top="440" data-final-top="440" data-duration="0.6" data-fade-start="0" data-delay="1">
                            <a className="link" href="#">Shop now</a>
                        </div>
                    </div>
                    <div id="content_ss_2" className="allinone_bannerRotator_texts">
                        <div className="content-slideshow" data-initial-top="0" data-final-top="270" data-duration="0.6" data-fade-start="0" data-delay="0.2">
                            <img className="content-img" src={SlideShow2Content1} alt="img" />
                        </div>
                        <div className="content-slideshow" data-initial-top="380" data-final-top="380" data-final-left="16" data-duration="0.6" data-fade-start="0" data-delay="0.8">
                            <img className="content-img" src={SlideShow2Content2} alt="img" />
                        </div>
                    </div>
                    <div id="content_ss_3" className="allinone_bannerRotator_texts">
                        <div className="content-slideshow" data-initial-top="480" data-final-top="280" data-duration="0.6" data-fade-start="0" data-delay="0.2">
                            <img className="content-img" src={SlideShow3Content1} alt="img" />
                        </div>
                        <div className="content-slideshow" data-initial-left="200" data-initial-top="340" data-final-left="0" data-final-top="340" data-duration="0.6" data-fade-start="0" data-delay="0.6">
                            <img className="content-img" src={SlideShow3Content2} alt="img" />
                        </div>
                        <div className="content-link" data-initial-left="100" data-initial-top="420" data-final-left="0" data-final-top="420" data-duration="0.6" data-fade-start="0" data-delay="1">
                            <a className="link" href="#">Shop now</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Banner Section End */}

            {/* Our Features Section Start */}
            <div className="features">
                <div className="container">
                    <div className="row">
                        <OurFeatureCard icon={"pe-7s-cart"} title={"FREE SHIPPING WORLDWIDE"} color1={"#ca7379"} color2={"#b5676d"} />
                        <OurFeatureCard icon={"pe-7s-gift"} title={"GIVEAWAY EVERYWEEK"} color1={"#c1ac91"} color2={"#ad9a82"} />
                        <OurFeatureCard icon={"pe-7s-diamond"} title={"SALE UP TO 70% OFF ON TUESDAY"} color1={"#8090a1"} color2={"#738191"} />
                    </div>
                </div>
            </div>
            {/* Our Features Section End */}

            {/* Store Section Start */}
            < div className="custom-boxes" >
                <div className="container">
                    <div className="row">
                        <StoreCard image={StoreBackground1} title={<>ZORKA<br />FASHION<br />STORE</>} />
                        <StoreCard image={StoreBackground2} title={<>50% OFF<br />EVERY TUESDAY</>} />
                    </div>
                </div>
            </div >
            {/* Store Section End */}

            {/* Sale Off Section Start */}
            <div className="sale-off">
                <div className="container">
                    <h3>SALE OFF</h3>
                    <h5>Up to 50%</h5>
                    <OwlCarousel id="carousel-2" className='owl-theme' {...carousel2Option}>
                        <div className="box-content">
                            <div className="showcase">
                                <div className="row">
                                    <div className="box-product">
                                        <SaleProductCard title={"HOODED BOMBER JACKET"} image={ProductImage5} imageThumb={ProductImageThumb5} amount={"100.99"} actualAmount={"189.99"} discount={"25"} />
                                        <SaleProductCard title={"STRUCTURED COLLARLESS COAT"} image={ProductImage6} imageThumb={ProductImageThumb6} amount={"100.99"} actualAmount={"189.99"} discount={"25"} />
                                        <SaleProductCard title={"HOUNDSTOOTH WOOL COAT"} image={ProductImage7} imageThumb={ProductImageThumb7} amount={"100.99"} actualAmount={"189.99"} discount={"25"} />
                                        <SaleProductCard title={"COAT WITH WRAPAROUND COLLAR"} image={ProductImage8} imageThumb={ProductImageThumb8} amount={"100.99"} actualAmount={"189.99"} discount={"25"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-content">
                            <div className="showcase">
                                <div className="row">
                                    <div className="box-product">
                                        <SaleProductCard title={"COAT WITH WOOL WRAPAROUND COLLAR"} image={ProductImage2} imageThumb={ProductImageThumb2} amount={"100.99"} actualAmount={"189.99"} discount={"25"} />
                                        <SaleProductCard title={"HANDMADE FLARED JACKET"} image={ProductImage1} imageThumb={ProductImageThumb1} amount={"100.99"} actualAmount={"189.99"} discount={"25"} />
                                        <SaleProductCard title={"UTILITY JACKET"} image={ProductImage3} imageThumb={ProductImageThumb3} amount={"100.99"} actualAmount={"189.99"} discount={"25"} />
                                        <SaleProductCard title={"ANIMAL PRINT COAT"} image={ProductImage4} imageThumb={ProductImageThumb4} amount={"100.99"} actualAmount={"189.99"} discount={"25"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav">
                            <span className="prev"><i className="fa fa-angle-left"></i></span>
                            <span className="next"><i className="fa fa-angle-right"></i></span>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            {/* Sale Off Section End */}

            {/* Custom Block Section Start */}
            <div className="custom-blocks">
                <div className="container">
                    <div className="row">

                        <CustomBlockCard title="NEW-IN" content={<>
                            <CustomBlockProductCard image={NewInImage1} title="PARKA WITH FAUX FUR HOOD" amount="189.99" />
                            <CustomBlockProductCard image={NewInImage2} title="BOMBER JACKET" amount="189.99" />
                        </>} />

                        <CustomBlockCard title="FEATURED" content={<>
                            <CustomBlockProductCard image={FeaturedImage1} title="HANDMADE FLARED JACKET" amount="189.99" />
                            <CustomBlockProductCard image={FeaturedImage2} title="SHORT KNIT COAT WITH BELT" amount="189.99" />
                        </>} />

                        <CustomBlockCard title="TOP RATED" content={<>
                            <CustomBlockProductCard image={TopRatedImage1} title="OVERSIZE BOMBER JACKET" amount="189.99" />
                            <CustomBlockProductCard image={TopRatedImage2} title="HANDMADE FLARED JACKET" amount="189.99" />
                        </>} />
                    </div>
                </div>
            </div >
            {/* Custom Block Section End */}

            {/* Blog Post Section Start */}
            < div className="blog-post" >
                <div className="container">
                    <h3>BLOG UPDATES</h3>
                    <h5>Our stories</h5>
                    <div className="row">
                        <BlogCard image={BlogImage1} title={"MIX & MATCH WEEKEND"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tincidunt eros ..."} location={"#!"} />
                        <BlogCard image={BlogImage2} title={"FOR YOUR INSPIRATION"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tincidunt eros ..."} location={"#!"} />
                        <BlogCard image={BlogImage3} title={"LONDON FASHION WEEK 2015"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tincidunt eros ..."} location={"#!"} />
                    </div>
                </div>
            </div >
            {/* Blog Post Section End */}

            {/* Subscribe Section Start */}
            <div className="subscribe parallax" style={{ backgroundImage: `url(${SubscribeImage})` }}>
                <div className="container">
                    <i className="pe-7s-mail"></i>
                    <h3>SUBSCRIBE</h3>
                    <h5>Get the latest news & updates from Zorka</h5>
                    <form action="http://nouthemes.com/html/zorka/subscribe.php" method="post" className="subscribe-form">
                        <input type="email" name="your_email" placeholder="YOUR EMAIL ADDRESS" />
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                    <div className="row">
                        <div className="col-sm-4 col-sm-offset-4">
                            <div className="form-note"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Subscribe Section End */}

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

            <hr className="gray-line" />

            {/* Our Service Section Start */}
            <div className="locations">
                <div className="container">
                    <div className="row">
                        <OurServiceCard image={"pe-7s-alarm"} title={"OPENING ALL WEEK"} content={"8AM : 8PM"} />
                        <OurServiceCard image={"pe-7s-medal"} title={"25% OFF WOMEN T-SHIRT"} content={"On order over 500USD"} />
                        <OurServiceCard image={"pe-7s-world"} title={"FREE SHIP ALL ORDER"} content={"Worldwide shipping"} />
                    </div>
                </div>
            </div>
            {/* Our Service Section End */}
        </>
    )
}
