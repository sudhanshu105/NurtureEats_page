import React from 'react'
import css from './Home.module.css';
import pic from '../../assets/Images/mainimage.jpg';
import back from '../../assets/Images/barleyfields.jpg';
import logo from '../../assets/Images/logo.png';


function Home() {
  return (
      <div className={css.outerbox}>

          <div className={css.grid_container}>
              <div className={css.item1}>
                  <p className={css.heading}>Elevate Your Health Today With NurtureEats</p>
                  <div className={css.subbox}>
                      <h3>Nutrition Packed</h3>
                      Rich in essential vitamins and minerals
                  </div>
              </div>

              <div className={css.item2}>
                  <img src={logo} alt="Your Image" />
                  <div className={css.tag}>
                      <h2>NurtureEats</h2>
                      <h4>
                          #FOODforHEALTH
                      </h4>
                  </div>
              </div>
              <div className={css.item3}>
                  <p className={css.normal}><span className={css.homehead}>100+ </span> Happy Homes </p>

                  <img src={back} alt="fields" />

                  <div className={css.bottombox}>

                    <h3>Pure Ingredients</h3>
                    Sourced from the finest organic farms.
                    </div>
              </div>
          </div>
      </div>
  )
}

export default Home