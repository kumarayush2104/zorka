// Libraries
import React from 'react'
import { Link } from 'react-router-dom'

// Media
import Logo from '../assets/navbar/logo.png'

export default function Navbar() {
    return (
        <>
            <div className="topbar">
                <div className="container">
                    <div className="left-topbar">
                        WELCOME GUEST! <Link to="/Login-Register">LOG IN</Link> OR <Link to="/Login-Register">REGISTER</Link>
                    </div>
                    <div className="right-topbar">
                        <ul className="list-inline">
                            <li>
                                <div className="btn-group">
                                    <button className="dropdown dropdown-toggle" data-toggle="dropdown">
                                        <span>My Settings</span>
                                        <i className="pe-7s-angle-down"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="wishlist.html"><i className="fa fa-heart"></i> Wish List (0)</a>
                                        </li>
                                        <li>
                                            <a href="shopping-cart.html"><i className="fa fa-shopping-cart"></i> Shopping Cart</a>
                                        </li>
                                        <li>
                                            <a href="check-out.html"><i className="fa fa-share"></i> Checkout</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <form action="#">
                                    <div className="btn-group">
                                        <button className="dropdown dropdown-toggle" data-toggle="dropdown">
                                            <span>Language: </span>
                                            en
                                            <i className="pe-7s-angle-down"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a href="#"><img src="assets/images/flags/United-Kingdom.png" alt="English" title="English" /> English</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="assets/images/flags/France.png" alt="France" title="France" /> France</a>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </li>
                            <li>
                                <form action="#">
                                    <div className="btn-group">
                                        <button className="dropdown dropdown-toggle" data-toggle="dropdown">
                                            <span>Currency: </span>
                                            USD
                                            <i className="pe-7s-angle-down"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a href="#">€ Euro</a>
                                            </li>
                                            <li>
                                                <a href="#">£ Pound Sterling</a>
                                            </li>
                                            <li>
                                                <a href="#">$ US Dollar</a>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
            <hr className="gray-line" />
            <header>
                <div className="container">
                    <a className="logo" href="index.html">
                        <img src={Logo} alt="Zorka" />
                    </a>

                    <div className="header-social">
                        <ul className="list-social">
                            <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#" className="vk"><i className="fa fa-vk"></i></a></li>
                            <li><a href="#" className="behance"><i className="fa fa-behance"></i></a></li>
                        </ul>

                    </div>

                    <div className="top-cart">
                        <a href="shopping-cart.html">
                            <i className="pe-7s-cart"></i>
                            <span>2</span>
                        </a>
                    </div>
                    <nav className="main-nav">
                        <div className="minimal-menu">
                            <ul className="menu">
                                <li className="current-menu-item">
                                    <Link to="/">HOME</Link>
                                </li>
                                <li>
                                    <a href="shop-fullwidth.html">SHOP</a>
                                    <div className="menu-wrapper">
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <h3>MEN’S SHOES</h3>
                                            <hr />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta felis sed ma..</p>
                                            <div className="media">
                                                <div className="media-left">
                                                    <a href="shop-with-sidebar.html">
                                                        <img className="img-responsive" src="assets/images/small-product-img-1.jpg" alt="img" />
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <ul>
                                                        <li><a href="shop-with-sidebar.html">Dr Martens</a></li>
                                                        <li><a href="shop-with-sidebar.html">Sneaker</a></li>
                                                        <li><a href="shop-with-sidebar.html">Sport</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <h3>MEN'S SHIRT</h3>
                                            <hr />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta felis sed ma..</p>
                                            <div className="media">
                                                <div className="media-left">
                                                    <a href="shop-with-sidebar.html">
                                                        <img className="img-responsive" src="assets/images/small-product-img-2.jpg" alt="img" />
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <ul>
                                                        <li><a href="shop-with-sidebar.html">Jackets & Coats</a></li>
                                                        <li><a href="shop-with-sidebar.html">Polo Shirt</a></li>
                                                        <li><a href="shop-with-sidebar.html">T-shirt</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <h3>WOMEN'S TOP</h3>
                                            <hr />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta felis sed ma..</p>
                                            <div className="media">
                                                <div className="media-left">
                                                    <a href="shop-with-sidebar.html">
                                                        <img className="img-responsive" src="assets/images/small-product-img-3.jpg" alt="img" />
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <ul>
                                                        <li><a href="shop-with-sidebar.html">Crop Top</a></li>
                                                        <li><a href="shop-with-sidebar.html">Shirt</a></li>
                                                        <li><a href="shop-with-sidebar.html">T-shirt</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <h3>WOMEN'S BOTTOM</h3>
                                            <hr />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta felis sed ma..</p>
                                            <div className="media">
                                                <div className="media-left">
                                                    <a href="shop-with-sidebar.html">
                                                        <img className="img-responsive" src="assets/images/small-product-img-4.jpg" alt="img" />
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <ul>
                                                        <li><a href="shop-with-sidebar.html">Jeans</a></li>
                                                        <li><a href="shop-with-sidebar.html">Short</a></li>
                                                        <li><a href="shop-with-sidebar.html">Skirt</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/Portfolio">PORTFOLIO</Link>
                                </li>
                                <li>
                                    <a href="blog.html">BLOG</a>
                                    <ul className="sub-menu">
                                        <li><a href="single-post.html">Submenu 1</a></li>
                                        <li>
                                            <a href="single-post.html">Submenu 2</a>
                                            <ul className="sub-menu">
                                                <li><a href="single-post.html">Submenu 21</a></li>
                                                <li><a href="single-post.html">Submenu 22</a></li>
                                                <li><a href="single-post.html">Submenu 23</a></li>
                                                <li><a href="single-post.html">Submenu 24</a></li>
                                                <li><a href="single-post.html">Submenu 25</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="single-post.html">Submenu 3</a></li>
                                        <li><a href="single-post.html">Submenu 4</a></li>
                                        <li><a href="single-post.html">Submenu 5</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="page-with-sidebar.html">PAGES</a>
                                    <div className="menu-wrapper">
                                        <div className="box-product">
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <div className="product-item">
                                                    <div className="product-thumb">
                                                        <div className="main-img">
                                                            <a href="single-product.html">
                                                                <img className="img-responsive" src="assets/images/product-img-1.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                        <div className="overlay-img">
                                                            <a href="single-product.html">
                                                                <img className="img-responsive" src="assets/images/product-img-1-thumb.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                        <a href="single-product.html" className="details"><i className="pe-7s-search"></i></a>
                                                    </div>
                                                    <h4 className="product-name"><a href="single-product.html">HANDMADE FLARED JACKET</a></h4>
                                                    <p className="product-price">
                                                        189.99 USD
                                                    </p>
                                                    <div className="group-buttons">
                                                        <button type="button" className="add-to-cart" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                            <span>Add to Cart</span>
                                                        </button>
                                                        <button type="button" data-toggle="tooltip" data-placement="top" title="Compare this Product">
                                                            <i className="pe-7s-repeat"></i>
                                                        </button>
                                                        <button type="button" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                            <i className="pe-7s-like"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <div className="product-item has-deal">
                                                    <div className="product-thumb">
                                                        <div className="main-img">
                                                            <a href="single-product.html">
                                                                <img className="img-responsive" src="assets/images/product-img-2.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                        <div className="overlay-img">
                                                            <a href="single-product.html">
                                                                <img className="img-responsive" src="assets/images/product-img-2-thumb.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                        <div className="countdown" data-time="2017/09/06"></div>
                                                        <div className="product-sale">
                                                            -25%
                                                        </div>
                                                        <a href="single-product.html" className="details"><i className="pe-7s-search"></i></a>
                                                    </div>
                                                    <h4 className="product-name"><a href="single-product.html">COAT WITH WOOL WRAPAROUND COLLAR</a></h4>
                                                    <p className="product-price">
                                                        <ins><span className="amount">100.99 USD</span></ins>
                                                        <del><span className="amount">189.99 USD</span></del>
                                                    </p>
                                                    <div className="group-buttons">
                                                        <button type="button" className="add-to-cart" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                            <span>Add to Cart</span>
                                                        </button>
                                                        <button type="button" data-toggle="tooltip" data-placement="top" title="Compare this Product">
                                                            <i className="pe-7s-repeat"></i>
                                                        </button>
                                                        <button type="button" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                            <i className="pe-7s-like"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <div className="product-item has-deal">
                                                    <div className="product-thumb">
                                                        <div className="main-img">
                                                            <a href="single-product.html">
                                                                <img className="img-responsive" src="assets/images/product-img-3.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                        <div className="overlay-img">
                                                            <a href="single-product.html">
                                                                <img className="img-responsive" src="assets/images/product-img-3-thumb.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                        <div className="countdown" data-time="2017/09/06"></div>
                                                        <div className="product-new">
                                                            NEW
                                                        </div>
                                                        <a href="single-product.html" className="details"><i className="pe-7s-search"></i></a>
                                                    </div>
                                                    <h4 className="product-name"><a href="single-product.html">UTILITY JACKET</a></h4>
                                                    <p className="product-price">
                                                        189.99 USD
                                                    </p>
                                                    <div className="group-buttons">
                                                        <button type="button" className="add-to-cart" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                            <span>Add to Cart</span>
                                                        </button>
                                                        <button type="button" data-toggle="tooltip" data-placement="top" title="Compare this Product">
                                                            <i className="pe-7s-repeat"></i>
                                                        </button>
                                                        <button type="button" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                            <i className="pe-7s-like"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <div className="product-item">
                                                    <div className="product-thumb">
                                                        <div className="main-img">
                                                            <a href="single-product.html">
                                                                <img className="img-responsive" src="assets/images/product-img-4.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                        <div className="overlay-img">
                                                            <a href="single-product.html">
                                                                <img className="img-responsive" src="assets/images/product-img-4-thumb.jpg" alt="img" />
                                                            </a>
                                                        </div>
                                                        <a href="single-product.html" className="details"><i className="pe-7s-search"></i></a>
                                                    </div>
                                                    <h4 className="product-name"><a href="single-product.html">ANIMAL PRINT COAT</a></h4>
                                                    <p className="product-price">
                                                        189.99 USD
                                                    </p>
                                                    <div className="group-buttons">
                                                        <button type="button" className="add-to-cart" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                            <span>Add to Cart</span>
                                                        </button>
                                                        <button type="button" data-toggle="tooltip" data-placement="top" title="Compare this Product">
                                                            <i className="pe-7s-repeat"></i>
                                                        </button>
                                                        <button type="button" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                            <i className="pe-7s-like"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><Link to="/Contacts">CONTACT</Link></li>
                                <li className="hidden-xs">
                                    <div className="wrap-search">
                                        <form action="#" className="search-form">
                                            <input type="text" placeholder="Search.." />
                                            <button type="submit"><i className="pe-7s-search"></i></button>
                                        </form>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

        </>
    )
}
