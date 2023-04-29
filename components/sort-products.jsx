import React from 'react';
import Button from 'react-bootstrap/Button';

const SortProducts = ({ onSort }) => (
  <div style={{ display: 'flex', alignItems: 'center', padding: '6px 16px' }}>
    <Button variant="link" className="relevance-button" onClick={onSort}>Relevance</Button>
    <select onChange={onSort} style={{ border: 'none', marginLeft: '10px' }}>
      <option value="priceLowToHigh">Price low to high</option>
      <option value="priceHighToLow">Price high to low</option>
    </select>
  </div>
);

export default SortProducts;
