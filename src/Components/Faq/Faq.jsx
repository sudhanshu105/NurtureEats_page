import React from 'react'
import css from './Faq.module.css';
import pic from '../../assets/Images/flour.jpg';
import { useState } from 'react';
function Faq() {
  
  const [openIndex, setOpenIndex] = useState(null);

  const handleHeadingClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <div className={css.outer}><h1>FAQS</h1>
        <div className={css.internal_box}>
        <div className={css.text}
        >
          <hr />
          <p className={css.heading}
            onClick={() => handleHeadingClick(1)}
          >What are the nutritional benefits of barley flour? </p>
          <p
            className={`${css.content} ${openIndex === 1 ? css.open : ''
              }`}
          >
            Barley flour is rich in fiber, vitamins, and minerals. It contains nutrients such as fiber, B-vitamins, iron, magnesium, and antioxidants.
          </p> <hr />

          <p className={css.heading} onClick={() => handleHeadingClick(2)}>Can barley flour be substituted for other flours in recipes?</p>
          <p
            className={`${css.content} ${openIndex === 2 ? css.open : ''
              }`}
          >
            Yes, barley flour can be substituted for a portion of wheat flour in many recipes. However, due to its gluten content, it may not be suitable for a complete substitution in recipes that require the elasticity of gluten.{' '}
          </p>{' '} <hr />

          <p className={css.heading} onClick={() => handleHeadingClick(3)}>Is barley flour gluten-free?</p>
          <p
            className={`${css.content} ${openIndex === 3 ? css.open : ''
              }`}
          >
            No, barley flour contains gluten. It is not suitable for individuals with gluten sensitivity or celiac disease.{' '}
          </p>{' '} <hr />

          <p className={css.heading} onClick={() => handleHeadingClick(4)}>Can barley flour be substituted for other flours in recipes?</p>
          <p
            className={`${css.content} ${openIndex === 4 ? css.open : ''
              }`}
          >
            Yes, barley flour can be substituted for a portion of wheat flour in many recipes. However, due to its gluten content, it may not be suitable for a complete substitution in recipes that require the elasticity of gluten.{' '}
          </p>{' '} <hr />

        </div>

        <div className={css.imageContainer}>
          <img src={pic} alt="barley" />
        </div>
        </div>
    </div>
  )
}

export default Faq