import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import UH109 from "./images/UH109.png";
import UH110 from "./images/UH110.png";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import USRHubCarouselCSS from './USRHubCarouselCSS.css'

export default function USRHubCarousel() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
  };

  return (
    <div>
      <div className="hr-line"></div>
      <div className="slider-container" style={{margin: '50px'}}>
        <Slider ref={sliderRef} {...settings}>
          <div >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img src={UH109} alt="US1"/>
              </Grid>
              <Grid item xs={6}>
                <Grid container direction="column" alignItems="flex-start" spacing={8}>
                  <Grid item>
                    <Typography variant="h6">USR HUB</Typography>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="primary">查看更多</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img src={UH110} alt="US2" />
              </Grid>
              <Grid item xs={6}>
                <Grid container direction="column" alignItems="flex-start" spacing={8}>
                  <Grid item>
                    <Typography variant="h6">USR</Typography>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="primary">查看更多</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Slider>
      </div>
    </div>
  );
}
