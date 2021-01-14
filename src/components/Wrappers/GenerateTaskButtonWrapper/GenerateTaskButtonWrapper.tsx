import React from 'react';
import './generate-task-button-wrapper.css';

const GenerateTaskButtonWrapper: React.FC = ({ children }) => {
  return <div className="button-wrapper">{children}</div>;
};

export default GenerateTaskButtonWrapper;
