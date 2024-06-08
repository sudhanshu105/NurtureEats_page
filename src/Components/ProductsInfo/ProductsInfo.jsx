import React, {useState,useEffect} from 'react';
import css from './ProductsInfo.module.css';
import image1 from '../../assets/Images/MultiGrain_front.png';
import image2 from '../../assets/Images/multi_back.jpg';
import image3 from '../../assets/Images/MultiMultiGrain.jpg';
import image4 from '../../assets/Images/multiGraininfo.jpg';
import image5 from '../../assets/Images/multigrain_benefits.jpg';
import image6 from '../../assets/Images/benefits.jpg';
import whatsappIcon from '../../assets/Images/whatsapp.png';

export const ProductsInfo = () => {

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
        <h3>NurtureEats Premium Multigrain Flour/Atta| Superfood Solution| Soft Fluffy Rotis | Nutrients Powerhouse| High Fiber| 55% Premium Sharbati Wheat| 45% Premium Best Grade Grains |1000 gms</h3>

        <div className={css.available}>
            Available Choices:
            <div className={`${css.smallTile} ${activeTile === 1 ? css.activeTile : ''}`} onClick={() => handleTileClick(199, 1)}>1 KG  <br /> Packet </div>
            <div className={`${css.smallTile} ${activeTile === 2 ? css.activeTile : ''}`} onClick={() => handleTileClick(799, 2)}> 5 KG<br />  Packet</div>
        </div>

           <div className={css.MRP}>
            MRP (Rs) : {price}
           </div>
        
        <p><h4>About this item</h4><ul>
            <li >Premium Quality: NurtureEats Multigrain Flour is crafted from a meticulous blend of the finest grains directly sourced from dedicated farmers for peak quality.</li>
            <li >Balanced Nutrition: With 55% high quality wheat and 45% select grains, this flour delivers a perfect balance of exceptional taste and nutrition in every us.</li>
            <li >Committed to Purity: Crafted with a commitment to purity, this flour is free from additives and preservatives for a clean label you can feel good about.</li>
            <li >Rich Nutrient Profile: The diverse grain composition provides a rich tapestry of vitamins, minerals, plant compounds and fiber to support your health and ellbeing.</li>
            <li >Versatile Ingredient: Use this premium flour for baking breads, pastries or other recipes for a delicious taste the whole family will enjoy.</li></ul>        </p>

            <div className={css.bottombox}>
            <a href="https://amzn.in/d/hhqlRTL" >
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
