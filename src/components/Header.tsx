import React from 'react';
import '../styles/components/Header.css';

interface HeaderProps {
  onBackToTop: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBackToTop }) => {
  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-chart-line text-white text-lg"></i>
            </div>
            <span className="text-xl text-neutral-800">BetTech Solutions</span>
          </div>
          <button 
            onClick={onBackToTop}
            className="bg-neutral-800 text-white px-6 py-2 rounded-lg hover:bg-neutral-700 transition-colors flex items-center space-x-2"
          >
            <i className="fa-solid fa-arrow-up text-sm"></i>
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
