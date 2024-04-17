import React from 'react';
import ReactStars from 'react-stars';
import css from './Reviews.module.css';
import imag from '../../assets/Images/avatar.jpg';
import pic from '../../assets/Images/happy.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




const reviewsData = [
  {
    id: 1,
    author: 'Sudhanshu',
    review: 'Premium Quality!!',
    // image:{imag},
    date: '11-04-2023',
    stars: 5,
  },
  {
    id: 2,
    author: 'Anurag',
    review: 'Very Good in taste and great for health',
    // image:{imag},
    date: '11-04-2023',
    
    stars: 4.5,
  },
  {
    id: 3,
    author: 'Harsh',
    review: 'Love this ! Definetley gonna try again !!',
    // image:{imag},
    date: '11-04-2023',
    stars: 4,
  },
  {
    id: 4,
    author: 'Rajat',
    review: `Great Taste light weight on stomach.. Definetly a must have!`,
    // image:{imag},
    date: '11-04-2023',
    stars: 5,
  },
  {
    id: 5,
    author: 'Aditya',
    review: `Very healthy and tons of options to use in! Great choice!!`,
    // image:{imag},
    date: '11-04-2023',
    stars: 5,
  },

];


const Reviews = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };

  return (
    <div className={css.outer}>
<h2>Customer Reviews ( <span className={css.noformat}> {reviewsData.length} </span> )</h2>
      <div className={css.content}>
      

      <div className={css.reviewsection}>
      {/* <Slider 
        {...sliderSettings}> */}
      <Carousel 
      infinite={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      showDots={true}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
      // containerClass="carousel-container"
      responsive={responsive}>

        {reviewsData.map(review => (
          <div key={review.id} 
          className={css.items}
        > 


            <ReactStars
            className={css.stars}
              count={5}
              size={30}
              color2={'#0047ba'}
              edit={false}
              value={review.stars}
            />
            <div className={css.profile}>
              <img src={imag} alt={`${review.author}'s Image`} />
              <p> <span className={css.namehead}> {review.author} </span> <br /> {`Reviewed on ${review.date} `}</p> </div>
              
            
         
            <p>{review.review}</p>
            
            
          </div>
        ))}
      {/* </Slider> */}
      </Carousel>
      </div>

      <div className={css.photo}>
        <div className={css.innerbox}> </div>
        <div className={css.imagebox}>
          <img src={pic} alt="picture" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Reviews;
