import React from "react";
import { Title, Link, Meta } from "react-head";
import Layout from "../components/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Images from "../../src/imageSorce";

const Seo = () => (
  <>
    <Title>Serditov architect</Title>
    <Meta name="description" content="Anton Serditov architect" />
    <Link rel="canonical" content="https://serditov.com/" />
  </>
);

let sliderImages = Images.map((imageURL, i) => {
  return (
    <div key={i}>
      <img src={imageURL} alt={""} />
    </div>
  );
});

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
    };
    return <Slider {...settings}>{sliderImages}</Slider>;
  }
}

const Home = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo />
      <SimpleSlider />
    </Layout>
  );
};

export default Home;
