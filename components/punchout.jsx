import React from 'react';

const Punchout = () => {
  return (
    <div className="punchout-container">
      <img
        alt="Punchout"
        src="https://api.eezee.sg/image/resize?height=385&amp;width=984&amp;url=https://storage.googleapis.com/eezee-banner-images/gsDQfucBoWzql2OPfv6~30.jpg&amp;resizeStrategy=cover"
        className="rectangle-img"
        style={{
          margin: 'auto',
          width:'1182px',
          padding: '30px',
        }}
      />
      <style jsx>{`
        .punchout-container {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default Punchout;
