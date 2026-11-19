import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import vkuLogo from '../../assets/images/vkulogo-wo-bg.png';

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

        {/* Logo - Emblem + Clear Text */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            textDecoration: 'none'
          }}
        >
          <img
            src={vkuLogo}
            alt="CA India"
            style={{
              height: '70px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '22px',
                fontWeight: 700,
                color: '#164e7c',
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap'
              }}
            >
              V. K. Umbarkar & Co.
            </span>
            <span
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '13.5px',
                fontWeight: 600,
                color: '#164e7c',
                letterSpacing: '0.04em',
                lineHeight: 1.2,
                marginTop: '4px',
                whiteSpace: 'nowrap'
              }}
            >
              Chartered Accountants
            </span>
          </div>
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
