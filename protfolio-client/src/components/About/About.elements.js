import styled from 'styled-components';

export const AboutMain = styled.div`
  padding: ${({ theme }) => theme.padding};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.lightBlue};
`;
export const HeadLine = styled.h2.attrs(({ theme }) => ({}))`
  color: ${({ theme }) => theme.colors.blue};
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: stretch;
  align-self: stretch;
`;

export const AboutParagraph = styled.p`
  /* flex: 1; */
  order: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const AboutButtonList = styled.div`
  order: 2;
  display: flex;
  justify-content: space-between;
`;

export const ImgWrapper = styled.div`
  display: flex;
  order: 2;
`;

export const IMG = styled.img`
  border-radius: 50%;
  height: 250px;
`;
