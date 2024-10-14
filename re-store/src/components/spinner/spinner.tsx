import './spinner.css';

import React from 'react';

export function Spinner(): React.JSX.Element {
  return (
    <div className="loader">
      <div className="loader__content">Loading...</div>
    </div>
  );
}
