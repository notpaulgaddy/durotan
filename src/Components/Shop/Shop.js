import React, { useRef,useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarLink from "../Navbar/NavbarLink";

function Shop() {
    return (
        <body className="404">
            <div id="main">
                <div className="shop-breadcrumb">

                    <div className="container container--type-2">

                        <ol className="breadcrumb text-uppercase">
                            <li className="breadcrumb__item"><a href="index.html">home </a></li>
                            <li className="breadcrumb__item"><a href="shop.html">shop</a></li>
                            <li className="breadcrumb__item active" aria-current="page">Shop grid 3 column</li>
                        </ol>


                        <h1 className="shop-breadcrumb__title">Men’s Clothing</h1>

                    </div>

                </div>


                <div className="collection">

                    <div className="container container--type-2">
                        <div className="collection__top-filter clearfix">
                            <div className="top-filter__button js-open-collection-filter"><i className="lnil lnil-control-panel"></i> Filter</div>

                            <ul className="top-filter__current-tags">
                                <li><a href="#">Brown</a></li>
                                <li><a href="#">XXL</a></li>
                                <li><a href="#">From 100$</a></li>
                            </ul>
                            <div className="collection__sort-and-view d-flex align-items-center">
                                <div className="products-sort-by d-flex align-items-center">
                                    <label for="sort-by">Sort by</label>
                                    <div className="products-sort-by__select">
                                        <i className="lnil lnil-chevron-down"></i>
                                        <select id="sort-by">
                                            <option>Popularity</option>
                                            <option>Featured</option>
                                            <option>Price</option>
                                            <option>Default</option>
                                        </select>
                                    </div>
                                </div>
                                <ul className="products-view d-flex align-items-center">
                                    <li><a href="shop-2.html" className="open-tooltip"><span className="custom-tooltip">Grid default</span><i className="lnil lnil-thumbnail"></i></a></li>
                                    <li><a href="shop.html" className="active open-tooltip"><span className="custom-tooltip">Grid large</span><i className="lnil lnil-grid-alt"></i></a></li>
                                    <li><a href="shop-3.html" className="open-tooltip"><span className="custom-tooltip">List default</span><i className="lnil lnil-list-alt-1"></i></a></li>
                                </ul>

                            </div>
                            <div className="collection__founded-products">
                                <span>24</span> Products found
                            </div>
                        </div>
                        <div className="open-mobile-top-filter js-open-mobile-filter">
                            <i className="lnil lnil-control-panel"></i>
                            <span>Show filters</span>
                        </div>

                        <div className="top-filter js-top-filter">
                            <div className="top-filter__close-background js-close-filter"></div>
                            <div className="top-filter__background">
                                <div className="top-filter__close">
                                    <a href="#" className="js-close-filter"><i className="lnil lnil-close"></i></a>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-25">
                                        <div className="top-filter__widget">

                                            <h2 className="widget__title">Category</h2>
                                            <ul className="widget__collections">
                                                <li><a href="#">Coats</a></li>
                                                <li><a href="#">Jackets</a></li>
                                                <li><a href="#">Cardigans & Sweaters</a></li>
                                                <li><a href="#">Blazers</a></li>
                                                <li><a href="#">Swearshirts</a></li>
                                                <li><a href="#">Shirts</a></li>
                                                <li><a href="#">T-Shirts</a></li>
                                                <li><a href="#">Polos</a></li>
                                                <li><a href="#">Jeans</a></li>
                                                <li><a href="#">Underwear</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-25">
                                        <div className="top-filter__widget">

                                            <h2 className="widget__title">Materials</h2>
                                            <ul className="widget__checkbox-options">
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="materials" checked />
                                                        <span>Cotton</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="materials" />
                                                        <span>Down</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="materials" />
                                                        <span>Houndstooth</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="materials" />
                                                        <span>Leather</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="materials" />
                                                        <span>Nappa Leather</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="materials" />
                                                        <span>Suede</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="materials" />
                                                        <span>Wool</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-25">
                                        <div className="top-filter__widget">

                                            <h2 className="widget__title">Colors</h2>
                                            <ul className="widget__checkbox-options">
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="colors" checked />
                                                        <span>Black</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="colors" />
                                                        <span>White</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="colors" />
                                                        <span>Red</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="colors" />
                                                        <span>Orange</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="colors" />
                                                        <span>Green</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="colors" />
                                                        <span>Pink</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="colors" />
                                                        <span>Brown</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="colors" />
                                                        <span>Grey</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="colors" />
                                                        <span>Beige</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-25">
                                        <div className="top-filter__widget">

                                            <h2 className="widget__title">Size</h2>
                                            <ul className="widget__checkbox-options">
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="size" checked />
                                                        <span>XS</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="size" />
                                                        <span>S</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="size" />
                                                        <span>M</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="size" />
                                                        <span>L</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="size" />
                                                        <span>XL</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="size" />
                                                        <span>XXL</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-25">

                                        <div className="top-filter__widget">

                                            <h2 className="widget__title">Price</h2>


                                            <div className="widget__price-slider">
                                                <div className="js-price-slider"></div>
                                                <div className="price-slider__value">
                                                    <span>From</span>
                                                    <input type="text" className="js-price-slider-value" />
                                                </div>
                                            </div>


                                            <div className="widget__view-result">
                                                <a href="#" className="third-button">View Result (25)</a>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="row products-row" id="product-list">
                        </div>
                    </div>
                    <div className="loading-spin text-center">
                        <div className="loader"></div>
                    </div>
                </div>

            </div>
            <div className="recently-viewed">

                <div className="container container--type-2">

                    <h3 className="recently-viewed__title">Recently Viewed</h3>
                    <div className="search-popups__results-products d-flex">
                        <div className="result-product">
                            <div className="result-product__image">
                                <a href="product.html">
                                    <img
                                        alt="Image"
                                        data-sizes="auto"
                                        data-srcset="/public/products/1/2_1-a.jpg 400w,
                  /public/products/1/2_1-a.jpg 800w"
                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        className="lazyload" />
                                </a>
                            </div>
                            <div className="result-product__name"><a href="product.html">Double-breasted wool Tailored coat</a></div>
                            <div className="result-product__price">$56.99</div>

                        </div>
                        <div className="result-product">
                            <div className="result-product__image">
                                <a href="product.html">
                                    <img
                                        alt="Image"
                                        data-sizes="auto"
                                        data-srcset="/public/products/1/2_2-a.jpg 400w,
                  /public/products/1/2_2-a.jpg 800w"
                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        className="lazyload" />
                                </a>
                            </div>
                            <div className="result-product__name"><a href="product.html">Slim fit modal cotton shirt</a></div>

                            <div className="result-product__price">$59.99</div>
                        </div>
                        <div className="result-product">
                            <div className="result-product__image">
                                <a href="product.html">
                                    <img
                                        alt="Image"
                                        data-sizes="auto"
                                        data-srcset="/public/products/1/2_3-a.jpg 400w,
                  /public/products/1/2_3-a.jpg 800w"
                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        className="lazyload" />
                                </a>
                            </div>


                            <div className="result-product__name"><a href="product.html">Wool/Cashmera basic cardigan</a></div>


                            <div className="result-product__price">$49.5</div>

                        </div>


                        <div className="result-product">

                            <div className="result-product__image">
                                <a href="product.html">
                                    <img
                                        alt="Image"
                                        data-sizes="auto"
                                        data-srcset="/public/products/1/2_4-a.jpg 400w,
                  /public/products/1/2_4-a.jpg 800w"
                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        className="lazyload" />
                                </a>
                            </div>


                            <div className="result-product__name"><a href="product.html">Regular fit striped cotton shirt</a></div>


                            <div className="result-product__price">$79.99</div>

                        </div>


                        <div className="result-product">

                            <div className="result-product__image">
                                <a href="product.html">
                                    <img
                                        alt="Image"
                                        data-sizes="auto"
                                        data-srcset="/public/products/1/3_1-a.jpg 400w,
                  /public/products/1/3_1-a.jpg 800w"
                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        className="lazyload" />
                                </a>
                            </div>


                            <div className="result-product__name"><a href="product.html">Slim fit modal cotton shity</a></div>


                            <div className="result-product__price">

                                <span className="result-product__price-new">$79.99</span>


                                <span className="result-product__price-old">$99.99</span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>



            <div className="search-popup js-search-popup">
                <div className="search-popup__close">
                    <a href="#" className="js-close-search-popup"><i className="lnil lnil-close"></i></a>
                </div>

                <div className="container container--type-2">
                    <h5 className="search-popup__title">Search</h5>
                    <ul className="search-popup__categories">
                        <li><a href="#" className="active">All</a></li>
                        <li><a href="#">Clothings</a></li>
                        <li><a href="#">Shoes</a></li>
                        <li><a href="#">Bags</a></li>
                        <li><a href="#">Accessories</a></li>
                    </ul>
                    <form className="search-popup__form">
                        <input type="text" className="search-popup__input" placeholder="Search here..." />
                    </form>
                    <div className="search-popups__results">
                        <h6 className="search-popup__results-heading">Search results</h6>
                        <div className="search-popups__results-products d-flex">

                            <div className="result-product">

                                <div className="result-product__image">
                                    <a href="product.html">
                                        <img src="/public/products/1/2_1-a.jpg" alt="Product image" />
                                    </a>
                                </div>


                                <div className="result-product__name"><a href="product.html">Double-breasted wool Tailored coat</a></div>


                                <div className="result-product__price">$56.99</div>

                            </div>


                            <div className="result-product">

                                <div className="result-product__image">
                                    <a href="product.html">
                                        <img src="/public/products/1/2_2-a.jpg" alt="Product image" />
                                    </a>
                                </div>


                                <div className="result-product__name"><a href="product.html">Slim fit modal cotton shirt</a></div>


                                <div className="result-product__price">$59.99</div>

                            </div>


                            <div className="result-product">

                                <div className="result-product__image">
                                    <a href="product.html">
                                        <img src="/public/products/1/2_3-a.jpg" alt="Product image" />
                                    </a>
                                </div>


                                <div className="result-product__name"><a href="product.html">Wool/Cashmera basic cardigan</a></div>


                                <div className="result-product__price">$49.5</div>

                            </div>


                            <div className="result-product">

                                <div className="result-product__image">
                                    <a href="product.html">
                                        <img src="/public/products/1/2_4-a.jpg" alt="Product image" />
                                    </a>
                                </div>


                                <div className="result-product__name"><a href="product.html">Regular fit striped cotton shirt</a></div>


                                <div className="result-product__price">$79.99</div>

                            </div>


                            <div className="result-product">

                                <div className="result-product__image">
                                    <a href="product.html">
                                        <img src="/public/products/1/3_1-a.jpg" alt="Product image" />
                                    </a>
                                </div>


                                <div className="result-product__name"><a href="product.html">Slim fit modal cotton shity</a></div>


                                <div className="result-product__price">

                                    <span className="result-product__price-new">$79.99</span>


                                    <span className="result-product__price-old">$99.99</span>

                                </div>

                            </div>

                        </div>
                        <div className="search-popup__results-action">
                            <a href="#" className="fifth-button">All results (12)</a>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}
export default Shop;