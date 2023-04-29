import React from 'react';
import Link from 'next/link';

const titleStyle = {
  fontFamily: "Roboto, sans-serif",
  fontSize: "14px",
  fontWeight: "400",
  textAlign: "left",
  display: "inline-block",
  color: "#242528",
};


const AdditionalInfoComponent = ({ product }) => {
  const vipPriceStyle = {
    fontFamily: "Roboto, sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "20px",
    textAlign: "left",
    verticalAlign: "top",
    color: "#1e4daf",
    marginBottom: "5px",
    backgroundColor: "#4A84FB",
    padding: "2px 4px",
    borderRadius: "4px",
    display: "inline-block",
  };

  const bulkDiscountStyle = {
    fontFamily: "Roboto, sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "20px",
    textAlign: "left",
    verticalAlign: "top",
    color: "#6a5001",
    marginBottom: "5px",
    backgroundColor: "#FFE69C",
    padding: "2px 4px",
    borderRadius: "4px",
    display: "inline-block",
  };

  const moqStyle = {
    fontFamily: "Roboto, sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "20px",
    textAlign: "left",
    verticalAlign: "top",
    color: "#242528",
    backgroundColor: "#BCBEC2",
    padding: "2px 4px",
    borderRadius: "4px",
    display: "inline-block",
  };  

  const additionalInfo = [];
  if (product.vipPriceFlag)
    additionalInfo.push(
      <div style={vipPriceStyle} key="vipPrice">
        VIP Price
      </div>
    );
  if (product.bulkDiscountFlag)
    additionalInfo.push(
      <div style={bulkDiscountStyle} key="bulkDiscount">
        Bulk Discount
      </div>
    );
  if (product.moq)
    additionalInfo.push(
      <div style={moqStyle} key="moq">
        MOQ: {product.moq}
      </div>
    );

    if (additionalInfo.length > 0) {
      return (
        <div className="additionalInfo">
          {additionalInfo.map((info, index) => (
            <div key={index}>
              {info}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };


const PriceTextComponent = (product) =>{
    const style = `.priceTag{
      font-family: 'Roboto', sans-serif;
      vertical-align: top;
      font-style: normal;
      font-weight: 700;
      font-size: 10px;
      color: #2A64DB;
      display: inline-block;
      margin-top: 0;
      margin-bottom: 0;
      margin-right: 3px;
    }
    .priceText{
      margin-top: 0;
      margin-right: 3px;
      margin-bottom: 0;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 1em;
      color: #2A64DB;
      display: inline-block;
      bottom: 0;
    }
    `
  
    if(product.highPricePretty){
      return (
        <div>
        <p className="priceTag">S$ </p>
        <p className = "priceText">{product.lowPricePretty.replace("S$", "")} - </p>
        <p className="priceTag">S$ </p>
        <p className = "priceText"> {product.highPricePretty.replace("S$", "")}</p>
        <style jsx>
          {style}
        </style>
        </div>
      )
    
    }
    else{
      return (
      <div>
      <p className="priceTag">S$ </p>
      <p className = "priceText">{product.lowPricePretty.replace("S$", "")} </p>
      <style jsx>
        {style}
      </style>
      </div>
    )
  }
  }
  
  const OriginalPriceTextComponent = (product) =>{
    if(product.lowPriceOriginalPretty){
      if (product.highPriceOriginalPretty){
        return (
          <div>
            <p style={{color: '#868A92', fontSize: '14px', display: 'inline-block', textDecoration: "line-through"}} className = "original-price">{product.lowPriceOriginalPretty} - {product.highPriceOriginalPretty}</p>
          </div>
        )
      }
      else{
        return (
          <div>
            <p style={{color: '#868A92', fontSize: '14px',  display: 'inline-block', textDecoration: "line-through"}}  className = "original-price">{product.lowPriceOriginalPretty}</p>
          </div>
        )
      }
    
    }
    return(
      <div></div>
    )
  }
  

  const ProductCard = ({ product }) => {
    return (
      <Link href={`/product/${product.id}`}>
        <div className="product-card">
          <div style={{ margin: "10px" }}>
            <img src={product.images[0].url} alt={product.title} />
            <div style={{ marginBottom: "5px" }}>
              {AdditionalInfoComponent({ product })}
            </div>
            <div style={{ height: "50px", display: "flex", flexDirection: "row" }}>
              <div style={{ alignSelf: "flex-end" }}>
                {OriginalPriceTextComponent(product)}
                {PriceTextComponent(product)}
              </div>
            </div>
            <h3 style={titleStyle}>{product.title}</h3>
          </div>
        </div>
        <style jsx>{`
          .product-card {
            background-color: #ffffff;
            margin-right: 10px;
            margin-bottom: 10px;
            border: 1px solid #E4E5E7;
            border-radius: 4px;
            height: 25em;
          }
          .priceTag{
            vertical-align: top;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 10px;
            line-height: 20px;
            color: #2A64DB;
            margin-right: 5px;
          }
          .priceText{
            /* w-sub-title */
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            color: #2A64DB;
            margin-right: 5px;
          }
          img {
            width: 100%;
            height: 175px;
          }
        `}</style>
      </Link>
    );
  };
  
  export default ProductCard;