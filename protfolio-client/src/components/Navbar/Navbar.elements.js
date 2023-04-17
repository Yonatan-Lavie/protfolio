import styled from 'styled-components';
import { FaFingerprint } from 'react-icons/fa/index';
import { Link } from 'react-router-dom';

export const NavbarMain = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue};
  position: sticky;
  top: 0;
  z-index: 999;
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const NavbarMenu = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
  margin-right: 20px;
`;
export const NavbarIcon = styled(FaFingerprint).attrs(({ size, theme }) => ({
  size: size || theme.icons.logo,
}))`
  margin: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const NavbarLink = styled(Link)`
  padding: 0 30px 10px 30px;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  }
`;
