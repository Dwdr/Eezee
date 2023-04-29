import React from 'react';
import { useRouter } from 'next/router';
import brands from '../data/brands.json';
import BrandCard from '../components/brand-card';
import Header from '../components/header';

const BrandsPage = () => {
  const router = useRouter();

  const sortedBrands = brands.sort((a, b) => a.name.localeCompare(b.name));
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var brandByAlphabet = []

  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];
    brandByAlphabet[i] = [];
    for (let j = 0; j < sortedBrands.length; j++) {
      const brand = sortedBrands[j];
      if (brand.name.toUpperCase().startsWith(letter)) {
        brandByAlphabet[i].push(brand);
      }
    }
  }

  console.log

  return (
    <div>
    <Header />
    <div className = "main">
    <div style={{marginLeft: '9%', marginRight: '9%'}}>
      <div className="brands-container">
        {brandByAlphabet.map((row, rowIndex) => (
          <div style={{
            width: '100%'
            }}>
          {row.length > 0 ? 
            <div style={{marginTop: '20px'}}>
              <div className = "alphabet-box">
                <p>{alphabet[rowIndex]}</p>
              </div>
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flex: "space-between",
                    
                  }}>
                    {row.map((brand) => (
                      <div style={{ flexBasis: "16.6%", width: "100%"}}><BrandCard  key={brand.id} brand={brand} /></div>
                    ))}
                  </div>
            </div>
            : <div></div>}
         </div>
        ))}
      </div>
      </div>
      </div>

      <style jsx>{`
        .brands-container {
          padding: 1%;
        }
        .main{
          background-color: #EFEFF0;
        }
        .alphabet-box{
          width: 94px;
          height: 48px;
          background-color: #E4E5E7;
          display: flex;
          flex-wrap: "wrap";
          text-align: center;
          justify-content: center;
          align-items: center;
        }
        .alphabet-box p{
          font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 28px;
        }
      `}</style>
    </div>
  );
};

export default BrandsPage;
