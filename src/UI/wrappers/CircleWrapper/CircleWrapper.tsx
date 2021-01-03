import React from 'react';
import './circle-wrapper.css';

const CircleWrapper: React.FC = ({ children }) => {
  return <div className="circle-wrapper">{children}</div>;
};

export default CircleWrapper;
