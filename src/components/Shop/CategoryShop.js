// Libraries
import React, { useEffect } from 'react'

// Components
import CategoryShopCard from './CategoryShopCard'

// Media
import Image1 from '../../assets/shop/product-img-1.jpg'
import Image2 from '../../assets/shop/product-img-2.jpg'
import Image3 from '../../assets/shop/product-img-3.jpg'
import Image4 from '../../assets/shop/product-img-4.jpg'
import Image5 from '../../assets/shop/product-img-5.jpg'
import Image6 from '../../assets/shop/product-img-6.jpg'
import Image7 from '../../assets/shop/product-img-7.jpg'
import Image8 from '../../assets/shop/product-img-8.jpg'
import ImageThumb1 from '../../assets/shop/product-img-1-thumb.jpg'
import ImageThumb2 from '../../assets/shop/product-img-2-thumb.jpg'
import ImageThumb3 from '../../assets/shop/product-img-3-thumb.jpg'
import ImageThumb4 from '../../assets/shop/product-img-4-thumb.jpg'
import ImageThumb5 from '../../assets/shop/product-img-5-thumb.jpg'
import ImageThumb6 from '../../assets/shop/product-img-6-thumb.jpg'
import ImageThumb7 from '../../assets/shop/product-img-7-thumb.jpg'
import ImageThumb8 from '../../assets/shop/product-img-8-thumb.jpg'
import BannerImage from '../../assets/shop/shop-banner.jpg'

export default function CategoryShop() {

    useEffect(() => {
        window.$(($) => {
            // Fancy select init
            if ($('.custom-select').length) {
                var mySelect = $('.custom-select');
                mySelect.fancySelect().on('change.fs', function () {
                    var raw_val = $(this).parent().find('.options').find('.selected').attr('data-raw-value');
                    $(this).find('option').removeAttr('selected').filter('[value=' + raw_val + ']').attr('selected', true);
                }
                );
            }
        })
    }, [])

    return (
        <>
            <div className="parallax-shop-banner parallax" style={{ background: `url(${BannerImage}` }}>
                <h1>MEN' CLOTHING</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec feugiat turpis. Pellentesque tellus sapien, ultricies vel ultricies quis, scelerisque ac erat. Fusce eget urna et lacus venenatis dignissim quis sed ex. Aliquam erat volutpat. Fusce volutpat iaculis risus, sit amet maximus elit dapibus nec. Nulla rhoncus est id blandit feugiat.</p>
            </div>
            <div className="main">
                <div className="container">
                    <div className="main-content">
                        <div className="top-products">
                            <div className="showing-results">
                                SHOWING 1-12 OF 100 RESULTS
                            </div>

                            {/* Sorting options Start */}
                            <div className="sortby">
                                <select className="custom-select">
                                    <option value="0">DEFAULT SORTING</option>
                                    <option value="1">Price: Lowest First</option>
                                    <option value="2">Price: Highest First</option>
                                    <option value="3">Best seller</option>
                                </select>
                            </div>
                            {/* Sorting Options End*/}

                        </div>

                        {/* Products List Section Start */}
                        <div className="box-product row">
                            <CategoryShopCard image={Image1} imageThumb={ImageThumb1} amount={189.99} title={"HANDMADE FLARED JACKET"} />
                            <CategoryShopCard image={Image3} imageThumb={ImageThumb3} amount={189.99} title={"UTILITY JACKET"} />
                            <CategoryShopCard image={Image3} imageThumb={ImageThumb3} amount={189.99} title={"UTILITY JACKET"} />
                            <CategoryShopCard image={Image2} imageThumb={ImageThumb2} amount={189.99} title={"COAT WITH WOOL WRAPAROUND COLLAR"} discount={25} amountNow={100.99} new={true} />

                            <CategoryShopCard image={Image4} imageThumb={ImageThumb4} amount={189.99} title={"ANIMAL PRINT COAT"} />
                            <CategoryShopCard image={Image5} imageThumb={ImageThumb5} amount={189.99} title={"HANDMADE FLARED JACKET"} />
                            <CategoryShopCard image={Image6} imageThumb={ImageThumb6} amount={189.99} title={"UTILITY JACKET"} />
                            <CategoryShopCard image={Image7} imageThumb={ImageThumb7} amount={189.99} title={"COAT WITH WOOL WRAPAROUND COLLAR"} discount={25} amountNow={100.99} new={true} />

                            <CategoryShopCard image={Image8} imageThumb={ImageThumb8} amount={189.99} title={"ANIMAL PRINT COAT"} />
                            <CategoryShopCard image={Image3} imageThumb={ImageThumb3} amount={189.99} title={"UTILITY JACKET"} new={true} />
                            <CategoryShopCard image={Image2} imageThumb={ImageThumb2} amount={189.99} title={"COAT WITH WOOL WRAPAROUND COLLAR"} discount={25} amountNow={100.99} new={true} />
                            <CategoryShopCard image={Image4} imageThumb={ImageThumb4} amount={189.99} title={"ANIMAL PRINT COAT"} />
                        </div>
                        {/* Products List Section End */}

                        {/* Pagination Start */}
                        <nav className="pagination">
                            <ul className="page-numbers">
                                <li><a href="#">1</a></li>
                                <li><span className="current">2</span></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">6</a></li>
                                <li><a className="last " href="#"><i className="fa fa-angle-double-right"></i></a></li>
                            </ul>
                        </nav>
                        {/* Pagination End */}

                    </div>
                </div>
            </div>
        </>
    )
}
