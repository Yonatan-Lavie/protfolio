import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNavbarData } from '../../redux/navbar/navbarSlice';
import { selectLoadingStatus, selectData } from '../../redux/navbar/selectors';
import {
  NavbarMain,
  Nav,
  NavbarMenu,
  NavbarIcon,
  NavbarLink,
} from './Navbar.elements';

const Navbar = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchNavbarData());
  }, []);
  return (
    <NavbarMain>
      <NavbarIcon />
      <NavbarMenu>
        {loading === 'rejected' && 'loading failed'}
        {loading === 'pending' && 'loading in progress'}
        {loading === 'fulfilled' &&
          data.links.map((link, key) => (
            <NavbarLink key={key} primary to={`/#${link}`}>
              {link}
            </NavbarLink>
          ))}
      </NavbarMenu>
    </NavbarMain>
  );
};

export default Navbar;
