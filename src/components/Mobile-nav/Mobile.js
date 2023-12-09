import React from 'react';
import Button from '../Button/Button';
import './Mobile.css';

export default function Mobile() {
  return (
    <div>
      <div className='mobile-nav'>
        <ul>
          <li>Services</li>
          <li>Industries</li>
          <li>Cases</li>
          <li>Contact</li>
        </ul>
        <Button className="primary" text="Let's Talk" />
      </div>
    </div>
  );
}
