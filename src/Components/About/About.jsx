import React from 'react';
import css from './About.module.css';

function About() {
  return (
    <div className={css.overallbox}>
      <div className={css.content}>

        <div className={css.head}></div>
        <h2> Welcome to NurtureEats: Nourishing Your Well-being, One Bite at a Time</h2>
        <p>At NurtureEats, we believe in the transformative power of food. Our journey began with a simple yet profound mission: to provide nourishing, wholesome foods that support a vibrant and balanced lifestyle. Founded on the principles of quality, sustainability, and holistic wellness, NurtureEats is more than just a brand - it's a commitment to fostering health and happiness through every meal.</p>

        <div className={css.phil}>
          <h3>Our Philosophy:</h3>
          <p>At the heart of NurtureEats lies a deep-rooted philosophy centered on nourishing both body and soul. We understand that food is more than mere sustenance; it's a source of vitality, joy, and connection. That's why we meticulously curate our products, ensuring that each bite is a celebration of flavor and nutrition.</p>
        </div>

        <div className={css.care}>
          <h3>Quality and Care</h3>
          <p>Quality is the cornerstone of everything we do. From sourcing the finest ingredients to crafting delicious recipes, we prioritize excellence at every step of the process. Our products undergo rigorous quality checks to meet the highest standards of freshness, purity, and taste. With NurtureEats, you can trust that you're getting nothing but the best for you and your family.</p>
        </div>

        <div className={css.sustain}>
          <h3>Sustainability</h3>
          <p>We're committed to making a positive impact on the planet. That's why sustainability is woven into the fabric of our brand. From eco-friendly packaging to responsible sourcing practices, we strive to minimize our environmental footprint and contribute to a healthier, more sustainable world.</p>
        </div>

        <div className={css.conn}>
          <h3>Community and Connection</h3>
          <p>At NurtureEats, we believe that food has the power to bring people together. That's why we're dedicated to fostering a vibrant community of like-minded individuals who share our passion for health and wellness. Join us as we explore new flavors, share recipe ideas, and celebrate the joy of nourishing food.</p>
        </div>

        <div className={css.join}>
          <h3>Join Us</h3>
          <p>Ready to embark on a journey to vibrant health and well-being? We invite you to join the NurtureEats family today. Discover our delicious products, connect with our community, and nourish your body and soul with every bite. Together, let's create a world where good food is not only nutritious but also a source of joy and vitality. Welcome to NurtureEats - where every bite is a step towards a healthier, happier you.</p>
        </div>

      </div>
    </div>
  )
}

export default About
