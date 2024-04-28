import React from 'react';
import css from './Footer.module.css';
import Logo from '../../assets/Images/logo.png';
import Facebook from '../../assets/Images/facebook.png';
import Instagram from '../../assets/Images/Instagram.png';
import X from '../../assets/Images/X.png';
import Youtube from '../../assets/Images/youtube.png';
import Call from '../../assets/Images/call_icon.png';
import Message from '../../assets/Images/message_icon.png';
import { Link } from 'react-router-dom';
import Location from '../../assets/Images/locate.png';

const Footer = () => {
    return (
        <div className={css.foot}>
            <div className={css.footer}>
                <div className={css.logo}><img src={Logo} alt="" /></div>
                <div className={css.enquiry}>
                    <h2>ENQUIRY</h2> <hr />
                    <ul className={css.enquiry_ul}>
                        <li className={css.enquiry_li}>
                            <img className={css.phone} src={Call} alt="" />
                            <a  href="https://api.whatsapp.com/send?phone=9650169402" target='_blank'>
                            <h3 >+91 9650169402</h3> </a>
                        </li>
                        <li className={css.enquiry_li}>
                        <a href='mailto:ankur.keshari@nurtureeats.in'><img src={Message} alt="" /></a>
                            <a href='mailto:ankur.keshari@nurtureeats.in'><h3 className={css.emailbox}>ankur.keshari@nurtureeats.in</h3></a>
                        </li>
                    </ul>
                </div>

                <div className={css.locate}>
                    <h2>Locate Us</h2><hr />
                    <ul className={css.locate_ul}>
                        <li className={css.locate_li}>
                            {/* <img className={css.locate} src={Location} alt="" /> */}
                            NurtureEats, Prayagraj <br/> Uttar Pradesh - 211011 </li>
                        <Link to={'https://www.google.com/maps/place/Prayagraj,+Uttar+Pradesh/@25.4023959,81.7191832,12z/data=!3m1!4b1!4m6!3m5!1s0x398534c9b20bd49f:0xa2237856ad4041a!8m2!3d25.4358011!4d81.846311!16zL20vMDIwc2tj?entry=ttu'} target='_blank' className={css.locate_link}><li className={css.locate_li}>Site Map</li></Link>
                    </ul>
                </div>

                <div className={css.follow}>
                    <h2>Follow Us</h2><hr />
                    <ul className={css.follow_ul}>
                        <li className={css.follow_li}>
                            <img src={Facebook} alt="" />
                            <a href="https://www.facebook.com/NurtureEats.in">Facebook</a>
                        </li>
                        <li className={css.follow_li}>
                            <img src={Instagram} alt="" />
                            <a href="https://www.instagram.com/nurtureeats/">Instagram</a>
                        </li>
                        <li className={css.follow_li}>
                            <img src={X} alt="" />
                            <a href="twitter.com">Twitter</a>
                        </li>
                        <li className={css.follow_li}>
                            <img src={Youtube} alt="" />
                            <a href="https://www.youtube.com/@NurtureEats">Youtube</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={css.copyright}>
                <h3>© 2024 NurtureEats Limited All Rights Reserved.</h3>
            </div>
        </div>
    )
}

export default Footer
