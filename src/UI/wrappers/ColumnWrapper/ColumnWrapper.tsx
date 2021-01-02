import React from 'react';
import './column-wrapper.css';

const ColumnWrapper: React.FC = ({ children }) => {
  return <div className="column-wrapper">{children}</div>;
};

export default ColumnWrapper;
