import React from 'react';
import '../styles/components/Loader.css';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ 
  size = 'medium', 
  color = '#1f2937',
  text = 'Loading...' 
}) => {
  const sizeClass = `loader-${size}`;
  
  return (
    <div className="loader-container">
      <div 
        className={`loader ${sizeClass}`}
        style={{ borderTopColor: color }}
      ></div>
      {text && <p className="loader-text">{text}</p>}
    </div>
  );
};

export default Loader;
