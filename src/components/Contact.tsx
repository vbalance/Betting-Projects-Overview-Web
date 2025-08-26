import React from 'react';
import '../styles/components/Contact.css';
import { COMPANY_STATS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/50 to-neutral-800/50"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-white/5 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              We are open for long-term partnerships and collaborations. Let's build the future of betting technology together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group text-center p-6 rounded border border-neutral-700 bg-neutral-800/50 backdrop-blur-sm hover:bg-neutral-800/70 hover:border-neutral-600 transition-all duration-300">
              <div className="w-16 h-16 bg-neutral-700 rounded flex items-center justify-center mx-auto mb-4 group-hover:bg-neutral-600 transition-colors">
                <i className="fa-solid fa-handshake text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Long-term Partnerships</h3>
              <p className="text-neutral-400 leading-relaxed">
                We believe in building lasting relationships with our partners for mutual success.
              </p>
            </div>

            <div className="group text-center p-6 rounded border border-neutral-700 bg-neutral-800/50 backdrop-blur-sm hover:bg-neutral-800/70 hover:border-neutral-600 transition-all duration-300">
              <div className="w-16 h-16 bg-neutral-700 rounded flex items-center justify-center mx-auto mb-4 group-hover:bg-neutral-600 transition-colors">
                <i className="fa-solid fa-rocket text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation Focus</h3>
              <p className="text-neutral-400 leading-relaxed">
                Cutting-edge technology solutions that push the boundaries of what's possible.
              </p>
            </div>

            <div className="group text-center p-6 rounded border border-neutral-700 bg-neutral-800/50 backdrop-blur-sm hover:bg-neutral-800/70 hover:border-neutral-600 transition-all duration-300">
              <div className="w-16 h-16 bg-neutral-700 rounded flex items-center justify-center mx-auto mb-4 group-hover:bg-neutral-600 transition-colors">
                <i className="fa-solid fa-shield-alt text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Trust & Security</h3>
              <p className="text-neutral-400 leading-relaxed">
                Enterprise-grade security and reliability you can count on for your business.
              </p>
            </div>
          </div>

          <div className="bg-neutral-800/30 backdrop-blur-sm border border-neutral-700 rounded p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-neutral-300 transition-colors">{COMPANY_STATS.activeProjects}+</div>
                <div className="text-neutral-400 font-medium">Active Projects</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-neutral-300 transition-colors">{COMPANY_STATS.bookmakerIntegrations}+</div>
                <div className="text-neutral-400 font-medium">Bookmaker Integrations</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-neutral-300 transition-colors">{COMPANY_STATS.systemUptime}</div>
                <div className="text-neutral-400 font-medium">System Uptime</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-neutral-300 transition-colors">{COMPANY_STATS.yearsExperience}+</div>
                <div className="text-neutral-400 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
