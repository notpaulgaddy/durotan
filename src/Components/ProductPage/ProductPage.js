import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import "../css/bootstrap.min.css";
import "../css/theme.css";
import { connect } from "react-redux";
import clothingData from "../Data/ClothingData.js";
import NavbarLink from "../Navbar/NavbarLink";
import { addToCart } from "../../Reducers/cartReducer";


function ProductPage({ onAddToCart, cartItems }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  const { productId } = useParams()
  const thisProduct = clothingData.find(prod => prod.id === productId);

  const handleAddToCart = () => {
    const productWithQuantity = { ...thisProduct, quantity };
    onAddToCart(productWithQuantity);
    console.log("Item added to cart:", productWithQuantity);
  };


  return (
    <body className="product-page">
      <div id="main">
        {/* <NavbarLink/> */}
        <div className="product-layout-2 js-product-layout-2">
          <div className="product__previous-page">
            <a href="#"><i className="lnil lnil-arrow-left"></i></a>
          </div>
          <div className="product__mobile-gallery js-product-mobile-gallery">
            <div className="mobile-product-image">
              <p>
                <a href="/public/products/1/15a.jpg">
                  <img
                    alt="Image"
                    src="/public/products/1/15a.jpg" />
                </a>
              </p>
            </div>
            <div className="mobile-product-image">
              <p>
                <a href="/public/products/1/15b.jpg">
                  <img
                    alt="Image"
                    src="/public/products/1/15b.jpg" />
                </a>
              </p>
            </div>
            <div className="mobile-product-image">
              <p>
                <a href="/public/products/1/15c.jpg">
                  <img
                    alt="Image"
                    src="/public/products/1/15c.jpg" />
                </a>
              </p>
            </div>
            <div className="mobile-product-image">
              <p>
                <a href="/public/products/1/15d.jpg">
                  <img
                    alt="Image"
                    src="/public/products/1/15d.jpg" />
                </a>
              </p>
            </div>
          </div>
          <div className="product">
            <div className="container container--type-2">
              <div className="product__main position-sticky d-flex">
                <ul className="product__thumbnails sticky-top">
                  <li>
                    <a href="#" className="active js-product-thumbnail" data-id="0">
                      <img
                        alt="Image"
                        src={thisProduct.firstImage} id="thumbnailOne" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="js-product-thumbnail" data-id="1">
                      <img
                        alt="Image"
                        src={thisProduct.secondImage} id="thumbnailTwo" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="js-product-thumbnail" data-id="2" >
                      <img
                        alt="Image"
                        src={thisProduct.thirdImage} id="thumbnailThree" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="js-product-thumbnail" data-id="3">
                      <img
                        alt="Image"
                        src={thisProduct.fourthImage} id="thumbnailFour" />
                    </a>
                  </li>
                </ul>
                <ul className="product__main-image js-popup-gallery">
                  <li className="active js-product-main-image" data-id="0">
                    <a href="/public/products/1/15a.jpg">
                      <img
                        alt="Image"
                        src={thisProduct.firstImage} data-zoomed="/public/products/1/15a.jpg" className="js-zoomit" id="imgOne" />
                    </a>
                  </li>
                  <li className="active-2 js-product-main-image" data-id="1">
                    <a href="/public/products/1/15b.jpg">
                      <img
                        alt="Image"
                        src="" data-zoomed="/public/products/1/15b.jpg" className="js-zoomit" id="imgTwo" />
                    </a>
                  </li>
                  <li className="active-3 js-product-main-image" data-id="2">
                    <a href="/public/products/1/15c.jpg">
                      <img
                        alt="Image"
                        src="" data-zoomed="/public/products/1/15c.jpg" className="js-zoomit" id="imgThree" />
                    </a>
                  </li>
                  <li className="active-4 js-product-main-image" data-id="3">
                    <a href="/public/products/1/15d.jpg">
                      <img
                        alt="Image"
                        src="" data-zoomed="/public/products/1/15d.jpg" className="js-zoomit" id="imgFour" />
                    </a>
                  </li>
                </ul>
                <div className="product__right sticky-top">
                  <div className="product-breadcrumb__d-flex d-flex align-items-center">
                    <ol className="breadcrumb text-uppercase">
                      <li className="breadcrumb__item"><a href="index.html">Back to shop </a></li>
                    </ol>
                    <ul className="product-breadcrumb__prev-next d-flex align-items-center">
                      <li><a href="#"><i className="lnil lnil-chevron-left"></i><span>Prev</span></a></li>
                      <li><a href="#"><span>Next</span><i className="lnil lnil-chevron-right"></i></a></li>
                    </ul>
                  </div>
                  <h1 className="product__title" id="itemTitle">{thisProduct.title}</h1>
                  <div className="product__reviews">
                    <i className="lnir lnir-star-filled active"></i>
                    <i className="lnir lnir-star-filled active"></i>
                    <i className="lnir lnir-star-filled active"></i>
                    <i className="lnir lnir-star-filled active"></i>
                    <i className="lnir lnir-star-filled"></i>
                    <span>3 reviews</span>
                  </div>
                  {/* <!-- End product reviews -->
              <!-- Product price --> */}
                  <div className="product__price">
                    ${thisProduct.price}
                    {/* <span className="product-price__new">$49.5</span>
                <span className="product-price__old">$69.5</span>  */}
                  </div>
                  <div className="product__status">
                    <i className="lnir lnir-package"></i>
                    <span>Status:</span>
                    <span className="status__value status__value--in-stock">{thisProduct.status}</span>
                  </div>
                  <div className="product__options">
                    <div className="product__colors d-flex align-items-center">
                      <ul className="product__available-colors">
                        <li className="active"><a href="#" style={{ background: "#af957c" }} className="open-tooltip"><span className="custom-tooltip">Brown</span></a></li>
                        <li><a href="#" style={{ background: "#144412" }} className="open-tooltip"><span className="custom-tooltip">Green</span></a></li>
                        <li><a href="#" style={{ background: "#1c1b20" }} className="open-tooltip"><span className="custom-tooltip">Black</span></a></li>
                        <li><a href="#" style={{ background: "#8c000d" }} className="open-tooltip"><span className="custom-tooltip">Red</span></a></li>
                      </ul>
                      <div className="product__current-color">Color: <span>Brown</span></div>
                    </div>
                    <div className="product__sizes">
                      <select>
                        <option>Choose your size</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                      </select>
                    </div>
                  </div>
                  <div className="product__action js-product-action">
                    <div className="product__quantity-and-add-to-cart d-flex">
                      <div className="product__quantity">
                        <div className="product-quantity__minus js-quantity-down">
                          <a href="#" onClick={handleDecrease}>
                            <i className="lnil lnil-minus"></i>
                          </a>
                        </div>
                        <input
                          type="text"
                          value={quantity}
                          className="product-quantity__input js-quantity-field"
                          onChange={handleInputChange}
                        />
                        <div className="product-quantity__plus js-quantity-up">
                          <a href="#" onClick={handleIncrease}>
                            <i className="lnil lnil-plus"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product__add-to-cart">
                        <a href="#" className="eighth-button" onClick={handleAddToCart}>
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    <a href="#" className="eighth-button">
                      <Link to="/Cart">Checkout</Link>
                    </a>
                  </div>
                  <ul className="product__second-action d-flex">
                    <li><a href="#"><i className="lnil lnil-heart"></i> Add to wishlist</a></li>
                    <li><a href="#"><i className="lnil lnil-reload"></i> Compare</a></li>
                    <li><a href="#"><i className="lnil lnil-tshirt"></i> Size guide</a></li>
                  </ul>
                  <ul className="product__information">
                    <li><span>SKU</span><p>SS-501</p></li>
                    <li><span>Category</span><p>Men’s Clothing</p></li>
                    <li><span>Tags</span><p><a href="#">shirt</a>, <a href="#">men</a>, <a href="#">basic</a>, <a href="#">cotton</a></p></li>
                  </ul>
                  <ul className="product__socials">
                    <li><a href="https://twitter.com" target="_blank"><i className="lnil lnil-twitter"></i></a></li>
                    <li><a href="https://facebook.com" target="_blank"><i className="lnil lnil-facebook"></i></a></li>
                    <li><a href="https://instagram.com" target="_blank"><i className="lnil lnil-Instagram"></i></a></li>
                  </ul>
                  <div className="product__mobile-tabs">
                    <div className="accordion active js-accordion">
                      <div className="accordion__title js-accordion-title">
                        Description
                      </div>
                      <div className="accordion__content js-accordion-content">
                        <h3>Introduce</h3>
                        <p>Tailored line. Wool mix fabric. Long design. Long buttoned sleeve. Lapel with notch. Back slit. Two pockets with flaps on the front. Button up. Inner lining. Inner pocket. Back length 95.0 cm.</p>
                        <h3>Material & Washing Instructions</h3>
                        <p>Composition: 51% wool,45% polyester,2% acrylic,2% viscose.<br />Lining: 53% cotton,47% polyester.<br />Sleeve lining: 100% polyester</p>
                        <ul className="tab__features">
                          <li><p><img src="/public/images/default/icon-washing.png" alt="Icon" /></p> <span>No Washing</span></li>
                          <li><p><img src="/public/images/default/icon-bleach.png" alt="Icon" /></p> <span>do not bleach</span></li>
                          <li><p><img src="/public/images/default/icon-ironing.png" alt="Icon" /></p> <span>ironing max 110 0 c / 230 0 f</span></li>
                          <li><p><img src="/public/images/default/icon-dry-cleaning.png" alt="Icon" /></p> <span>dry cleaning perchloroethylene</span></li>
                          <li><p><img src="/public/images/default/icon-tumble-dry.png" alt="Icon" /></p> <span>do not tumble dry</span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="accordion js-accordion">
                      <div className="accordion__title js-accordion-title">
                        Ship & return
                      </div>
                      <div className="accordion__content js-accordion-content">
                        <h3>Shipping</h3>
                        <ul>
                          <li>Complimentary ground shipping within 1 to 7 business days</li>
                          <li>In-store collection available within 1 to 7 business days</li>
                          <li>Next-day and Express delivery options also available</li>
                          <li>Purchases are delivered in an orange box tied with a Bolduc ribbon.</li>
                          <li>See the delivery FAQs for details on shipping methods, costs and delivery times</li>
                        </ul>
                        <h3>Returns & Exchanges</h3>
                        <ul>
                          <li>Easy and complimentary, within 14 days</li>
                          <li>See conditions and procedure in our return FAQs</li>
                          <li>Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="accordion js-accordion">
                      <div className="accordion__title js-accordion-title">
                        Review (3)
                      </div>
                      <div className="accordion__content js-accordion-content">
                        <h3 className="review__title">Customer’s Review (2)</h3>
                        <div className="review d-flex">
                          <div className="review__avatar">
                            <img
                              alt="Image"
                              data-sizes="auto"
                              data-srcset="/public/images/default/avatar_1.jpg 1560w,
                          /public/images/default/avatar_1.jpg 3120w"
                              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                              className="lazyload" />
                          </div>
                          <div className="review__details">
                            <div className="review__title-and-rating d-flex">
                              <div className="review__title">Quality product & very comfortable!</div>
                              <div className="review__rating">
                                <i className="lnir lnir-star-filled active"></i>
                                <i className="lnir lnir-star-filled active"></i>
                                <i className="lnir lnir-star-filled active"></i>
                                <i className="lnir lnir-star-filled active"></i>
                                <i className="lnir lnir-star-filled active"></i>
                              </div>
                            </div>
                            <div className="review__content">Thanks to the precious advice of the store owner, I choose this wonderful product. I absolutely love it! Additionally, my order was sent very quickly. I'm a happy customer and I'll order again!</div>
                            <div className="review__meta">
                              <span>andy robertson.</span>  on 25 April, 2022
                            </div>
                          </div>
                        </div>
                        <div className="review d-flex">
                          <div className="review__avatar">
                            <img
                              alt="Image"
                              data-sizes="auto"
                              data-srcset="/public/images/default/avatar_2.jpg 1560w,
                          /public/images/default/avatar_2.jpg 3120w"
                              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                              className="lazyload" />
                          </div>
                          <div className="review__details">
                            <div className="review__title-and-rating d-flex align">
                              <div className="review__title">Awesome product</div>
                              <div className="review__rating">
                                <i className="lnir lnir-star-filled active"></i>
                                <i className="lnir lnir-star-filled active"></i>
                                <i className="lnir lnir-star-filled active"></i>
                                <i className="lnir lnir-star-filled active"></i>
                                <i className="lnir lnir-star-filled active"></i>
                              </div>
                            </div>
                            <div className="review__content">I love it & certainly that i’ll buy it once again. Perfection experience!</div>
                            <div className="review__meta">
                              <span>Alexander Arnold.</span>  on 25 April, 2022
                            </div>
                          </div>
                        </div>
                        <h3>Add A Review</h3>
                        <form className="review__form">
                          <div className="form__required-fields">Your email address will not be published. Required fields are marked<span>*</span></div>
                          <div className="form__your-rating d-flex align-items-center">
                            <div className="your-rating__title">Your rating</div>
                            <div className="your-rating__content js-rating-content">
                              <i className="lnir lnir-star-filled js-rating" data-value="1"></i>
                              <i className="lnir lnir-star-filled js-rating" data-value="2"></i>
                              <i className="lnir lnir-star-filled js-rating" data-value="3"></i>
                              <i className="lnir lnir-star-filled js-rating" data-value="4"></i>
                              <i className="lnir lnir-star-filled js-rating" data-value="5"></i>
                              <div className="d-none">
                                <input type="radio" name="rating" className="js-rating-input" value="1" />
                                <input type="radio" name="rating" className="js-rating-input" value="2" />
                                <input type="radio" name="rating" className="js-rating-input" value="3" />
                                <input type="radio" name="rating" className="js-rating-input" value="4" />
                                <input type="radio" name="rating" className="js-rating-input" value="5" />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <input type="text" name="subject" className="form-group__input" placeholder="Give your review a tittle " />
                          </div>
                          <div className="form-group">
                            <textarea placeholder="Write your review here" className="form-group__textarea" rows="3"></textarea>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input type="text" name="name" className="form-group__input" placeholder="Full Name" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input type="email" name="email" className="form-group__input" placeholder="Your E-mail*" />
                              </div>
                            </div>
                          </div>
                          <div className="form-checkbox">
                            <input type="checkbox" id="checkbox1" className="form-checkbox__input" />
                            <label className="form-checkbox__label" for="checkbox1">Save my name & email in this browser for next time i comment</label>
                          </div>
                          <div className="form__action">
                            <button type="submit" className="second-button">Submit review</button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="accordion js-accordion">
                      <div className="accordion__title js-accordion-title">
                        Ask a question
                      </div>
                      <div className="accordion__content js-accordion-content">
                        <form className="contact-page__form">
                          <div className="form-group">
                            <input type="text" name="subject" className="form-group__input" placeholder="Subject (optional)" />
                          </div>
                          <div className="form-group">
                            <textarea placeholder="Write your question here" className="form-group__textarea" rows="5"></textarea>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input type="text" name="name" className="form-group__input" placeholder="Full Name" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input type="email" name="email" className="form-group__input" placeholder="Your E-mail*" />
                              </div>
                            </div>
                          </div>
                          <div className="form__action">
                            <button type="submit" className="second-button">Ask a question</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <ul className="product__tabs d-flex">
                    <li><a href="#" className="js-open-tab" data-id="1">Description</a></li>
                    <li><a href="#" className="js-open-tab" data-id="2">Ship & return</a></li>
                    <li><a href="#" className="js-open-tab" data-id="3">Review (3)</a></li>
                    <li><a href="#" className="js-open-tab" data-id="4">Ask a question</a></li>
                  </ul>
                  <div className="tab js-tab" data-id="1">
                    <div className="tab__overlay js-close-tab"></div>
                    <div className="tab__content">
                      <div className="tab__heading d-flex align-items-center">
                        <h3 className="tab__h3">Description</h3>
                        <div className="tab__close"><a href="#" className="js-close-tab"><i className="lnil lnil-close"></i></a></div>
                      </div>
                      <div className="tab__description">
                        <h3>Introduce</h3>
                        <p>Tailored line. Wool mix fabric. Long design. Long buttoned sleeve. Lapel with notch. Back slit. Two pockets with flaps on the front. Button up. Inner lining. Inner pocket. Back length 95.0 cm.</p>
                        <h3>Material & Washing Instructions</h3>
                        <p>Composition: 51% wool,45% polyester,2% acrylic,2% viscose.<br />Lining: 53% cotton,47% polyester.<br />Sleeve lining: 100% polyester</p>
                        <ul className="tab__features">
                          <li><p><img src="/public/images/default/icon-washing.png" alt="Icon" /></p> <span>No Washing</span></li>
                          <li><p><img src="/public/images/default/icon-bleach.png" alt="Icon" /></p> <span>do not bleach</span></li>
                          <li><p><img src="/public/images/default/icon-ironing.png" alt="Icon" /></p> <span>ironing max 110 0 c / 230 0 f</span></li>
                          <li><p><img src="/public/images/default/icon-dry-cleaning.png" alt="Icon" /></p> <span>dry cleaning perchloroethylene</span></li>
                          <li><p><img src="/public/images/default/icon-tumble-dry.png" alt="Icon" /></p> <span>do not tumble dry</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab js-tab" data-id="2">
                    <div className="tab__overlay js-close-tab"></div>
                    <div className="tab__content">
                      <div className="tab__heading d-flex align-items-center">
                        <h3 className="tab__h3">Ship & return</h3>
                        <div className="tab__close"><a href="#" className="js-close-tab"><i className="lnil lnil-close"></i></a></div>
                      </div>
                      <div className="tab__description">
                        <h3>Shipping</h3>
                        <ul>
                          <li>Complimentary ground shipping within 1 to 7 business days</li>
                          <li>In-store collection available within 1 to 7 business days</li>
                          <li>Next-day and Express delivery options also available</li>
                          <li>Purchases are delivered in an orange box tied with a Bolduc ribbon.</li>
                          <li>See the delivery FAQs for details on shipping methods, costs and delivery times</li>
                        </ul>
                        <h3>Returns & Exchanges</h3>
                        <ul>
                          <li>Easy and complimentary, within 14 days</li>
                          <li>See conditions and procedure in our return FAQs</li>
                          <li>Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab js-tab" data-id="3">
                    <div className="tab__overlay js-close-tab"></div>
                    <div className="tab__content">
                      <div className="tab__heading d-flex align-items-center">
                        <h3 className="tab__h3">Review (3)</h3>
                        <div className="tab__close"><a href="#" className="js-close-tab"><i className="lnil lnil-close"></i></a></div>
                      </div>
                      <div className="tab__description">
                        <h3 className="review__title">Customer’s Review (2)</h3>
                        <div className="review d-flex">
                          <div className="review__avatar">
                            <img
                              alt="Image"
                              data-sizes="auto"
                              data-srcset="/public/images/default/avatar_1.jpg 1560w,
                          /public/images/default/avatar_1.jpg 3120w"
                              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                              className="lazyload" />
                          </div>
                          <div className="review__details">
                            <div className="review__title-and-rating d-flex">
                              <div className="review__title">Quality product & very comfortable!</div>
                              <div className="review__rating">
                                <i className="lnir lnir-star-filled active"></i>
                                <i className="lnir lnir-star-filled active"></i>
                                <i className="lnir lnir-star-filled active"></i>
                                <i className="lnir lnir-star-filled active"></i>
                                <i className="lnir lnir-star-filled active"></i>
                              </div>
                            </div>
                            <div className="review__content">Thanks to the precious advice of the store owner, I choose this wonderful product. I absolutely love it! Additionally, my order was sent very quickly. I'm a happy customer and I'll order again!</div>
                            <div className="review__meta">
                              <span>andy robertson.</span>  on 25 April, 2022
                            </div>
                          </div>
                        </div>
                        <div className="review d-flex">
                          <div className="review__avatar">
                            <img
                              alt="Image"
                              data-sizes="auto"
                              data-srcset="/public/images/default/avatar_2.jpg 1560w,
                          /public/images/default/avatar_2.jpg 3120w"
                              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                              className="lazyload" />
                          </div>
                          <div className="review__details">
                            <div className="review__title-and-rating d-flex align">
                              <div className="review__title">Awesome product</div>
                              <div className="review__rating">
                                <i className="lnir lnir-star-filled active"></i>
                                <i className="lnir lnir-star-filled active"></i>
                                <i className="lnir lnir-star-filled active"></i>
                                <i className="lnir lnir-star-filled active"></i>
                                <i className="lnir lnir-star-filled active"></i>
                              </div>
                            </div>
                            <div className="review__content">I love it & certainly that i’ll buy it once again. Perfection experience!</div>
                            <div className="review__meta">
                              <span>Alexander Arnold.</span>  on 25 April, 2022
                            </div>
                          </div>
                        </div>
                        <h3>Add A Review</h3>
                        <form className="review__form">
                          <div className="form__required-fields">Your email address will not be published. Required fields are marked<span>*</span></div>
                          <div className="form__your-rating d-flex align-items-center">
                            <div className="your-rating__title">Your rating</div>
                            <div className="your-rating__content js-rating-content">
                              <i className="lnir lnir-star-filled js-rating" data-value="1"></i>
                              <i className="lnir lnir-star-filled js-rating" data-value="2"></i>
                              <i className="lnir lnir-star-filled js-rating" data-value="3"></i>
                              <i className="lnir lnir-star-filled js-rating" data-value="4"></i>
                              <i className="lnir lnir-star-filled js-rating" data-value="5"></i>
                              <div className="d-none">
                                <input type="radio" name="rating" className="js-rating-input" value="1" />
                                <input type="radio" name="rating" className="js-rating-input" value="2" />
                                <input type="radio" name="rating" className="js-rating-input" value="3" />
                                <input type="radio" name="rating" className="js-rating-input" value="4" />
                                <input type="radio" name="rating" className="js-rating-input" value="5" />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <input type="text" name="subject" className="form-group__input" placeholder="Give your review a tittle " />
                          </div>
                          <div className="form-group">
                            <textarea placeholder="Write your review here" className="form-group__textarea" rows="3"></textarea>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input type="text" name="name" className="form-group__input" placeholder="Full Name" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input type="email" name="email" className="form-group__input" placeholder="Your E-mail*" />
                              </div>
                            </div>
                          </div>
                          <div className="form-checkbox">
                            <input type="checkbox" id="checkbox2" className="form-checkbox__input" />
                            <label className="form-checkbox__label" for="checkbox2">Save my name & email in this browser for next time i comment</label>
                          </div>
                          <div className="form__action">
                            <button type="submit" className="second-button">Submit review</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="tab js-tab" data-id="4">
                    <div className="tab__overlay js-close-tab"></div>
                    <div className="tab__content">
                      <div className="tab__heading d-flex align-items-center">
                        <h3 className="tab__h3">Ask a question</h3>
                        <div className="tab__close"><a href="#" className="js-close-tab"><i className="lnil lnil-close"></i></a></div>

                      </div>
                      <div className="tab__description">
                        <form className="contact-page__form">
                          <div className="form-group">
                            <input type="text" name="subject" className="form-group__input" placeholder="Subject (optional)" />
                          </div>
                          <div className="form-group">
                            <textarea placeholder="Write your question here" className="form-group__textarea" rows="5"></textarea>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input type="text" name="name" className="form-group__input" placeholder="Full Name" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input type="email" name="email" className="form-group__input" placeholder="Your E-mail*" />
                              </div>
                            </div>
                          </div>
                          <div className="form__action">
                            <button type="submit" className="second-button">Ask a question</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (item) => dispatch(addToCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);