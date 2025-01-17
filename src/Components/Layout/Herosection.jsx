import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Herosection() {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-contact">
          <h1>Explore the World, One Country at a Time.</h1>
          <p className="p">
            Discover the history, culture, and beauty of every
            nation.Sort,search,and filter through countries to find the details hello
            you need.{" "}
          </p>
          <NavLink to="about">
            <button className="btn btn-darken btn-inline bg-white-box">
              Start Exploring <FaLongArrowAltRight />
            </button>{" "}
          </NavLink>
        </div>
        <div className="hero-image">
          <img
            src="/image/world.png"
            alt=" world is beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
}

export default Herosection;
