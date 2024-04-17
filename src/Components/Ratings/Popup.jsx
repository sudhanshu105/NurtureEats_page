import React from 'react'
import {useState} from 'react';
import css from './Popup.module.css';

function Popup({ trigger, setReview }) {
  const [rating, setRating] = useState(0);

  const [review, setReview] = useState(false); //review set
  {!review ? 
    <button onClick={() => setReview(!review)}>
      Review
    </button>
    :
    <Popup trigger={review} setReview={setReview} /> // Pass review and setReview Both
  }

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return trigger ? (
    <div className={css.outer}>
      <div className={css.inner}>
        <h3>Reviews and Ratings</h3>
        <form action="/submit_review" method="post" encType="multipart/form-data">
          <div className={css.textareaContainer}>
            <textarea className={css.textin} name="review" id="review" placeholder="Write your review here"></textarea> <br/>
          </div>
        </form>

        <div className={css.ratingContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= rating ? css.selectedStar : css.star}
                  onClick={() => handleStarClick(star)}
                >
                  ★
                </span>
              ))}
            </div>

        <button className={css.buttonsub} onClick={() => setReview(!trigger)}>
          Submit
        </button>
      </div>
    </div>
  ) : null;
}

export default Popup