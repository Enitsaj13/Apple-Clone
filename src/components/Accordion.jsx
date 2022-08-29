import React from 'react';
import '../style/accordion.css';

const Accordion = () => {
  const accordionData = [
    {
      title: 'Section 1',
      content: (
        <ul>
          <li id='title__apple__info'>Shop and Learn</li>
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>AirPods</li>
          <li>TV & Home</li>
          <li>AirTag</li>
          <li>Accessories</li>
          <li>Gift Cards</li>
        </ul>
      ),
    },
    {
      title: 'Section 2',
      content: (
        <ul>
          <li id='title__apple__info'>Services</li>
          <li>Apple Music</li>
          <li>Apple TV+</li>
          <li>Apple Fitness+</li>
          <li>Apple News</li>
          <li>Apple Arcade</li>
          <li>iCloud</li>
          <li>Apple One</li>
          <li>Appple Card</li>
          <li>Apple Books</li>
          <li>Apple Podcasts</li>
          <li>App Store</li>
        </ul>
      ),
    },
    {
      title: 'Section 3',
      content: (
        <ul>
          <li id='title__apple__info'>Account</li>
          <li>Manage Your Apple ID</li>
          <li>Apple Store Account</li>
          <li>iCloud.com</li>
        </ul>
      ),
    },
    {
      title: 'Section 2',
      content: (
        <ul>
          <li id='title__apple__info'>Apple Store</li>
          <li>Find a Store</li>
          <li>Genius Bar</li>
          <li>Today at Apple</li>
          <li>Apple Camp</li>
          <li>Apple Store App</li>
          <li>Refurbished and Clearance</li>
          <li>Financing</li>
          <li>Apple Trade in</li>
          <li>Order Status</li>
          <li>Shopping Help</li>
        </ul>
      ),
    },
    {
      title: 'Section 2',
      content: (
        <ul>
          <li id='title__apple__info'>For Business</li>
          <li>Apple Business</li>
          <li>Shop for Business</li>
        </ul>
      ),
    },
    {
      title: 'Section 2',
      content: (
        <ul>
          <li id='title__apple__info'>For Education</li>
          <li>Apple and Education</li>
          <li>Shop for K-12</li>
          <li>Shop for College</li>
        </ul>
      ),
    },
    {
      title: 'Section 2',
      content: (
        <ul>
          <li id='title__apple__info'>For Healthcare</li>
          <li>Apple in Healthcare</li>
          <li>Health on Apple Watch</li>
          <li>Health Records on iPhone</li>
        </ul>
      ),
    },
    {
      title: 'Section 2',
      content: (
        <ul>
          <li id='title__apple__info'>For Government</li>
          <li>Shop for Government</li>
          <li>Shop for Veterants and Military</li>
        </ul>
      ),
    },
    {
      title: 'Section 2',
      content: (
        <ul>
          <li id='title__apple__info'>Apple Values</li>
          <li>Accessibility</li>
          <li>Education</li>
          <li>Environment</li>
          <li>Inclusion and Diversity</li>
          <li>Privacy</li>
          <li>Racial Equity and Justice</li>
          <li>Supplier Responsibility</li>
        </ul>
      ),
    },
    {
      title: 'Section 2',
      content: (
        <ul>
          <li id='title__apple__info'>About Apple</li>
          <li>Newsroom</li>
          <li>Apple Leadership</li>
          <li>Career Opportunities</li>
          <li>Investors</li>
          <li>Ethics & Compliance</li>
          <li>Events</li>
          <li>Contact Apple</li>
        </ul>
      ),
    },
  ];
};

export default Accordion;
