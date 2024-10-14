import './app.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '~/components/header';
import { CartPage } from '~/pages/cart-page';
import { HomePage } from '~/pages/home-page';

import classes from './app.module.css';

export function App(): React.JSX.Element {
  return (
    <div className={classes.wrapper}>
      <Header numItems={5} total={210} />
      <main className={classes.main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </div>
  );
}
