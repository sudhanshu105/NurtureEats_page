import React from 'react'
import css from './Faq.module.css';
import pic from '../../assets/Images/flour.jpg';
import { useState, useEffect, useLayoutEffect } from 'react';
import { Link , useLocation, useNavigate} from 'react-router-dom';

function Faq() {
  
  const [openIndex, setOpenIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const handleHeadingClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/faq') {
        setShowMore(true); 
    }
}, [location.pathname]);

  useLayoutEffect(() => {
    console.log("Scrolling to top");
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate(); 

  const handleShowMoreClick = () => {
    setShowMore(true);
    navigate('/faq');
};


  return (
    <div className={css.outer}><h1>FAQS</h1>
        <div className={css.internal_box}>
        <div className={css.text}
        >
          <hr />
          <p className={css.heading}
            onClick={() => handleHeadingClick(1)}
          >What are superfoods? </p>
          <p
            className={`${css.content} ${openIndex === 1 ? css.open : ''
              }`}
          >
            Superfoods are nutrient-rich foods that are particularly beneficial for health and well-being. They are packed with vitamins, minerals, antioxidants, and other essential nutrients that promote overall health and may even help prevent certain diseases.
          </p> <hr />

          <p className={css.heading} onClick={() => handleHeadingClick(2)}>What types of superfoods does NurtureEats offer?</p>
          <p
            className={`${css.content} ${openIndex === 2 ? css.open : ''
              }`}
          >
            At NurtureEats, we prioritize delivering top-notch quality in every product, paying meticulous attention to detail throughout the development and manufacturing process. Currently, our offerings include two exceptional flours: Premium Barley and Premium Multigrain flour, both crafted to meet our exacting standards. Additionally, we have an exciting lineup of new products set to launch soon. Our commitment to meticulously curating our products ensures they not only provide optimal nutrition but also contribute to fostering a healthy lifestyle.{' '}
          </p>{' '} <hr />

          <p className={css.heading} onClick={() => handleHeadingClick(3)}>How are NurtureEats superfoods sourced?</p>
          <p
            className={`${css.content} ${openIndex === 3 ? css.open : ''
              }`}
          >
            We take great care in sourcing our superfoods from trusted suppliers who share our commitment to quality, sustainability, and ethical practices. Our products are sourced from organic and non-GMO sources whenever possible, and we prioritize fair trade practices.{' '}
          </p>{' '} <hr />

          <p className={css.heading} onClick={() => handleHeadingClick(4)}>Are NurtureEats superfoods suitable for everyone?</p>
          <p
            className={`${css.content} ${openIndex === 4 ? css.open : ''
              }`}
          >
            Yes, most of our superfoods are suitable for people of all ages and dietary preferences. However, individuals with specific dietary restrictions or allergies should carefully review the product ingredients and consult with a healthcare professional if necessary.{' '}
          </p>{' '} <hr />
          {showMore && (
            <>

              <p className={css.heading} onClick={() => handleHeadingClick(5)} >
              How should NurtureEats superfoods be consumed?
              </p>
              <p className={`${css.content} ${openIndex === 5 ? css.open : ''}`}>
              NurtureEats takes pride in offering a diverse selection of superfoods, including our premium Barley flour and Multigrain flour. These versatile ingredients can elevate the nutritional value and taste of numerous recipes and dishes. Whether you're baking bread, making pancakes, or preparing savory dishes, our superfood flours are the perfect addition to your kitchen arsenal.<br />
              To inspire culinary creativity, we provide a wealth of recipe ideas and serving suggestions. From hearty soups to wholesome baked goods, our recipes showcase the versatility and deliciousness of incorporating our superfood flours into your meals. Let us be your guide as you explore new ways to nourish your body and delight your taste buds with NurtureEats superfoods.

              </p>
              <hr />
              
              <p className={css.heading} onClick={() => handleHeadingClick(6)} >
              Do NurtureEats superfoods have any additives or preservatives?
              </p>
              <p className={`${css.content} ${openIndex === 6 ? css.open : ''}`}>
              No, our superfoods are free from artificial additives, preservatives, and fillers. We believe in providing pure, natural products that retain their nutritional integrity and flavor.
              </p>
              <hr />

              <p className={css.heading} onClick={() => handleHeadingClick(7)} >
              How do you maintain quality and freshness of the food?
              </p>
              <p className={`${css.content} ${openIndex === 7 ? css.open : ''}`}>
              At NurtureEats, we're dedicated to delivering food products in packaging designed to minimize the risk of spillage and maximize freshness for extended periods. Our packaging solutions are carefully selected to ensure that your items are securely sealed, reducing the likelihood of any accidental leaks or mess during transport or storage.<br />
              Moreover, we understand the importance of preserving the quality and flavor of our products over time. That's why our packaging is specifically chosen to maintain freshness, keeping your food items at their peak for as long as possible. With NurtureEats, you can trust that your food will arrive safely and remain deliciously fresh until you're ready to enjoy it.

              </p>
              <hr />

              <p className={css.heading} onClick={() => handleHeadingClick(8)} >
              Do NurtureEats superfoods have any known health benefits?
              </p>
              <p className={`${css.content} ${openIndex === 8 ? css.open : ''}`}>
              While the specific health benefits of each superfood may vary, many of our products are rich in vitamins, minerals, antioxidants, and other nutrients that support overall health and well-being. Incorporating superfoods into your diet can help boost energy levels, support immune function, improve digestion, and promote longevity.
              </p>
              <hr />

              <p className={css.heading} onClick={() => handleHeadingClick(9)} >
              Where can I purchase NurtureEats superfoods?
              </p>
              <p className={`${css.content} ${openIndex === 9 ? css.open : ''}`}>
              NurtureEats superfoods are available for purchase on our website and through select retail partners such as Amazon.in. 
              </p>
              <hr />
              
            </>
          )}

          {!showMore && (
            <button onClick={handleShowMoreClick}><Link to='faq'> Read more </Link></button>
          )}
        </div>

        <div className={css.imageContainer}>
          <img src={pic} alt="barley" />
        </div>
        </div>
    </div>
  )
}

export default Faq