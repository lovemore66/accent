import React from 'react';
import './Footer.css';
import Spacebar from '../Spacebar/Spacebar';

export default function Footer() {
  return (
    <footer>
      <Spacebar color="#fff" title='Contact us' spaceClass="primary" />
      <div className='foot-heading'>
        <h2>
          Have a project in mind?
          Let's make it happen
        </h2>
        <p>22 Street Name, Suburb, 8000,<br />
          Cape Town, South Africa<br />
          +27 21 431 0001<br />
          enquirie@website.co.za</p>
      </div>
      <div className='links'>
        <ul>
          <li>
            <a href='#'>Terms of service</a>
          </li>
          <li>
            <a href='#'>Privacy policy</a>
          </li>
          <li>
            <a href='#'>Impressum</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#'>Facebook</a>
          </li>
          <li>
            <a href='#'>Instagram</a>
          </li>
          <li>
            <a href='#'>Twitter</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#'>Github</a>
          </li>
          <li>
            <a href='#'>Linkedin</a>
          </li>
          <li>
            <a href='#'>Teams</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#'>Youtube</a>
          </li>
          <li>
            <a href='#'>Behance</a>
          </li>
          <li>
            <a href='#'>Dribbble</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#'>Explore open job</a>
          </li>
          <li>
            <a href='#'>©2000—2023 Company Name</a>
          </li>
        </ul>

      </div>
    </footer>
  );
}
