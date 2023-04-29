import React, { useState } from 'react';
import { useRouter } from 'next/router';
import products from '../data/products.json';
import ProductCard from '../components/product-card';
import Header from '../components/header';

const ProductsPage = () => {
  const router = useRouter();
  const [sortedProducts, setSortedProducts] = useState(products);
  const [relevanceActive, setRelevanceActive] = useState(true);
  const [priceLowActive, setPriceLowActive] = useState(false);
  const [priceHighActive, setPriceHighActive] = useState(false);

  const handleSort = (e) => {
    const value = e.target.value;
    let sorted;

    if (value === 'priceLowToHigh') {
      sorted = [...products].sort((a, b) => a.lowPrice - b.lowPrice);
      setPriceLowActive(true);
      setPriceHighActive(false);
      setRelevanceActive(false);
    } else {
      sorted = [...products].sort((a, b) => b.lowPrice - a.lowPrice);
      setPriceLowActive(false);
      setPriceHighActive(true);
      setRelevanceActive(false);
    }

    setSortedProducts(sorted);
  };

  const handleRelevanceClick = () => {
    setSortedProducts(products);
    setPriceLowActive(false);
    setPriceHighActive(false);
    setRelevanceActive(true);
  }

  return (
    <div>
    <Header />
    <div style={{backgroundColor: "#EFEFF0", paddingTop: '2%'}}>
    <div className = 'main-container'>
        <div style= {{flexBasis: '15%'}}>
        <h1>Products</h1>
        <div style={{ marginLeft: '9%' }}>
        <p>{sortedProducts.length} results</p>
        </div>
        </div>
        <div style= {{flexBasis: '75%'}}>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div >
              <p>Page 1 of {sortedProducts.length} result</p>
              <div style={{ display: 'flex'}}>
                <button 
                  className={`sort-button ${relevanceActive ? 'active' : ''}`}
                  onClick={handleRelevanceClick}
                >
                  Relevance
                </button>
                <button 
                  className={`sort-button ${priceLowActive ? 'active' : ''}`}
                  onClick={() => handleSort({ target: { value: 'priceLowToHigh' } })}
                >
                  Price: Low to High
                </button>
                <button 
                  className={`sort-button ${priceHighActive ? 'active' : ''}`}
                  onClick={() => handleSort({ target: { value: 'priceHighToLow' } })}
                >
                  Price: High to Low
                </button>
              </div>
              </div>
          </div>
          <div className="products-container">
            {sortedProducts.map((product) => (
              <div style={{ flexBasis: "20%", width: "100%"}}><ProductCard key={product.id} product={product} /></div>
            ))}
          </div>
          </div>

      </div>
      </div>

      <style jsx>{`
        .main-container {
          display: flex;
          flex-wrap: wrap;
          flex-direction: horizontal;
          margin-left: 9%;
          margin-right: 9%
        }

        h1{
        margin-top: 0;
        margin-left: 9%;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.3px;
        color: #242528;
        }

        p {
          margin-top: 0;
          font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;

          color: #868A92;
        }

        .products-container {
          display: flex;
          flex-wrap: wrap;
          flex: space-around;
        }
        .sort-button {
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 6px 16px;
          gap: 10px;
          background-color: #ffffff;
          border: 1px solid #D9D9D9;
          border-right: none;
          border-radius: 2px 0px 0px 2px;
          font-family: './/.', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 20px;
          color: #000000;
          cursor: pointer;
          outline: none;
        }

        .sort-button:hover,
        .sort-button.active {
          background-color: #EEF3FC;
          border: 1px solid #2A64DB;
          border-radius: 2px 0px 0px 2px;
          color: #2A64DB;
        }

        .sort-button:first-child:hover,
        .sort-button:first-child.active {
          background-color: #EEF3FC;
          border: 1px solid #2A64DB;
          border-radius: 0px 0px 0px 0px;
          color: #2A64DB;
        }
        
        .sort-button:last-child:hover,
        .sort-button:last-child.active {
          background-color: #EEF3FC;
          border: 1px solid #2A64DB;
          border-radius: 0px 0px 0px 0px;
          color: #2A64DB;
        }

        .sort-button:last-child {
          border-right: 1px solid #D9D9D9;
          border-radius: 0px 2px 2px 0px;
        }
`}</style>
    </div>
  );
};

export default ProductsPage;