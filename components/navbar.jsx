import React, { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import Link from 'next/link';



const Navbar = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  return (
    <div className="navbar-container">
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
        <Link href="/">
          <div >
            <img
              alt="Logo"
              src="https://storage.googleapis.com/imgez/eezee-logos/logo-on-white-nopadding.svg"
              height="44"
              width="150"
            />
          </div>
        </Link>
        </div>
          <div style={{width: '50px'}}className="navbar-links">
          <Link href="/cart" >
            <div>
              <div>
              <img
                alt="Cart"
                src="https://storage.googleapis.com/imgez/icons/cart-icon.svg"
                className="rectangle-img"
                style={{
                  marginTop: '7px',
                  position: 'absolute',
                  transform: 'translateX(25%)', 
                }}
              />
              <div style={{marginLeft: '30px',borderRadius: '10px', height: '20px', width: '20px', backgroundColor: '#2A64DB', position: 'absolute'}}>
                  <div style={{textAlign: 'center', color: '#fff', fontFamily: 'Roboto, san-serif'}}>
                    {cartItems}
                  </div>
                </div>
                <span style={{ color: '#55585D', marginLeft: '15px', marginTop:'40px',fontFamily: 'Roboto, san-serif' }}>
                  Cart
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .navbar-container {
          justify-content: space-between;
          background-color: #ffffff;
          padding: 10px;
          width: 1160px;
          margin-right: 9%;
          margin-left: 9%;
        }

        .navbar-links span {
          display: inline-block;
          font-family: 'Roboto' , san-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
          color: #2a64db;
          text-decoration: none;
          cursor: pointer;
        }
        .navbar-links span:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
