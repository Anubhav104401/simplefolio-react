import React from "react";
import config from "../index.json";

const Hero = () => {
  const hero = config.hero;

  return (
    <section id="hero" className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-surface py-16">
      <div className="site-container">
        <div
          className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-xl shadow-lg load-hidden"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            src="https://www.youtube.com/embed/JbzvEm_od5A"
            className="absolute left-0 top-0 h-full w-full border-0"
            title={`${hero.name} - Introduction`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <h1 className="hero-title mt-8 text-center font-bold load-hidden">
          Hi, I'm <span className="hero-name">{hero.name}</span>
          <br />
          {hero.subtitle}
        </h1>

        <div className="hero-cta mt-4 flex justify-center load-hidden">
          <a href="#about" className="cta-btn cta-btn--hero">
            <span>Know more ↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
