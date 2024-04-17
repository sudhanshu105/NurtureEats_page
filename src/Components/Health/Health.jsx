import React from 'react'
import css from './Health.module.css';
import pic from '../../assets/Images/toast.jpg';
import heartimg from '../../assets/Images/heart.jpg';
import diabetesimg from '../../assets/Images/diabetic.jpg';
import digestionimg from '../../assets/Images/belly.jpg';
import weightimg from '../../assets/Images/weightcnt.jpg';
import vitamin from '../../assets/Images/vitamin.jpg';
import antioxidents from '../../assets/Images/antioxi.jpeg';

function Health() {
  return (
    <div className={css.main}>
        <div className={css.uppercontent}>
        <h1>Health Benefits</h1>
        <div className={css.head} ><p>Choosing NurtureEats means embracing a healthier lifestyle with our scientifically engineered Multigrain and Barley Flours. </p></div>
        </div>
        
    <div className={css.outerbox}>
        <div className={css.innerbox}>
        <div className={css.imagecontent}>
            <img src={heartimg} />
        </div>
        <div className={css.text}>
            <h3>IMPROVES HEART HEALTH</h3>
            <p>The soluble fiber in barley, particularly beta-glucans help lower LDL cholesterol levels, which is beneficial for cardiovascular health.</p>
        </div>
        </div>

        <div className={css.innerbox}>
        <div className={css.imagecontent}>
            <img src={digestionimg} />
        </div>
        <div className={css.text}>
            <h3>PROMOTING DIGESTIVE HEALTH</h3>
            <p>Insoluble fiber in barley flour acts as a prebiotic, providing food for the beneficial bacteria in the gut and promote their growth thus improving gut health and reduce the risk of digestive disorders such as inflammatory bowel disease and colon cancer.</p>
        </div>
        </div>

        <div className={css.innerbox}>
        <div className={css.imagecontent}>
            <img src={diabetesimg} />
        </div>
        <div className={css.text}>
            <h3>STABILIZED BLOOD SUGAR AND DIABETES</h3>
            <p>A low glycemic index releases sugar into the bloodstream slowly, helping to stabilize blood sugar levels & beneficial for people with diabetes or those looking to manage their blood sugar levels</p>
        </div>
        </div>

        <div className={css.innerbox}>
        <div className={css.imagecontent}>
            <img src={vitamin} />
        </div>
        <div className={css.text}>
            <h3>RICH IN VITAMIN AND MINERALS</h3>
            <p>Contains various essential vitamins and minerals, including vitamin B6, niacin (vitamin B3), manganese, phosphorus, and magnesium. These nutrients are important for various bodily functions, such as energy production, bone health, and nervous system function </p>
        </div>
        </div>

        <div className={css.innerbox}>
        <div className={css.imagecontent}>
            <img src={antioxidents} />
        </div>
        <div className={css.text}>
            <h3>ANTIOXIDENT PROPERTIES</h3>
            <p>Antioxidants such as beta-glucans and tocotrienols, which help neutralize harmful free radicals in the body and also play a role in reducing oxidative stress and inflammation, which contribute to various chronic diseases</p>
        </div>
        </div>

        <div className={css.innerbox}>
        <div className={css.imagecontent}>
            <img src={weightimg} />
        </div>
        <div className={css.text}>
            <h3>WEIGHT CONTROL</h3>
            <p>Due to high fiber content and low glycemic index, barley flour promotes satiety and help control hunger, potentially supporting weight management efforts.</p>
        </div>
        </div>

    </div>
    </div>
  )
}

export default Health