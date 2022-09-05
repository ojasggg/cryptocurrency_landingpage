import React from "react";

import FeaturesSection1 from "./FeaturesSection1";
import FeaturesSection2 from "./FeaturesSection2";
import FeaturesSection3 from "./FeaturesSection3";

export default function Features() {
  return (
    <section
      className="p-12 lg:pt-24 bg-violet
    "
    >
      <div className="container mx-auto">
        <div
          className="text-center max-w-[758px] mx-auto mb-24"
          data-aos="fade-up"
          data-aos-offset="400"
        >
          <h2 className="section-title">
            Market sentiments, portfolio, and run the infrastructure of your
            choice
          </h2>
        </div>
        <FeaturesSection1 />
        <FeaturesSection2 />
        <FeaturesSection3 />
      </div>
    </section>
  );
}
