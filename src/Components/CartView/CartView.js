import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import "../css/bootstrap.min.css";
import "../css/theme.css";
import { clearCart } from '../../Reducers/cartReducer';

const CartView = ({ cartItems, clearCart }) => {
    console.log(cartItems); // Debugging line
    const [shippingCost, setShippingCost] = useState(20);

    const handleClearCart = () => {
        clearCart();
    };

    const handleShippingChange = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === "Standard Shipping ($20)") {
            setShippingCost(20);
        } else if (selectedOption === "Fast Shipping ($40)") {
            setShippingCost(40);
        }
    };    
    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach(item => {
            total += parseFloat(item.id.price) * item.id.quantity;
        });
        total += shippingCost;
        return total;
    };
    
    const handleCheckout = async () => {
        const response = await axios.post('http://localhost:8000/create-checkout-session', {
            items: cartItems,
            shippingCost: shippingCost
        });
    
        const sessionId = response.data.id;
        const stripe = window.Stripe(process.env.STRIPE_PUBLIC_KEY); // Replace with your Stripe public key
    
        stripe.redirectToCheckout({sessionId});
    };

    return (
        <div>
            <div class="shopping-cart">
                <div class="container container--type-2">
                    <div class="container">
                        <h1 class="shopping-cart__title">Shopping Cart</h1>
                        <div class="row">
                            <div class="col-lg-7 col-xl-8">
                                <div class="shopping-cart__container">
                                    <div class="table-responsive">
                                        <table class="shopping-cart__table">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                    <th>Qty</th>
                                                    <th>Subtotal</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* HERE */}
                                                {cartItems.map((item, index) => {
                                                    const productDetails = item.id;
                                                    return (
                                                        <tr>
                                                            <td>
                                                                <div key={index} class="shopping-cart__product">
                                                                    <div class="cart-product__image">
                                                                        <a href="product.html">
                                                                            <img
                                                                                alt="Image"
                                                                                data-sizes="auto"
                                                                                src={productDetails.firstImage}
                                                                                class="lazyload" />
                                                                        </a>
                                                                    </div>
                                                                    <div class="cart-product__title-and-variant">
                                                                        <h3 class="cart-product__title"><a href="product.html">{productDetails.title}</a></h3>
                                                                        <div class="cart-product__variant">Grey, M</div>
                                                                        <div class="cart-product__action"><a href="#">Edit</a></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="cart-product__price">
                                                                    ${productDetails.price}
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="cart-product__quantity-field">
                                                                    <div class="quantity-field__minus"><a href="#">-</a></div>
                                                                    <input type="text" value={productDetails.quantity || 1} class="quantity-field__input" />
                                                                    <div class="quantity-field__plus"><a href="#">+</a></div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="cart-product__price">
                                                                    ${(parseFloat(productDetails.price) * (productDetails.quantity || 1)).toFixed(2)}
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="cart-product__delete">
                                                                    <a href="#"><i class="lnil lnil-close"></i></a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="shopping-cart__discount">
                                        <h3 class="discount__title">Discount Code</h3>
                                        <form>
                                            <div class="discount__icon"><i class="lnil lnil-coin"></i></div>
                                            <input type="text" class="discount__input" value="" placeholder="Enter promo code" />
                                            <button type="submit" class="discount__submit">Apply coupon</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5 col-xl-4">
                                <div class="shopping-cart__order-summary">
                                    <div class="order-summary__background">
                                        <h3 class="order-summary__title">Order Summary</h3>
                                        <div class="order-summary__delivery-method">
                                            <select onChange={handleShippingChange}>
                                                <option>Standard Shipping ($20)</option>
                                                <option>Fast Shipping ($40)</option>
                                            </select>
                                        </div>
                                        <div class="order-summary__total">
                                            <div class="summary-total__title">Subtotal</div>
                                            <div class="summary-total__price">${calculateTotal().toFixed(2)}</div>
                                        </div>
                                        <div class="order-summary__proceed-to-checkout">
                                            <button onClick={handleCheckout} class="second-button">Proceed to checkout</button>
                                        </div>
                                        <div class="order-summary__accept-payment-methods">
                                            <h4 class="accept-payment-methods__title">Accept Payment Methods</h4>
                                            <img src="../../../public/images/default/payment.png" alt="Payment" />
                                        </div>
                                    </div>
                                    <div class="order-summary__action">
                                        <a href="shop.html">Continue shopping</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartView);