import React from 'react';
import styled from 'styled-jsx/css';

const BrandCard = ({ brand }) => {
  return (
    <div className="brand-card">
      <img src={brand.image ? brand.image.url : "" } alt={brand.name} />
        <h3 style={{height: '2em'}}>{brand.name}</h3>
        <p>{brand.productCount} Products</p>
      <style jsx>{`
        .brand-card {
          background-color: #ffffff;
          margin-right: 10px;
          border: 1px solid #E4E5E7;
          border-radius: 4px;
          text-align: center;
          min-height: 13em;
        }
        h3 {
          font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 20px;
          color: #242528;
        }
        p {
          font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
          color: #55585D;
        }
        img {
          width: 100%;
          height: 100px;
        }
      `}</style>
    </div>
  );
};

export default BrandCard;
