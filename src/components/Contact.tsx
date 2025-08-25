import React from 'react';
import '../styles/components/Contact.css';
import { COMPANY_STATS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-header">
            <h2 className="contact-title">
              Ready to Partner With Us?
            </h2>
            <p className="contact-description">
              We are open for long-term partnerships and collaborations. Let's build the future of betting technology together.
            </p>
          </div>

          <div className="contact-features">
            <div className="contact-feature">
              <div className="contact-feature-icon">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <h3 className="contact-feature-title">Long-term Partnerships</h3>
              <p className="contact-feature-description">
                We believe in building lasting relationships with our partners for mutual success.
              </p>
            </div>

            <div className="contact-feature">
              <div className="contact-feature-icon">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <h3 className="contact-feature-title">Innovation Focus</h3>
              <p className="contact-feature-description">
                Cutting-edge technology solutions that push the boundaries of what's possible.
              </p>
            </div>

            <div className="contact-feature">
              <div className="contact-feature-icon">
                <i className="fa-solid fa-shield-alt"></i>
              </div>
              <h3 className="contact-feature-title">Trust & Security</h3>
              <p className="contact-feature-description">
                Enterprise-grade security and reliability you can count on for your business.
              </p>
            </div>
          </div>

          <div className="contact-stats">
            <div className="contact-stats-grid">
              <div className="contact-stat">
                <div className="contact-stat-number">{COMPANY_STATS.activeProjects}+</div>
                <div className="contact-stat-label">Active Projects</div>
              </div>
              <div className="contact-stat">
                <div className="contact-stat-number">{COMPANY_STATS.bookmakerIntegrations}+</div>
                <div className="contact-stat-label">Bookmaker Integrations</div>
              </div>
              <div className="contact-stat">
                <div className="contact-stat-number">{COMPANY_STATS.systemUptime}</div>
                <div className="contact-stat-label">System Uptime</div>
              </div>
              <div className="contact-stat">
                <div className="contact-stat-number">{COMPANY_STATS.yearsExperience}+</div>
                <div className="contact-stat-label">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
