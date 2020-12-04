import React from "react";
import Layout from "../components/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Images from "../../src/imageSorce";

const sliderImages = Images.map((imageURL, i) => {
  return (
    <div key={i}>
      <img src={imageURL} alt={"Serditov Architect - main slider"} />
    </div>
  );
});

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 1000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      lazyLoad: true,
      // variableWidth: true,
      arrows: false,
      // adaptiveHeight: true,
      // centerMode: true,
    };
    return <Slider {...settings}>{sliderImages}</Slider>;
  }
}

const Home = ({ location }) => {
  return (
    <Layout location={location}>
      <SimpleSlider />
    </Layout>
  );
};

export default Home;
