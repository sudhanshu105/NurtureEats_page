import React from 'react'
import css from './Recipes.module.css';
// import menu from '../../assets/Images/recipebook.jpg';
import food from '../../assets/Images/paratha.jpg';
import snack from '../../assets/Images/snacks.jpg';
import bread from '../../assets/Images/bread.jpg';

function Recipes() {
  return (
      <div className={css.overall}>
        <h1>Recipes</h1>
          <div className={css.outer}>

              <div className={css.firstbox}>
                  <img src={food} alt="menu book" />
                  <p className={css.heading}>Versatile Barley</p>
                  <p className={css.text}>Discover new culinary adventures with barley flour adaptations. <br /> From Chapatis, Parathas to Dosas and much more..</p>
              </div>

              <div className={css.secondbox}>
                  <img src={snack} alt="menu book" />
                  <p className={css.heading}>Energizing Snacks</p>
                  <p className={css.text}>Make healthy, energy-boosting snacks with multigrain flour.<br /> Cookies, Pancakes and Much more...</p>
              </div>

              <div className={css.lastbox}>
                  <img src={bread} alt="menu book" />
                  <p className={css.heading}>Hearty Breads</p>
                  <p className={css.text}>Bake nutritious, whole grain breads rich in flavor.</p>
              </div>
          </div>
      </div>
  )
}

export default Recipes