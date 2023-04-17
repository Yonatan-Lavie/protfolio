import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecommendationsData } from '../../redux/recommendations/recommendationsSlice';
import {
  selectLoadingStatus,
  selectData,
} from '../../redux/recommendations/selectors';
import user from '../../assets/user.jpg';
import { recommendations } from '../../data';
import {
  RecommendationsMain,
  CodeIcon,
  Header,
  HeadLine,
  RecommendationList,
  RecommendationListItem,
  Author,
  PublishDate,
  RecommendationText,
  AuthorImage,
  RecommendationDitails,
} from './Recommendations.elements';
const Recommendations = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchRecommendationsData());
  }, []);
  return (
    <RecommendationsMain id="#Recommendations">
      <Header>
        <CodeIcon />
        <HeadLine>{loading === 'fulfilled' && data.title}</HeadLine>
      </Header>
      <RecommendationList>
        {loading === 'rejected' && 'loading failed'}
        {loading === 'pending' && 'loading in progress'}
        {loading === 'fulfilled' &&
          data.recommendationslist.map((item) => (
            <RecommendationListItem>
              <RecommendationDitails>
                <AuthorImage src={user} />
                <Author>Author : {item.author}</Author>
                <PublishDate>Publish : {item.pub}</PublishDate>
              </RecommendationDitails>
              <RecommendationText>{item.text}</RecommendationText>
            </RecommendationListItem>
          ))}
      </RecommendationList>
    </RecommendationsMain>
  );
};

export default Recommendations;
