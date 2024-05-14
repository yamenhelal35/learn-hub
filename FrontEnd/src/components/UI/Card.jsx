// Card.jsx

import React from 'react';

const CardTitle = ({ children }) => <h2 className="card-title">{children}</h2>;
const CardDescription = ({ children }) => <p className="card-description">{children}</p>;
const CardHeader = ({ children }) => <div className="card-header">{children}</div>;
const CardContent = ({ children }) => <div className="card-Content">{children}</div>;
const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export { Card, CardTitle, CardDescription, CardHeader, CardContent };
