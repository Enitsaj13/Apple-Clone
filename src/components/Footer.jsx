import React from 'react';
import Accordion from './Accords';
import { TbMinusVertical } from 'react-icons/tb';
import '../style/accordion.css';
import '../style/footer.css';

const Footer = () => {
  const accordionData = [
    {
      title: <li id='title__accordion__link'>Shop and Learn</li>,
      content: (
        <div className='accordion__list'>
          <ul className='accordion__link'>
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
        </div>
      ),
    },
    {
      title: <li id='title__accordion__link'>Services</li>,
      content: (
        <div className='accordion__list'>
          <ul className='accordion__link'>
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
        </div>
      ),
    },
    {
      title: <li id='title__accordion__link'>Account</li>,
      content: (
        <div className='accordion__list'>
          <ul className='accordion__link'>
            <li>Manage Your Apple ID</li>
            <li>Apple Store Account</li>
            <li>iCloud.com</li>
          </ul>
        </div>
      ),
    },
    {
      title: <li id='title__accordion__link'>Apple Store</li>,
      content: (
        <div className='accordion__list'>
          <ul className='accordion__link'>
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
        </div>
      ),
    },
    {
      title: <li id='title__accordion__link'>For Business</li>,
      content: (
        <div className='accordion__list'>
          <ul className='accordion__link'>
            <li>Apple Business</li>
            <li>Shop for Business</li>
          </ul>
        </div>
      ),
    },
    {
      title: <li id='title__accordion__link'>For Education</li>,
      content: (
        <div className='accordion__list'>
          <ul className='accordion__link'>
            <li>Apple and Education</li>
            <li>Shop for K-12</li>
            <li>Shop for College</li>
          </ul>
        </div>
      ),
    },
    {
      title: <li id='title__accordion__link'>For Healthcare</li>,
      content: (
        <div className='accordion__list'>
          <ul className='accordion__link'>
            <li>Apple in Healthcare</li>
            <li>Health on Apple Watch</li>
            <li>Health Records on iPhone</li>
          </ul>
        </div>
      ),
    },
    {
      title: <li id='title__accordion__link'>For Government</li>,
      content: (
        <div className='accordion__list'>
          <ul className='accordion__link'>
            <li>Shop for Government</li>
            <li>Shop for Veterants and Military</li>
          </ul>
        </div>
      ),
    },
    {
      title: <li id='title__accordion__link'>Apple Values</li>,
      content: (
        <div className='accordion__list'>
          <ul className='accordion__link'>
            <li>Accessibility</li>
            <li>Education</li>
            <li>Environment</li>
            <li>Inclusion and Diversity</li>
            <li>Privacy</li>
            <li>Racial Equity and Justice</li>
            <li>Supplier Responsibility</li>
          </ul>
        </div>
      ),
    },
    {
      title: <li id='title__accordion__link'>About Apple</li>,
      content: (
        <div className='accordion__list'>
          <ul className='accordion__link'>
            <li>Newsroom</li>
            <li>Apple Leadership</li>
            <li>Career Opportunities</li>
            <li>Investors</li>
            <li>Ethics & Compliance</li>
            <li>Events</li>
            <li>Contact Apple</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div id='container__footer'>
      <footer>
        <p className='text__message'>
          1. Qualified Purchasers receive an Apple Gift Card when they purchase
          an eligible Mac or iPad at a Qualifying Location. Only one Apple Gift
          Card per eligible Mac or iPad per Qualified Purchaser. Offer subject
          to availability. While supplies last. Qualified Purchasers shall
          receive a discount equal to the value of the Apple Gift Card off the
          price of the eligible Mac or iPad, but will be charged for all items
          in their cart, including the Apple Gift Card. Important notice
          regarding the checkout receipt and monthly statement for Apple Card
          Monthly Installment (ACMI) purchases with this promotion: Qualified
          Purchasers selecting ACMI (a 0% APR payment option) as payment type at
          checkout shall receive a discount equal to the value of the Apple Gift
          Card off the price of the eligible Mac or iPad. This will result in
          one ACMI installment plan over 12 months for the eligible iPad or Mac
          discounted by the instant credit, and a second ACMI installment plan
          over 12 months for the full price of the Apple Gift Card. The total
          combined amount charged over the two separate ACMI installment plans
          will reflect the original full retail price of the Eligible Product.
          Separately, Qualified Purchasers will receive and be charged for the
          Apple Gift Card in the amount of the applicable discount off the
          eligible Mac or iPad. ACMI is subject to credit approval and credit
          limit. Variable APRs for Apple Card other than ACMI range from 13.24%
          to 24.24% based on creditworthiness. Rates as of August 1, 2022. If
          you choose the pay‑in‑full or one‑time‑payment option for an
          ACMI‑eligible purchase instead of choosing ACMI as the payment option
          at checkout, that purchase will be subject to the variable APR
          assigned to your Apple Card. Taxes and shipping are not included in
          ACMI transactions and are subject to your standard purchase APR. See
          the Apple Card Customer Agreement at <br />
          <a className='link__footer__text'>
            https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf
          </a>
          &nbsp; for more information. ACMI is not available for purchases made
          online at the following special stores: Apple Employee Purchase Plan;
          participating corporate Employee Purchase Programs; Apple at Work for
          small businesses; Government, and Veterans and Military Purchase
          Programs, or on refurbished devices. Apple Card is issued by Goldman
          Sachs Bank USA, Salt Lake City Branch. Available for qualifying
          applicants in the United States. If you reside in the U.S.
          territories, please call Goldman Sachs at 877-255-5923 with questions
          about accessing this offer or applying for Apple Card. This offer
          cannot be combined with the Apple Employee Purchase Plan or business
          loyalty pricing. Availability of in‑store promotion offerings may be
          limited by Apple Store location closures as a result of COVID‑19.
          Additional restrictions apply. View full terms and conditions of offer
          <a className='link__footer__text'> here</a>.
          <br /> <br />
          2. Through August 28, 2022, Apple will donate $10 for every purchase
          made in the U.S. using Apple Pay on{' '}
          <a className='link__footer__text'> apple.com</a>, through the Apple
          Store app, or at an Apple Store. Donations are limited to a maximum of
          one million dollars ($1,000,000). The donation goes to the National
          Park Foundation.
          <br /> <br />
          Photo credit for Apple Pay promotion: “Sunset” by Poffenberger
          Photography. Shot at Scotts Bluff National Monument in Scotts Bluff
          County, Nebraska.
          <br /> <br />
          Major League Baseball trademarks and copyrights are used with
          permission of MLB Advanced Media, L.P. All rights reserved.
        </p>
        <hr className='first__hr' />

        <div className='apple__div__footer'>
          <div className='apple__info'>
            <div className='apple__shop__learn'>
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
            </div>
            <div className='apple__services'>
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
              <div className='apple__acount'>
                <ul>
                  <li id='title__apple__info'>Account</li>
                  <li>Manage Your Apple ID</li>
                  <li>Apple Store Account</li>
                  <li>iCloud.com</li>
                </ul>
              </div>
            </div>
            <div className='apple__store'>
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
            </div>
            <div className='apple__business'>
              <ul>
                <li id='title__apple__info'>For Business</li>
                <li>Apple and Business</li>
                <li>Shop for Business</li>
              </ul>
              <div className='apple__education'>
                <ul>
                  <li id='title__apple__info'>For Education</li>
                  <li>Apple and Education</li>
                  <li>Shop for K-12</li>
                  <li>Shop for College</li>
                </ul>
              </div>
              <div className='apple__healthcare'>
                <ul>
                  <li id='title__apple__info'>For Healthcare</li>
                  <li>Apple in Healthcare</li>
                  <li>Health on Apple Watch</li>
                  <li>Health Records on iPhone</li>
                </ul>
              </div>
              <div className='apple__government'>
                <ul>
                  <li id='title__apple__info'>For Government</li>
                  <li>Shop for Government</li>
                  <li>Shop for Veterants and Military</li>
                </ul>
              </div>
            </div>
            <div className='apple__values'>
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
              <div className='about__apple'>
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
              </div>
            </div>
          </div>
        </div>

        <div className='accordion'>
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
        <hr className='hr__accordion' />

        <div className='apple__copyright'>
          <p className='contact__apple'>
            More ways to shop:
            <a className='footer__text'> Find an Apple Store </a> or
            <a className='footer__text'> other retailer </a>
            near you. Or call 1-800-MY-APPLE.
          </p>

          <hr className='last__hr' />

          <div className='show__footer'>
            <p>
              Copyright © 2022 Apple Inc. All rights reserved.
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className='footer__link'>
                Privacy Policy <span> |</span>
              </a>
              <a className='footer__link'>
                Terms of Use <span> |</span>
              </a>
              <a className='footer__link'>
                Sales and Refunds <span> |</span>
              </a>
              <a className='footer__link'>
                Legal <span> |</span>
              </a>
              <a className='footer__link'>Site Map</a>
              <a className='footer__link__last'>United States</a>
            </p>
          </div>

          <div className='hide__footer'>
            <div className='footer__link__last-div'>
              <a className='footer__link__last__hide'>United States</a>
            </div>

            <div className='footer__link-div'>
              <p>Copyright © 2022 Apple Inc. All rights reserved.</p>
              <a className='footer__link'>
                Privacy Policy
                <span>|</span>
              </a>
              <a className='footer__link'>
                Terms of Use
                <span>|</span>
              </a>
              <a className='footer__link'>
                Sales and Refunds
                <span>|</span>
              </a>
              <a className='footer__link'>
                Legal
                <span>|</span>
              </a>
              <a className='footer__link'>Site Map</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
