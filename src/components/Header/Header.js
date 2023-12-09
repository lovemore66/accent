import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/images/logo.svg';
import menuIcon from '../../assets/icons/menu.png';
import Button from '../Button/Button';
import Mobile from '../Mobile-nav/Mobile';

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const mobileClass = isMobileOpen ? 'mobile' : 'hide-menu';

  return (
    <main>
      <div className='head'>
        <img id="logo" src={logo} alt="Logo" />
        <ul>
          <li>Services</li>
          <li>Industries</li>
          <li>Cases</li>
          <li>Contact</li>
        </ul>
        <div className='right-btn'>
          <div className='btn'>
            <div className='btn-child'>
              <Button className="primary" text="Let's Talk" />
            </div>
            <img src={menuIcon} alt="Menu Icon" onClick={toggleMobileMenu} />
          </div>
        </div>
      </div>
      <section className='nav'>
        <div className={`mobile ${mobileClass}`} data-testid="mobile-menu">
          <Mobile />
        </div>
      </section>

    </main>
  );
}
