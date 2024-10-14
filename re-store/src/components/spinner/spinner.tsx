import React from 'react';

import classes from './spinner.module.css';

export function Spinner(): React.JSX.Element {
  return (
    <div className={classes.loader}>
      <div className={classes.content}>Loading...</div>
    </div>
  );
}
