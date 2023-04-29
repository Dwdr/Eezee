import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/header';
import ProductPriceCard from '../../components/product-price-card';
import products from '../../data/products.json';
import brands from '../../data/brands.json';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((product) => product.id === id);
  const brand = product ? brands.find((brand) => brand.name.toLowerCase() === product.metadata.brand.toLowerCase()) : null;

  if (!product) {
    return (
      <div>
        <Header />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div style={{ backgroundColor: '#EFEFF0' }}>
        <div className="container">
          <div className="card-container">
            <div className="product-card">
              <h1>{product.title}</h1>
              <div className="brand-model">
                <img src={product.metadata.brandImage} alt={brand ? brand.name : product.metadata.brand} className="brand-image" />
                <div>
                  <p className="model">Model: <span className="model-value">{product.metadata.model}</span></p>
                  <p className="brand-name">Brand: <span className="brand-value">{brand ? brand.name : product.metadata.brand}</span></p>
                </div>
              </div>
              <img src={product.images[0].url} alt={product.title} />
              <h2>Product Description</h2>
              <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
            </div>
          </div>
          <div style={{}}>
          <ProductPriceCard price={product.lowPricePretty} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-left: 9%;
          margin-right: 9%;
          padding-top: 5%;
          font-family: 'Roboto', sans-serif;
        }
        .card-container {
          margin-right: 10px;
        }
        .product-card {
          width: 743px;
          min-height: 1070px;
          background-color: white;
          padding: 2rem;
          border: 1px solid #E4E5E7;
          border-radius: 4px;
          margin-bottom: 2rem;
        }
        .brand-model {
          display: flex;
          align-items: center;
        }
        .brand-image {
          width: 100px;
          height: auto;
          margin-right: 12px;
        }
        .model,
        .brand-name {
          color: #55585D;
          margin:0px;
        }
        .model-value,
        .brand-value {
          color: #2A64DB;

        }
        h1 {
          font-family: 'Roboto', sans-serif;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
        }
        h2 {
          font-family: 'Roboto', sans-serif;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 16px;
        }
        img {
          width: 100%;
          max-width: 500px;
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;
