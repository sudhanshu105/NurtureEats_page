import React from 'react'
import css from './WhyBarley.module.css';
import Logo from '../../assets/Images/logo.png';
import Bowl from '../../assets/Images/bowl.png';
import heartimg from '../../assets/Images/heart.jpg';
import diabetesimg from '../../assets/Images/diabetic.jpg';
import digestionimg from '../../assets/Images/stomach.jpg';
import weightimg from '../../assets/Images/weightcontrol.jpg';
import vitamin from '../../assets/Images/vitamin.jpg';
import antioxidents from '../../assets/Images/antioxi.jpeg';
import Nutrition from '../../assets/Images/nutritioncut.png';

function WhyBarley() {
  return (
    <div className={css.overall}>
      <div className={css.upper_heading}>
        <h1>Why Barley?</h1>
      </div>

      <div className={css.history}>
        <div className={css.image}>
          <img src={Bowl} alt="" />
        </div>
        <div className={css.history_text}>
          <h3>HISTORY OF BARLEY</h3>
          <p>Barley has played a crucial role in human history as one of the earliest domesticated crops. It served as adietary staple for ancient civilizations, facilitated the transition to settled societies, contributed to trade and economy, and held religious and cultural significance. Barley's versatility, nutritional value, use in brewing and traditional medicine have influenced various aspects of human life and continue to shape culinary heritage worldwide.</p>
        </div>
      </div>

      <div className={css.nutriotion}>
        <div className={css.headandimage}>
        <h1 className={css.nutriotion_heading}>NUTRITIONAL CONTENT</h1>
        <img src={Nutrition} alt="Explaining nutrition" />

        </div>
        <div className={css.nutriotion_value}>
        
        <div className={css.tablebox}>

          <table className={css.tabl}>

            <th className={css.thhead} colSpan="3"> Macronutrients </th>

            <tr>
              <td className={css.tablecon}>  </td>
              <th className={css.tablecon}> Wheat Flour </th>
              <th className={css.tablecon}>Pearled Barley Flour</th>
            </tr>

            <tr>
              <th className={css.tablecon}>Calorie</th>
              <td className={css.tablecon}>361</td>
              <td className={css.tablecon}>352</td>
            </tr>

            <tr>
              <th className={css.tablecon}>Carbs</th>
              <td className={css.tablecon}>72.5 gms</td>
              <td className={css.tablecon}>72.7 gms</td>
            </tr>

            <tr>
              <th className={css.tablecon}>Protein</th>
              <td className={css.tablecon}>12 gms</td>
              <td className={css.tablecon}>9.9 gms</td>
            </tr>

            <tr>
              <th className={css.tablecon}>Fat</th>
              <td className={css.tablecon}>1.7 gms</td>
              <td className={css.tablecon}>1.2 gms</td>
            </tr>

            <tr>
              <th className={css.tablecon}>Fiber</th>
              <td className={css.tablecon}>2.4 gms</td>
              <td className={css.tablecon}>15.6 gms</td>
            </tr>

          </table>
          <h4 className={css.vertical_text}>
          (Per 100 gms Sample)
        </h4>
          </div>

        </div>

        <div className={css.nutriotion_value}>
        <div className={css.tablebox}>
        <table className={css.tablesecond}>

          <th className={css.thhead} colSpan="3"> Macronutrients </th>

          <tr>
            <td className={css.tablecon}>  </td> <th className={css.tablecon}> Wheat Flour </th> <th className={css.tablecon}>Pearled Barley Flour</th>
          </tr>

          <tr>
            <th className={css.tablecon}>Manganese</th> <td className={css.tablecon}>34 % of the DV </td> <td className={css.tablecon}>58 % of the DV</td>
          </tr>

          <tr>
            <th className={css.tablecon}>Copper</th> <td className={css.tablecon}>20 % of the DV </td> <td className={css.tablecon}>47 % of the DV</td>
          </tr>

          <tr>
            <th className={css.tablecon}>Zinc</th> <td className={css.tablecon}>8 % of the DV </td> <td className={css.tablecon}>19 % of the DV</td>
          </tr>

          <tr>
            <th className={css.tablecon}>Phosphorus</th> <td className={css.tablecon}>8 % of the DV </td> <td className={css.tablecon}>18 % of the DV</td>
          </tr>

          <tr>
            <th className={css.tablecon}>Iron</th> <td className={css.tablecon}>5 % of the DV </td> <td className={css.tablecon}>14 % of the DV</td>
          </tr>

          <tr>
            <th className={css.tablecon}>Magnesium</th> <td className={css.tablecon}>6 % of the DV </td> <td className={css.tablecon}>19 % of the DV</td>
          </tr>

          <tr>
            <th className={css.tablecon}>Potassium</th> <td className={css.tablecon}>2 % of the DV </td> <td className={css.tablecon}>6 % of the DV</td>
          </tr>

        </table>
        <h4 className={css.vertical_text}>
          (DV= Daily value)
        </h4>
        </div>
        </div>
      </div>

      <h2 className={css.healthhead}>Health Benefits</h2>

      <div className={css.health}>

        <div className={css.heart}>
        <img src={heartimg} alt="" />

        <p>
          <h3>IMPROVES HEART HEALTH</h3>
          The soluble fiber in barley, particularly beta-glucans help lower LDL cholesterol levels, which is beneficial for cardiovascular health. <br />
          <span className={css.emphasis}>(***LDL = Low Density Lipoprotein) </span>
        </p>
        </div>

        <div className={css.diabetes}>
        <p>
          <h3>STABILIZED BLOOD SUGAR AND DIABETES</h3>
          A low glycemic index releases sugar into the bloodstream slowly, helping to stabilize blood sugar levels & beneficial for people with diabetes or those looking to manage their blood sugar levels
        </p>
        <img src={diabetesimg} alt="" />
        </div>

        <div className={css.weight}>
        <img src={weightimg} alt="" />
        <p>
          <h3>WEIGHT CONTROL</h3>
          Due to high fiber content and low glycemic index, barley flour promotes satiety and help control hunger, potentially supporting weight management efforts.

        </p>
        </div>

        <div className={css.digestion}>
        <p>
          <h3>PROMOTING DIGESTIVE HEALTH</h3>
         Insoluble fiber in barley flour acts as a prebiotic, providing food for the beneficial bacteria in the gut and promote their growth thus improving gut health and reduce the risk of digestive disorders such as inflammatory bowel disease and colon cancer.

        </p>
        <img src={digestionimg} alt="" />
        </div>

        <div className={css.vitamins}>
        
        <img src={vitamin} alt="" />
        <p>
          <h3>RICH IN VITAMIN AND MINERALS</h3>
          Contains various essential vitamins and minerals, including vitamin B6, niacin (vitamin B3), manganese, phosphorus, and magnesium. These nutrients are important for various bodily functions, such as energy production, bone health, and nervous system function 
        </p>
        </div>

        <div className={css.antioxi}>
        <p>
          <h3>ANTIOXIDENT PROPERTIES</h3>
          Antioxidants such as beta-glucans and tocotrienols, which help neutralize harmful free radicals in the body and also play a role in reducing oxidative stress and inflammation, which contribute to various chronic diseases. 
        </p>
        <img src={antioxidents} alt="" />
        </div>

      </div>

      
    </div>
  )
}

export default WhyBarley