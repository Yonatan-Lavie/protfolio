import styled from 'styled-components';
import { FaCommentDots } from 'react-icons/fa/index';

export const RecommendationsMain = styled.div`
  padding: ${({ theme }) => theme.padding};
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  align-items: center;
`;

export const CodeIcon = styled(FaCommentDots).attrs(({ theme }) => ({
  size: theme.icons.title,
  color: theme.colors.white,
}))``;

export const HeadLine = styled.h2`
  color: ${({ theme }) => theme.colors.blue};
`;

export const RecommendationList = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  align-items: stretch;
`;

export const RecommendationListItem = styled.div`
  padding-bottom: ${({ theme }) => theme.padding};
  display: flex;
  align-items: center;
`;

export const RecommendationDitails = styled.div`
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
`;

export const Author = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;
export const AuthorImage = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  padding-bottom: 5px;
`;

export const PublishDate = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.colors.white};
`;

export const RecommendationText = styled.p`
  padding: 20px;
  color: ${({ theme }) => theme.colors.white};
`;
