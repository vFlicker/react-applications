import React from 'react';

import classes from './book-item.module.css';

export function BookItem({ book, onAddedToCart }): React.JSX.Element {
  const { title, author, price, coverImage } = book;

  return (
    <div className={classes.book}>
      <div className={classes.cover}>
        <img className={classes.image} alt="cover" src={coverImage} />
      </div>
      <div className={classes.details}>
        <a href="/" className={classes.title}>
          {title}
        </a>
        <div className={classes.author}>{author}</div>
        <div className={classes.price}>${price}</div>
        <button className="btn btn-info add-to-cart" onClick={onAddedToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
