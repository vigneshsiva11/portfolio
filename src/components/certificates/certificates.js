
import React, { useEffect, useState } from 'react';
import './certificates.css';

import googleAdsApps from '../../assets/googleadsapps.jpg';
import googleAdsDisplay from '../../assets/googleadddisplay.jpg';
import javascriptEssentials1 from '../../assets/javascript-essentials-1.jpg';
import javascriptEssentials2 from '../../assets/javascriptessential 2.jpg';
import oracleDevGym from '../../assets/oracle_dev_gym.jpg';
import ciscoCyberSecurity from '../../assets/cybersecurity_certificate.jpg';
import sqlOnline from '../../assets/sqlonline.jpg';
import promptEngineering from '../../assets/promptengineering.jpg';
import htmlCert from '../../assets/html.png';
import cssCert from '../../assets/css.png';

const certifications = [
  { title: 'Google Ads Apps Certification', issuer: 'Google', date: '2025', image: googleAdsApps },
  { title: 'Google Ads Display Certification', issuer: 'Google', date: '2025', image: googleAdsDisplay },
  { title: 'JavaScript Essentials 1', issuer: 'Cisco', date: '2025', image: javascriptEssentials1 },
  { title: 'JavaScript Essentials 2', issuer: 'Cisco', date: '2025', image: javascriptEssentials2 },
  { title: 'Databse for Developers', issuer: 'Oracle', date: '2024', image: oracleDevGym },
  { title: 'Introduction to Cybersecurity', issuer: 'Cisco', date: '2025', image: ciscoCyberSecurity },
  { title: 'SQL Online Course', issuer: 'IBM Cognitive Class', date: '2025', image: sqlOnline },
  { title: 'Prompt Engineering', issuer: 'IBM Cognitive Class', date: '2025', image: promptEngineering },
  { title: 'HTML Essentials', issuer: 'Infosys Springboard', date: 'November 2025', image: htmlCert },
  { title: 'CSS Fundamentals', issuer: 'Infosys Springboard', date: 'November 2025', image: cssCert },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setSelectedCert(null);
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selectedCert]);

  return (
    <section className="certifications-page" id="certifications">
      <h2 className="certTitle">My Certifications</h2>

      <div className="certContainer">
        {certifications.map((cert, idx) => (
          <article
            key={idx}
            className="certCard"
            role="button"
            tabIndex={0}
            onClick={() => setSelectedCert(cert)}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedCert(cert)}
            aria-label={`Open ${cert.title} preview`}
          >
            <img src={cert.image} alt={cert.title} className="certImg" />
            <h3>{cert.title}</h3>
            <p><strong>Issuer:</strong> {cert.issuer}</p>
            <p><strong>Date:</strong> {cert.date}</p>
          </article>
        ))}
      </div>

      {selectedCert && (
        <div
          className="certModalOverlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCert.title} preview`}
          onClick={() => setSelectedCert(null)}
        >
          <div className="certModal" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="certModalImg"
            />
            <div className="certModalInfo">
              <h3>{selectedCert.title}</h3>
              <p><strong>Issuer:</strong> {selectedCert.issuer}</p>
              <p><strong>Date:</strong> {selectedCert.date}</p>
              <p className="certHint">(Click outside or press Esc to close)</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
