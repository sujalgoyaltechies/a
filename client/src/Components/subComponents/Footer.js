import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Call once to set initial state
    window.addEventListener("resize", handleResize); // Listen for window resize events

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <>
      <footer className="text-center text-lg-start bg-light text-dark">
        <hr />
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <div className="logo">
                  <h2>
                    {" "}
                    <span style={{ color: "rgb(4 229 254)" }}>Lappy</span>{" "}
                    <span style={{ color: "#fe9c04" }}>Waley</span>
                  </h2>
                </div>
                <p>
                  Lappywaley Shop offers a curated selection of high-quality
                  electronics, providing cutting-edge technology for your
                  everyday needs. Explore our range of laptops, accessories, and
                  other devices. Experience innovation and reliability with
                  Lappywaley Shop – Your Ultimate Tech Destination.
                </p>
              </div>

              {/* Brands section (only displayed as accordion on mobile) */}
              {isMobile ? (
                <div
                  className="accordion accordion-flush col-md-6 col-lg-6 col-xl-6 mx-auto mb-4"
                  id="accordionExample"
                >
                  <div
                    className="accordion-item"
                    style={{ backgroundColor: "rgb(248 249 250)" }}
                  >
                    <h6
                      className="accordion-header text-uppercase fw-bold mb-3"
                      style={{ cursor: "pointer" }}
                      data-bs-toggle="collapse"
                      data-bs-target="#brandsAccordion"
                    >
                      <button
                        class="accordion-button text-uppercase fw-bold mb-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        style={{ backgroundColor: "rgb(248 249 250)" }}
                      >
                        BRAnds{" "}
                      </button>{" "}
                    </h6>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse "
                      data-bs-parent="#accordionExample"
                    >
                      <div
                        className="accordion-body"
                        style={{ textAlign: "start" }}
                      >
                        <p>
                          <Link
                            to="/dell"
                            className="text-reset"
                            style={{ textDecoration: "none" }}
                          >
                            Dell
                          </Link>
                        </p>
                        <p>
                          <Link
                            to="/hp"
                            className="text-reset"
                            style={{ textDecoration: "none" }}
                          >
                            HP{" "}
                          </Link>
                        </p>
                        <p>
                          <Link
                            to="/lenovo"
                            className="text-reset"
                            style={{ textDecoration: "none" }}
                          >
                            Lenovo
                          </Link>
                        </p>
                        <p>
                          <Link
                            to="/apple"
                            className="text-reset"
                            style={{ textDecoration: "none" }}
                          >
                            MacBook{" "}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Regular Brands section for larger devices
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-3">Brands</h6>
                  <p>
                    <Link
                      to="/dell"
                      className="text-reset"
                      style={{ textDecoration: "none" }}
                    >
                      Dell
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/hp"
                      className="text-reset"
                      style={{ textDecoration: "none" }}
                    >
                      HP{" "}
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/lenovo"
                      className="text-reset"
                      style={{ textDecoration: "none" }}
                    >
                      Lenovo
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/apple"
                      className="text-reset"
                      style={{ textDecoration: "none" }}
                    >
                      MacBook{" "}
                    </Link>
                  </p>
                </div>
              )}

              {/* More section (only displayed as accordion on mobile) */}
              {isMobile ? (
                <div
                  className="accordion accordion-flush col-md-6 col-lg-6 col-xl-6 mx-auto mb-4"
                  id="accordionExample"
                >
                  <div
                    className="accordion-item"
                    style={{ backgroundColor: "rgb(248 249 250)" }}
                  >
                    <h6
                      className="accordion-header text-uppercase fw-bold mb-3"
                      style={{ cursor: "pointer" }}
                      data-bs-toggle="collapse"
                      data-bs-target="#moreAccordion"
                    >
                      <button
                        class="accordion-button text-uppercase fw-bold mb-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                        style={{ backgroundColor: "rgb(248 249 250)" }}
                      >
                        More{" "}
                      </button>{" "}
                    </h6>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse "
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body" style={{textAlign:"start"}}>
                        <p>
                          <Link
                            to="/about"
                            className="text-reset"
                            style={{ textDecoration: "none" }}
                          >
                            About us
                          </Link>
                        </p>
                        <p>
                          <Link
                            to="/privacypolicy"
                            className="text-reset"
                            style={{ textDecoration: "none" }}
                          >
                            Privacy Policy
                          </Link>
                        </p>
                        <p>
                          <Link
                            to="/shippingpolicy"
                            className="text-reset"
                            style={{ textDecoration: "none" }}
                          >
                            Shipping & Return Policy
                          </Link>
                        </p>
                        <p>
                          <Link
                            to="/faq"
                            className="text-reset"
                            style={{ textDecoration: "none" }}
                          >
                            FAQs
                          </Link>
                        </p>
                        <p>
                          <Link
                            to="/contact"
                            className="text-reset"
                            style={{ textDecoration: "none" }}
                          >
                            Contact
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Regular More section for larger devices
                <div className="col-md-1 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">More </h6>
                  <p>
                    <Link
                      to="/about"
                      className="text-reset"
                      style={{ textDecoration: "none" }}
                    >
                      About us
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/privacypolicy"
                      className="text-reset"
                      style={{ textDecoration: "none" }}
                    >
                      Privacy Policy
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/shippingpolicy"
                      className="text-reset"
                      style={{ textDecoration: "none" }}
                    >
                      Shipping & Return Policy
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/faq"
                      className="text-reset"
                      style={{ textDecoration: "none" }}
                    >
                      FAQs
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/contact"
                      className="text-reset"
                      style={{ textDecoration: "none" }}
                    >
                      Contact
                    </Link>
                  </p>
                </div>
              )}

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  EXCLUSIVE BENEFITS
                </h6>
                <p style={{ fontSize: "14px", marginTop: "40px" }}>
                  Apply for our free membership to receive exclusive deals,
                  news, and events.
                  <br />
                  <FaFacebook
                    style={{
                      marginRight: "25px",
                      cursor: "pointer",
                      fontSize: "20px",
                    }}
                  />
                  <FaTwitter
                    style={{
                      marginRight: "25px",
                      cursor: "pointer",
                      fontSize: "20px",
                    }}
                  />
                  <FaInstagram
                    style={{
                      marginRight: "25px",
                      cursor: "pointer",
                      fontSize: "20px",
                    }}
                  />
                  <FaYoutube style={{ cursor: "pointer", fontSize: "20px" }} />
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="d-flex justify-content-center justify-content-mb-between p-1 border-bottom"></section>
        <div className="text-center p-4">
          © 2024 Copyright:
          <Link className="text-reset fw-bold" to="/">
            Lappywaley Shop
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;