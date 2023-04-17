import styled, { createGlobalStyle, css } from 'styled-components';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 

 body {
  background: ${({ theme }) => theme.colors.main};
 }
`;
export const Main = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const RegularButton = styled.button`
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.blue};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  ${({ fixed }) =>
    fixed &&
    css`
      flex-basis: ${fixed || '25%'};
    `}
  &:hover {
    transition: all 1.2s ease-out;
    background: #fff;
    background-color: ${({ primary, theme }) =>
      primary ? theme.colors.blue : theme.colors.lightBlue};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

const CustomLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
`;

export const Button = ({ children, to, fixed }) => {
  return (
    <>
      {to ? (
        <RegularButton fixed={fixed}>
          <CustomLink to={to}>{children}</CustomLink>
        </RegularButton>
      ) : (
        <RegularButton fixed={fixed}>{children}</RegularButton>
      )}
    </>
  );
};

export default GlobalStyle;
