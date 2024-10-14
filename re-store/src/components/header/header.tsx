import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import classes from './header.module.css';

type HeaderProps = {
  numItems: number;
  total: number;
};

export function Header({ numItems, total }: HeaderProps): React.JSX.Element {
  return (
    <header className={classes.header}>
      <div className={cn('container', classes.container)}>
        <Link to="/">
          <h1 className={classes.logo}>ReStore</h1>
        </Link>
        <Link to="/cart">
          <div className={classes.shoppingCart}>
            <i
              className={cn(classes.shoppingCartIcon, 'fa', 'fa-shopping-cart')}
            />
            {numItems} items (${total})
          </div>
        </Link>
      </div>
    </header>
  );
}
