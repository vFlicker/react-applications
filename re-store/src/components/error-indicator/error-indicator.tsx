import React from 'react';

import classes from './error-indicator.module.css';

export function ErrorIndicator(): React.JSX.Element {
  return (
    <div className={classes.error}>
      <p className={classes.text}>
        Oh, no. Something has gone terribly wrong...
      </p>
    </div>
  );
}
