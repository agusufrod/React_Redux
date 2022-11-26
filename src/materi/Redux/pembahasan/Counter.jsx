import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementWithCheckingAction, increment } from '../../../app/Features/Counter/actions';

const Counter = () => {
  let { count } = useSelector((state) => state.counter);
  const dispacth = useDispatch();

  return (
    <div>
      <button onClick={() => dispacth(decrementWithCheckingAction(1))}>-</button> <span>{count}</span> <button onClick={() => dispacth(increment(1))}>+</button>
    </div>
  );
};

export default Counter;
