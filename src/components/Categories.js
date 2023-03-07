import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((status) => status.category);
  return (
    <div>
      <span>{typeof status === 'string' && status}</span>
      <button type="button" onClick={() => dispatch(checkStatus())}>
        Check Status
      </button>
    </div>
  );
}

export default Categories;
