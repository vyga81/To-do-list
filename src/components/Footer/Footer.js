import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => (
  // < !--Footer -- >  fixed-bottom bg-white text-muted
  <div className='test'>
    <footer className="text-center  text-lg-start ">
      {/* <!-- Section: Social media --> */}
      <section c="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* <!-- Left --> */}
        < div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* <!-- Left --> */}

        {/* <!-- Right --> */}
        <div>
          <p className="me-4 link-grayish">
            <i className="fab fa-facebook-f"></i>
          </p>
          <p className="me-4 link-grayish">
            <i className="fab fa-twitter"></i>
          </p>
          <p className="me-4 link-grayish">
            <i className="fab fa-google"></i>
          </p>
          <p className="me-4 link-grayish">
            <i className="fab fa-instagram"></i>
          </p>
          <p className="me-4 link-grayish">
            <i className="fab fa-linkedin"></i>
          </p>
          <p className="me-4 link-grayish">
            <i className="fab fa-github"></i>
          </p>
        </div>
        {/* <!-- Right --> */}
      </section>
      {/* <!-- Section: Social media --> */}

      {/* <!-- Section: Links  --> */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* <!-- Grid row --> */}
          <div className="row mt-3">
            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* <!-- Content --> */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3 text-grayish"></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <p className="text-reset">Angular</p>
              </p>
              <p>
                <p className="text-reset">React</p>
              </p>
              <p>
                <p className="text-reset">Vue</p>
              </p>
              <p>
                <p className="text-reset">Laravel</p>
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <p className="text-reset">Pricing</p>
              </p>
              <p>
                <p className="text-reset">Settings</p>
              </p>
              <p>
                <p className="text-reset">Orders</p>
              </p>
              <p>
                <p className="text-reset">Help</p>
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3 text-grayish"></i> New York, NY 10012, US</p>
              <p>
                <i className="fas fa-envelope me-3 text-grayish"></i>
                info@example.com
              </p>
              <p><i className="fas fa-phone me-3 text-grayish"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3 text-grayish"></i> + 01 234 567 89</p>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}
        </div>
      </section>
      {/* <!-- Section: Links  --> */}

      {/* <!-- Copyright --> */}
      {/* style="background-color: rgba(0, 0, 0, 0.025); */}
      <div className="text-center p-4" >
        © 2021 Copyright:
        <p className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</p>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  </div>

);



export default Footer;
