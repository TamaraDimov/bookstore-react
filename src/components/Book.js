import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <div>
      <div className="singleBook">
        <h3>{title}</h3>
        <h5>{author}</h5>
      </div>
      <button type="button" className="remove">
        Remove
      </button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
