import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-white sm:footer-horizontal border-b grid md:grid-cols-5 bg-black p-10">
        <div className="">
          <h1 className="footer-title">CS — Ticket System</h1>
          <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </div>
        <div>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </div>
        <div>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </div>
        <div>
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover">@CS — Ticket System</a>
          <a className="link link-hover">@CS — Ticket System</a>
          <a className="link link-hover">@CS — Ticket System</a>
          <a className="link link-hover">support@cst.com</a>
        </div>
      </footer>
      <p className="text-center py-5 bg-black text-white">

        Copyright © {new Date().getFullYear()} - All right reserved by CS — Ticket System
      </p>
    </div>
  );
};

export default Footer;
