import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.svg'
import Button from '../Button/Button';

export default function Header() {
  return (
    <div className='head'>
      <img  src={logo} />
      <ul>
        <li>Services</li>
        <li>Industries</li>
        <li>Cases</li>
        <li>Contact</li>
      </ul>
      <Button text="Let's Talk"/>
    </div>
  )
}
