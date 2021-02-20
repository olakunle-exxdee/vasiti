import React from "react";
import "./footer.scss";
import image from "../footer/MaskGroup.png";
import fb from "../footer/fb.svg";
import ig from "../footer/ig.svg";
import inta from "../footer/in.svg";
import tw from "../footer/tw.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="content1">
          <div className="text">
            <h1>Be a member of our community 🎉</h1>
            <p>
              We’d make sure you’re always first to know what’s happening on
              Vasiti—thus, the world.
            </p>

            <div className="form-control">
              <input
                type="email"
                name=""
                id=""
                placeholder="enter your email address"
              />
              <div className="">
                <button className="bttn">subscribe</button>
              </div>
            </div>
          </div>
          <div className="text-img">
            <img src={image} alt="img" />
          </div>
        </div>
        <div className="content2">
          <div className="group1">
            <div className="one">
              <h2>Company</h2>
              <ul>
                <li>About us</li>
                <li>Term of Use</li>
                <li>Privacy Policy</li>
                <li>Press & Media</li>
              </ul>
            </div>
            <div className="one">
              <h2>Products</h2>
              <ul>
                <li>Marketplace</li>
                <li>Magazine</li>
                <li>Seller</li>
                <li>Wholesale Services</li>
                <li>Services</li>
              </ul>
            </div>
          </div>
          <div className="group1">
            <div className="one">
              <h2>Careers</h2>
              <ul>
                <li>Become a Campus Rep</li>
                <li>Become a Vasiti Influencer</li>
                <li>Become a Campus writer</li>
                <li>Become an Affiliate</li>
              </ul>
            </div>
            <div className="one">
              <h2>Get in touch</h2>
              <ul>
                <li>Contact us</li>
                <li>Partner with us</li>
                <li>Advertise with us</li>
                <li>Wholesale Services</li>
                <li>Help/FAQs</li>
              </ul>
            </div>
          </div>
          <div className="group1">
            <div className="one">
              <h2>Join our community</h2>
              <div className="social">
                <img src={fb} alt="fb" />
                <img src={ig} alt="ig" />
                <img src={inta} alt="ig" />
                <img src={tw} alt="ig" />
              </div>
              <li>Email Newsletter</li>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
