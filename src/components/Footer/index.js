import React from "react";
import payment from "../../assets/images/payment.png"

const Footer = () => {
  return (
    <>
      <section class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="f-contact">
                <h5>Contact Info</h5>
                <div class="f-add">
                  <i class="fa fa-map-marker"></i>
                  <span>Address :</span>
                  <p>795 South Park Avenue, New York, NY USA 94107</p>
                </div>
                <div class="f-email">
                  <i class="fa fa-envelope"></i>
                  <span>Email :</span>
                  <p>enquery@domain.com</p>
                </div>
                <div class="f-phn">
                  <i class="fa fa-phone"></i>
                  <span>Phone :</span>
                  <p>+1 908 875 7678</p>
                </div>
                <div class="f-social">
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fa fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="f-cat">
                <h5>Categories</h5>
                <ul class="list-unstyled">
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Clothing
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Electronics
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Smartphones & Tablets
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Computer & Office
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Home Appliances
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Leather & Shoes
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Kids & Babies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="f-link">
                <h5>Quick Links</h5>
                <ul class="list-unstyled">
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>My Account
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Shopping Cart
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>My Wishlist
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Checkout
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Order History
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Log In
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Our Locations
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="f-sup">
                <h5>Support</h5>
                <ul class="list-unstyled">
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Payment Policy
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Return Policy
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Frequently asked
                      questions
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Terms & Condition
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Delivery Info
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="footer-btm">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p>
                Copyright &copy; 2020 | Designed With
                <i class="fa fa-heart"></i> by
                <a href="#" target="_blank">
                  SnazzyTheme
                </a>
              </p>
            </div>
            <div class="col-md-6 text-right">
              <img src={payment} alt="" class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="back-to-top text-center">
          <img src="images/backtotop.png" alt="" class="img-fluid" />
        </div>
      </section>
    </>
  );
};

export default Footer;
