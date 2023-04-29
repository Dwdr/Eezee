import React from 'react';
import Link from 'next/link';

const NavbarBase = () => {
  return (
    <div className="navbar-background">
        <div className="navbar-links">
        <Link href="/brands">
            <span>View All Brands</span>
        </Link>
        <style jsx>{`
            .navbar-background{
                align-items: center;
                background-color: #ffffff;
                padding: 10px;
                width: 100%;
                margin: 0 auto;
            }
            .navbar-links {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #ffffff;
            width: 1182px;
            padding: 10px;
            margin-left:9%;
            }
            .navbar-links span {
            display: inline-block;
            font-family: 'Roboto', sans-serif;
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
    </div>
  );
};

export default NavbarBase;
