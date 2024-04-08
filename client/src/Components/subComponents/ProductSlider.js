import React from "react";

function ProductSlider() {
    const gridStyles = {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)', // 3 columns for default
    
        // Media query for screens with a maximum width of 768px (typical for mobile devices)
        '@media (max-width: 768px)': {
          gridTemplateRows: 'repeat(6, 2fr)', // 6 rows for mobile
        },
      };
  return (
    <div>
      <div className="conta iner">
        <h3 style={{ textAlign: "center" }}>Guarantees</h3>
        <slider-component
          className="slider-mobile-gutter grid__item grid__item--full-width"
          style={{ maxWidth: "100%" }}
        >
          <ul
            id="Guarantees-template--18952188363050__guarantees"
            className="grid grid--1-col grid--2-col-tablet grid--2-col-desktop slider slider--tablet"
            role="list"
            style={gridStyles}

          >
            <li
              id="Slide-template--18952188363050__guarantees-1"
              className="grid__item slider__slide"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "15px",
              }}
            >
              <use-animate
                data-animate="zoom-fade"
                className="guarantee__item center guarantee-icon--large"
                animate=""
              >
                <span className="image-animate guarantee__icon">
                  <img
                    data-src="//cdn.shopify.com/s/files/1/0682/8952/8106/files/Warranty_400x.png?v=1672205255"
                    alt="refurbished laptop"
                    className="lazyautosizes ls-is-cached lazyloaded"
                    data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
                    data-sizes="auto"
                    src="//cdn.shopify.com/s/files/1/0682/8952/8106/files/Warranty_400x.png?v=1672205255"
                    style={{ maxWidth: "100%", height: "50px" }}
                  />
                </span>
                <div>
                       <p className="h4" style={{fontSize:"14px",margin:"10px"}}>WARRANTY</p>
                  <div className="rte typeset"></div>
                </div>
              </use-animate>
            </li>
            <li
              id="Slide-template--18952188363050__guarantees-2"
              className="grid__item slider__slide"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "15px",
              }}
            >
              <use-animate
                data-animate="zoom-fade"
                className="guarantee__item center guarantee-icon--large"
                animate=""
              >
                <span className="image-animate guarantee__icon">
                  <img
                    data-src="//cdn.shopify.com/s/files/1/0682/8952/8106/files/Pan_India_400x.png?v=1672205309"
                    alt="refurbished laptop"
                    className="lazyautosizes ls-is-cached lazyloaded"
                    data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
                    data-sizes="auto"
                    sizes="57px"
                    src="//cdn.shopify.com/s/files/1/0682/8952/8106/files/Pan_India_400x.png?v=1672205309"
                    style={{ maxWidth: "100%", height: "50px" }}
                  />
                </span>
                <div>
                       <p className="h4" style={{fontSize:"14px",margin:"10px"}}>PAN INDIA SHIPPING</p>
                  <div className="rte typeset"></div>
                </div>
              </use-animate>
            </li>
            <li id="Slide-template--18952188363050__guarantees-3" className="grid__item slider__slide" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "15px" }}>
  <use-animate data-animate="zoom-fade" className="guarantee__item center guarantee-icon--large" animate="">
    <span className="image-animate guarantee__icon">
      <img
        data-src="//cdn.shopify.com/s/files/1/0682/8952/8106/files/Laptop_Exchange_400x.png?v=1673613430"
        alt="refurbished laptop"
        className="lazyautosizes ls-is-cached lazyloaded"
        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
        data-sizes="auto"
        sizes="57px"
        src="//cdn.shopify.com/s/files/1/0682/8952/8106/files/Laptop_Exchange_400x.png?v=1673613430"
        style={{ maxWidth: "100%", height: "50px" }}
      />
    </span>
    <div>
           <p className="h4" style={{fontSize:"14px",margin:"10px"}} >EXCHANGE AVAILABLE</p>
      <div className="rte typeset"></div>
    </div>
  </use-animate>
</li>

            <li id="Slide-template--18952188363050__guarantees-4" className="grid__item slider__slide" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "15px" }}>
    <use-animate data-animate="zoom-fade" className="guarantee__item center guarantee-icon--large" animate="">
      <span className="image-animate guarantee__icon">
        <img
          data-src="//cdn.shopify.com/s/files/1/0682/8952/8106/files/premium_quality_400x.png?v=1672205356"
          alt="refurbished laptop"
          className="lazyautosizes ls-is-cached lazyloaded"
          data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
          data-sizes="auto"
          sizes="57px"
          src="//cdn.shopify.com/s/files/1/0682/8952/8106/files/premium_quality_400x.png?v=1672205356"
          style={{ maxWidth: "100%", height: "50px" }}
        />
      </span>
      <div>
             <p className="h4" style={{fontSize:"14px",margin:"10px"}}>PREMIUM QUALITY</p>
        <div className="rte typeset"></div>
      </div>
    </use-animate>
  </li>
  <li id="Slide-template--18952188363050__guarantees-5" className="grid__item slider__slide" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "15px" }}>
    <use-animate data-animate="zoom-fade" className="guarantee__item center guarantee-icon--large" animate="">
      <span className="image-animate guarantee__icon">
        <img
          data-src="//cdn.shopify.com/s/files/1/0682/8952/8106/files/support_400x.png?v=1673413767"
          alt="refurbished laptop"
          className="lazyautosizes ls-is-cached lazyloaded"
          data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
          data-sizes="auto"
          sizes="57px"
          src="//cdn.shopify.com/s/files/1/0682/8952/8106/files/support_400x.png?v=1673413767"
          style={{ maxWidth: "100%", height: "50px" }}
        />
      </span>
      <div>
             <p className="h4" style={{fontSize:"14px",margin:"10px"}}>SUPPORT</p>
        <div className="rte typeset"></div>
      </div>
    </use-animate>
  </li>
  <li id="Slide-template--18952188363050__guarantees-6" className="grid__item slider__slide" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "15px" }}>
    <use-animate data-animate="zoom-fade" className="guarantee__item center guarantee-icon--large" animate="">
      <span className="image-animate guarantee__icon">
        <img
          data-src="//cdn.shopify.com/s/files/1/0682/8952/8106/files/payment_options_400x.png?v=1673413779"
          alt="refurbished laptop"
          className="lazyautosizes ls-is-cached lazyloaded"
          data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
          data-sizes="auto"
          sizes="57px"
          src="//cdn.shopify.com/s/files/1/0682/8952/8106/files/payment_options_400x.png?v=1673413779"
          style={{ maxWidth: "100%", height: "50px" }}
        />
      </span>
      <div>
             <p className="h4" style={{fontSize:"14px",margin:"10px"}}>MULTIPLE PAYMENT OPTIONS</p>
        <div className="rte typeset"></div>
      </div>
    </use-animate>
  </li>
            {/* Add similar li elements for other guarantees */}
          </ul>
        </slider-component>
      </div>
    </div>
  );
}

export default ProductSlider;
