import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  allBookRemovedFormCart,
  bookAddedToCart,
  bookRemovedFormCart,
} from '~/store';

import classes from './shopping-cart-table.module.css';

export function ShoppingCartTable(): React.JSX.Element {
  const { cartItems, orderTotal } = useSelector((state) => state.shoppingCart);

  return (
    <div className={classes.shoppingCartTable}>
      <h2>Your Order</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item, index) => (
            <Row item={item} index={index} key={item.id} />
          ))}
        </tbody>
      </table>

      <div className={classes.total}>Total: ${orderTotal}</div>
    </div>
  );
}

function Row({ item, index }): React.JSX.Element {
  const { id, title, count, total } = item;

  const dispatch = useDispatch();

  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{count}</td>
      <td>${total}</td>
      <td>
        <button
          className="btn btn-outline-warning btn-sm"
          onClick={() => dispatch(bookRemovedFormCart(id))}
        >
          <i className="fa fa-minus-circle" />
        </button>
        <button
          className="btn btn-outline-success btn-sm"
          onClick={() => dispatch(bookAddedToCart(id))}
        >
          <i className="fa fa-plus-circle" />
        </button>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => dispatch(allBookRemovedFormCart(id))}
        >
          <i className="fa fa-trash-o" />
        </button>
      </td>
    </tr>
  );
}
