import React from 'react'
import picture from '../../assets/Images/toasted.jpg';
import css from './Choices.module.css';
import leaves from '../../assets/Images/leaves.jpg';
import barley from '../../assets/Images/barleyimg.jpg';

function Choices() {
  return (

      <div className={css.content}>

        <div className={css.headline}>
            <h3>Organic Choices Matter</h3>
        </div>
        
        <div className={css.maincontent}>
              
            <div className={css.firstImg}>
                <img src={barley} alt="pic" className={css.pic1}/>
                <img src={picture} alt="pic" className={css.pic2}/>
            </div>

            <div className={css.text}>
                <span className={css.heading}>Farm-Sourced Products</span>
               <p> Every grain in our product line is sourced from certified organic farms, ensuring sustainability and unbeatable nutritional value. </p>
            </div>

            <div className={css.lastImg}>
            <img src={leaves} alt="pic" className={css.pic3}/>
            </div>

        </div>
         
      </div>
  )
}

export default Choices