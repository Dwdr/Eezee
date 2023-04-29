import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/header';
import BrandCard from '../components/brand-card';
import ProductCard from '../components/product-card';
import brands from '../data/brands.json';
import products from '../data/products.json';
import Punchout from '../components/punchout'; // import the Punchout component

const HomePage = () => {
  const router = useRouter();

  const featuredBrands = brands.filter((brand) => brand.featured).slice(0, 6);
  const productList = products.slice(0, 12); // Display the first 10 products

  return (
    <div>
      <Header />
      <div style={{backgroundColor: "#EFEFF0"}}>
      <Punchout />
      <div style={{marginLeft: '9%', marginRight: '8%'}}>
      <section>
      <h2>Featured Brands</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ color: "#55585D", fontSize: "14px", marginBottom:"10px" }}>
          Browse the full catalog of brands today
        </span>
        <button
          style={{ marginLeft: "auto", marginBottom: "10px" }}
          onClick={() => router.push("/brands")}
        >
          View More
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {featuredBrands.map((brand) => (
          <div style={{ flexBasis: "16.6%", width: "100%" }}>
            <BrandCard key={brand.id} brand={brand} />
          </div>
        ))}
      </div>
    </section>
    <section>
      <h2>Our Products</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ color: "#55585D", fontSize: "14px", marginBottom:"10px" }}>
          Trusted by the best companies in Asia
        </span>
        <button
          style={{ marginLeft: "auto", marginBottom: "10px" }}
          className="button"
          onClick={() => router.push("/products")}
        >
          View More
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {productList.map((product) => (
          <div style={{ flexBasis: "16.6%", width: "100%" }}>
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </section>

      <style jsx>{`
        h2{
        font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 28px;
          letter-spacing: 0.3px;
          color: #242528;
        }
        button {
          margin-left: auto;
          margin-bottom: 5px;
          border: none;
          background-color: transparent;
          color: #2A64DB;
        }

        span{
            font-family: 'Roboto', sans-serif;
        }

        button:hover {
          text-decoration: underline;
        }

        button::after {
        content: "";
        display: inline-block;
        width: 0.6em;
        height: 0.6em;
        margin-left: 0.3em;
        margin-right:12px;
        border-top: 0.13em solid currentColor;
        border-right: 0.13em solid currentColor;
        transform: rotate(45deg);
        }
      `}</style>
    </div>
    </div>
    </div>
  );
};

export default HomePage;
