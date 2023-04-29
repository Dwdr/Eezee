import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';

const ProductPriceCard = ({ price }) => {
  const [quantity, setQuantity] = useState(0);
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(Math.max(quantity - 1, 0));
  };

  const addToCart = () => {
    alert(`Added ${quantity} items to the cart`);
    setCartItems(cartItems + quantity);
    // TODO: Add the actual logic for adding the product to the cart
  };

  const addToFavorites = () => {
    console.log('Added to favourites');
    // TODO: Add the actual logic for adding the product to the favourites
  };

  return (
    <div className="product-price-card">
      <div style={{display: 'flex', flexDirection: 'row'}}>
      <p style={{verticalAlign: 'top', paddingTop: '7px', marginRight: '5px', fonSsize: "20px" , color: "#2a64db", letterSpacing: '1px'}}>S$</p>
      <h1 className="price">{` ${price}`.replace("S$","")}</h1>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <div className= "dashline"></div>
      </div>
      <div style={{ display: 'flex', marginBottom: '10px' , marginTop: '10px'}} className="quantity">
        <p>Quantity:</p>
        <div className='increment-container'> 
          <button className='increment-button' style={{border: 'none', backgroundColor: 'transparent', borderRight: '1px solid #D9D9D9'}} onClick={handleDecrement}>-</button>
          <input type="number" value={quantity} readOnly style={{ marginRight: 0, textAlign: 'center',border: 'none', backgroundColor: 'transparent',fontSize: '20px' ,borderRight: '1px solid #D9D9D9'}} />
          <button className='increment-button' style={{border: 'none', backgroundColor: 'transparent', borderLeft: '1px solid #D9D9D9'}} onClick={handleIncrement}>+</button>
        </div>
      </div>
      <button className="add-to-cart" onClick={addToCart}>
        Add to Cart
      </button>
      <button className="add-to-favourites" onClick={addToFavorites}>
        Add to Favourites
      </button>
      <style jsx>{`
        p{
          font-family: 'Roboto', sans-serif;
        }

        .product-price-card {
          height: 250px;
          width: 300px;
          background: #FFFFFF;
          border: 1px solid #E4E5E7;
          border-radius: 4px;
          font-family: 'Roboto', sans-serif;
          text-align: left;
          padding: 16px;
          box-sizing: border-box;
        }
        .price {
          font-size: 30px;
          color: #2a64db;
        }
        .quantity {
          font-size: 14px;
          color: #55585d;
          display: flex;
          align-items: center;
          margin-left: 4px;
        }
        .quantity p {
          margin-right: 40px;
        }
        .quantity input {
          width: 40px;
          margin: 0 4px;
        }
        .add-to-cart,
        .add-to-favourites {
          font-size: 14px;
          font-color: #fff;
          padding: 8px 12px;
          margin-top: 10px;
          width: 100%;
          border: none;
          cursor: pointer;
          outline: none;
        }
        .add-to-cart {
          background-color: #2a64db;
          color: white;
        }
        .add-to-favourites {
          background-color: #ffffff;
          color: #2a64db;
          border: 1px solid #d7d8db;
        }
        
        .increment-container {
          box-sizing: border-box;
          gap: 10px;
          background-color: #ffffff;
          border: 1px solid #D9D9D9;
          border-radius: 2px 0px 0px 2px;
          color: #000000;
          cursor: pointer;
          outline: none;
        }

        .increment-button{
          font-size: 20px;
          color: #2A64DB;
          padding-right: 10px;
        }
        .dashline{
          width: 90%;
          border-bottom: 1px dashed #E4E5E7;
        }
      `}</style>
    </div>
  );
};

export default ProductPriceCard;
