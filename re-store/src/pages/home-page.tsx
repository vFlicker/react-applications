import React from 'react';

import { BookList } from '~/components/book-list';
import { ShoppingCartTable } from '~/components/shopping-cart-table';

export function HomePage(): React.JSX.Element {
  return (
    <div className="container">
      <BookList />
      <ShoppingCartTable />
    </div>
  );
}
