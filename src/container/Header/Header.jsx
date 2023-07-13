import React from 'react';
import images from "../../constants/images"
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div id="home" className="app__header app__wrapper section __padding">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour"></SubHeading>
      <h1 className="app__header-h1">The Key To Fine Dining</h1>  
      <p className="p__opensans" style={{margin:'2rem 0'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem magni quis voluptatum nisi libero molestiae quibusdam pariatur totam ab. Praesentium ex corporis quo! Quis aspernatur excepturi esse impedit, maiores ipsa?</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header-img"/>
    </div>
  </div>
);

export default Header;
