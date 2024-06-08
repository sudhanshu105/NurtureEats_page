import React, {useState,useEffect} from 'react';
import css from './Barley.module.css';
import image1 from '../../assets/Images/barley/front.jpg';
import image2 from '../../assets/Images/barley/rear.jpg';
import image3 from '../../assets/Images/barley/multiple.jpg';
import image4 from '../../assets/Images/barley/keybenefits.jpg';
import image5 from '../../assets/Images/barley/fivebenefits.jpg';
import image6 from '../../assets/Images/barley/singlebanner.jpg';
import whatsappIcon from '../../assets/Images/whatsapp.png';

export const Barley = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const images = [image1, image2, image3, image4, image5, image6];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleClick = (image) => {
        setSelectedImage(image);
    };

    const [price, setPrice] = useState(199); 
    const [activeTile, setActiveTile] = useState(1); 

    const handleTileClick = (newPrice, tileNumber) => {
        setPrice(newPrice);
        setActiveTile(tileNumber);
    };

  return (
    <div className={css.outerbox}>
    <div className={css.main}>
        <div className={css.big}>
            <img src={selectedImage} alt="Selected" />
        </div>
        <div className={css.select}>
            {images.map((image, index) => (
            <img
                key={index}
                src={image}
                alt={`Image ${index}`}
                onMouseEnter={() => handleClick(image)}
                className={selectedImage === image ? css.active : ''}
            />
            ))}
        </div>
    </div>
    <div className={css.info}>
        <h3>NurtureEats Premium Barley Flour | Soft Fluffy Rotis | High In Protein and Fiber | Jau Atta | 100% Natural | 1000 g</h3>

        <div className={css.available}>
            Available Choices:
            <div className={`${css.smallTile} ${activeTile === 1 ? css.activeTile : ''}`} onClick={() => handleTileClick(199, 1)}>1 KG  <br /> Packet </div>
            <div className={`${css.smallTile} ${activeTile === 2 ? css.activeTile : ''}`} onClick={() => handleTileClick(799, 2)}> 5 KG<br />  Packet</div>
        </div>

           <div className={css.MRP}>
            MRP (Rs) : {price} 
            
           </div>

           
        
        <p><h4>About this item</h4><ul>
            <li >Wholesome Ingredient: NurtureEats Premium Barley Flour is sourced from the finest barley grains and meticulously processed to retain its natural goodness, offering nutritional benefits.</li>
            <li >Versatile Addition: This flour can be used in a variety of recipes to add flavor and nutrition, from baking to thickening sauces and more.</li>
            <li >Retains Nutrients: The careful processing methods help keep the natural vitamins, minerals, fiber and antioxidants found in barley grains.</li>
            <li >Satisfy Dietary Needs: Being gluten-free and high in nutrients like fiber, barley flour is suitable for various diets and health conscious cooking.</li>
            <li >Exceptional Quality: Sourced and produced to the highest standards, this barley flour promises superior taste and texture in any dish.</li></ul>        </p>

            <div className={css.bottombox}>
            <a href="https://amzn.in/d/f8Z4dUI" >
              <button className={css.buybutton}>Buy now</button></a>
            <a href="">
                
                <button>
                <span className={css.whatsappbutton}>
                    <img src={whatsappIcon} /> Contact Seller  </span>
                </button>
            </a> </div>
    </div>
    </div>
  )
}
