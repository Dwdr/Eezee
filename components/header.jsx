import React, { useContext } from 'react';
import Navbar from './navbar';
import NavbarBase from './navbar-base';
import { CartContext } from '../context/cart-context';

const Header = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <header>
      <div className="header">
        <div
          className="rectangle flag"
          style={{
            backgroundImage:
              'url("https://storage.googleapis.com/eezee-storage/flags/SG.png")',
          }}
        ></div>
        <span style={{ color: '#55585D', fontSize: '14px', fontFamily: 'Roboto' }}>Singapore</span>
        <div className="phone-number">
          <img
            className="phone-icon"
            alt="Navbar Infomenu Phone Icon"
            src="https://storage.googleapis.com/imgez/icons/phone-icon-grey-secondary.svg"
          />
          <span style={{color: '#55585D', fontSize: '14px', fontFamily: 'Roboto' }}>+65 6797 9688</span>
        </div>
      </div>
      <Navbar />
      <NavbarBase />


      <style jsx>{`
        .header {
          display:flex;
          align-items: center;
          background-color: #efeff0;
          padding: 10px;
          margin: 0 auto;
        }
        .rectangle.flag {
          width: 21px;
          height: 14px;
          background-size: cover;
          margin-left:9%;
          margin-right:10px;
        }
        .phone-icon {
          height: 14px;
          margin-left: 40px;
          margin-right:10px;
        }
        .header span {
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
    </header>
  );
};

export default Header;
