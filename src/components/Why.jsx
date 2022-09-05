import React from "react";

// import image

import why from "../assets/img/why-img.png";

export default function Why() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-x-8">
          <div
            className="order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-offset="400"
          >
            <img src={why} alt="" />
          </div>
          <div
            className="order-1 lg:order-2 max-w-[480px]"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <h2 className="section-title">Why Should Choose CRAPPO</h2>
            <p className="section-subtitle">
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and gake reviews.
            </p>
            <button className="btn px-6">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
}
