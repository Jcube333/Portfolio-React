import React from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Blog from "../../img/Blog.png";
import Dclutter from "../../img/DClutter.png";
import Drums from "../../img/Java1.png";
import Dice from "../../img/Dice.png";
import { useContext } from "react";
import { themeContext } from "../../Context";

function Projects() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Projects-Wrapper">
      <span style={{ color: darkMode ? "white" : "black" }}>My Portfolio</span>
      <span>Projects</span>

      <Swiper
        className="portfolio-slider"
        spaceBetween={130}
        slidesPerView={3}
        grabCursor={true}
      >
        <SwiperSlide>
          <img src={Blog} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Dclutter} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Drums} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Dice} alt="" />
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Projects;
