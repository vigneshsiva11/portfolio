import React from 'react';
import './certificates.css';

import googleAdsApps from '../../assets/googleadsapps.jpg';
import googleAdsDisplay from '../../assets/googleadddisplay.jpg';
import javascriptEssentials1 from '../../assets/javascript-essentials-1.jpg';
import javascriptEssentials2 from '../../assets/javascriptessential 2.jpg';
import oracle_dev_gym from '../../assets/oracle_dev_gym.jpg';
import ciscoCyberSecurity from '../../assets/cybersecurity_certificate.jpg';
import sqlonline from '../../assets/sqlonline.jpg';

const certifications = [
  {
    title: "Google Ads Apps Certification",
    issuer: "Google",
    date: "March 2024",
    image: googleAdsApps,
  },
  {
    title: "Google Ads Display Certification",
    issuer: "Google",
    date: "March 2024",
    image: googleAdsDisplay,
  },
  {
    title: "Introduction to Cyber Security",
    issuer: "Cisco Networking Academy",
    date: "April 2024",
    image: ciscoCyberSecurity,
  },
  {
    title: "Databases for Developers: Foundations",
    issuer: "Chris Saxon",
    date: "October 2024",
    image: oracle_dev_gym,
  },
  {
    title: "SQL and Relational Databases 101",
    issuer: "IBM Cognitive Class",
    date: "January 2025",
    image: sqlonline,
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "July 2025",
    image: javascriptEssentials1,
  },
  {
    title: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy",
    date: "July 2025",
    image: javascriptEssentials2,
  },
];

const Certifications = () => {
  return (
    <section className="certifications-page">
      <h2 className="certTitle">My Certifications</h2>
      <div className="certContainer">
        {certifications.map((cert, index) => (
          <div className="certCard" key={index}>
            <img src={cert.image} alt={cert.title} className="certImg" />
            <h3>{cert.title}</h3>
            <p><strong>Issuer:</strong> {cert.issuer}</p>
            <p><strong>Date:</strong> {cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
