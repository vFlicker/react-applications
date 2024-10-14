import './book-list.css';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { bookAddedToCart, fetchBooks } from '~/store';

import { BookItem } from '../book-item';
import { QueryResult } from '../query-result';

export function BookList(): React.JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const { books, loading, error } = useSelector((state) => state.shoppingCart);

  return (
    <QueryResult error={error} loading={loading} data={books}>
      <ul className="books-list">
        {books?.map(({ id, ...book }) => (
          <li key={id}>
            <BookItem
              book={book}
              onAddedToCart={() => dispatch(bookAddedToCart(id))}
            />
          </li>
        ))}
      </ul>
    </QueryResult>
  );
}
