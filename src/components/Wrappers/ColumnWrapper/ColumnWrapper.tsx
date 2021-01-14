import React from 'react';
import './styles.css';

const ColumnWrapper: React.FC = ({ children }) => {
  return <div className="column-wrapper">{children}</div>;
};

export default ColumnWrapper;
