import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import vkuLogo from '../../vkulogo-FoJbLOYd.png';

const Header = () => {
  const location = useLocation();

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        height: '95px',
        display: 'flex',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)'
      }}
    >
      <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo - Clean Integration */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none'
          }}
        >
          <img
            src={vkuLogo}
            alt="V. K. Umbarkar & Co. - Chartered Accountants"
            style={{
              height: '82px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </Link>

        {/* Navigation - Clean, Readable Menu Items */}
        <nav style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Join Us', path: '/join-us' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  color: isActive ? '#0A192F' : '#4B5563',
                  fontSize: '16px',
                  fontWeight: isActive ? 600 : 400,
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  transition: 'color 0.2s ease'
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
