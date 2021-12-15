import React from 'react'
import './main.scss'

export default function nav() {
  const logo = require('./images/logo.png');

  return (
    <div class="navigation">
      <div class="content">
        <a href="#" class="logo">Shop and wear</a>
        <ul>
          <li><a href="#">Men</a>
            <ul>
              <li><a href="#">Clothing</a></li>
              <li><a href="#">Shoes</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Bags</a></li>
              <li><a href="#">Sports</a></li>
              <li><a href="#">Grooming</a></li>
              <li><a href="#">Modest Wear</a></li>
              <li><a href="#">Premium Brands</a></li>
            </ul>   
          </li>
          <li><a href="#">Women</a>
            <ul>
              <li><a href="#">Clothing</a></li>
              <li><a href="#">Shoes</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Bags</a></li>
              <li><a href="#">Sports</a></li>
              <li><a href="#">Grooming</a></li>
              <li><a href="#">Modest Wear</a></li>
              <li><a href="#">Premium Brands</a></li>
            </ul>
          </li>
          <li><a href="#">Kids</a>
            <ul>
              <li><a href="#">Clothing</a></li>
              <li><a href="#">Shoes</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Bags</a></li>
              <li><a href="#">Sports</a></li>
              <li><a href="#">Grooming</a></li>
              <li><a href="#">Modest Wear</a></li>
              <li><a href="#">Premium Brands</a></li>
            </ul>
          </li>
          <li><a href="#">Accessories</a>
            <ul>
              <li><a href="#">Jewelry</a></li>
              <li><a href="#">Belt</a></li>
              <li><a href="#">Wallets</a></li>
              <li><a href="#">Scarf</a></li>
              <li><a href="#">Watches</a></li>
            </ul>
          </li>
          <li><a href="#">Home</a>
            <ul>
              <li><a href="#">Bath</a></li>
              <li><a href="#">Living</a></li>
              <li><a href="#">Dining</a></li>
              <li><a href="#">Kitchen</a></li>
              <li><a href="#">Decors</a></li>
              <li><a href="#">Lighting</a></li>
            </ul>
          </li>
          <li class="sale"><a href="#">Sale!</a></li>
        </ul>
      </div>
    </div>
  )
}
