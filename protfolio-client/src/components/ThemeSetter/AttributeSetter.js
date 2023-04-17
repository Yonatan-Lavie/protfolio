import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { setColor } from '../../redux/actions';

const AttributeSetter = ({ name, value }) => {
  // const dispatch = useDispatch();
  // const [input, setInput] = useState(value);
  return (
    <div>
      <div>
        name: {name}, value:{' '}
        <input
          // value={input}
          onChange={(e) => {
            // setInput(e.target.value);
            // dispatch(setColor(name, e.target.value));
          }}
        />
      </div>
    </div>
  );
};

export default AttributeSetter;
