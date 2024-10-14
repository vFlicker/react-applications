import './error-indicator.css';

import React from 'react';

export function ErrorIndicator(): React.JSX.Element {
  return (
    <div className="error-indicator">
      <p className="error-indicator__text">
        Oh, no. Something has gone terribly wrong...
      </p>
    </div>
  );
}
