import React, {Component} from "react";
import '../Slider.css';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';

class Gallery extends Component {

  render() {
  return <ImageSlider slides={SliderData} />;
  }
}

export default Gallery;

