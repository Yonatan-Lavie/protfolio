import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
// import { makeSelectThemeAttribute, getTheme } from '../../redux/selectors';
// import { setColor } from '../../redux/actions';
import AttributeSetter from './AttributeSetter';

const ThemeSetter = () => {
  // const [selectedAttribute, setSelectedAttribute] = useState('colors');
  // const selectThemeAttribute = useMemo(makeSelectThemeAttribute, []);
  // const theme = useSelector(getTheme);
  // const attr = useSelector((state) =>
  //   selectThemeAttribute(state, selectedAttribute)
  // );
  // console.log(attr);

  return (
    <div>
      {/* {theme &&
        Object.keys(theme).map((key) => (
          <>
            <input
              type="radio"
              value={key}
              checked={selectedAttribute === key}
              onChange={(e) => setSelectedAttribute(e.target.value)}
            />{' '}
            {key}
            <br />
          </>
        ))}

      {attr &&
        Object.keys(attr).map((key) => (
          <AttributeSetter name={key} value={attr[key]} />
        ))} */}
    </div>
  );
};

export default ThemeSetter;
