import styled from 'styled-components';
import { FaCode } from 'react-icons/fa/index';

export const ProjectstMain = styled.section`
  padding: ${({ theme }) => theme.padding};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
`;

export const CodeIcon = styled(FaCode).attrs(({ theme }) => ({
  size: theme.icons.title,
  color: theme.colors.white,
}))``;

export const HeadLine = styled.h2``;

export const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const ProjectListItem = styled.div`
  flex: 0 0 30%;
  padding-bottom: 40px;
`;

export const ImageWrapper = styled.div``;

export const IMG = styled.img`
  width: 100%;
`;

export const ProjectContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;

  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
`;
export const ProjectTitle = styled.h1``;
export const ProjectSubtitle = styled.h3``;
export const ProjectDescription = styled.p``;
