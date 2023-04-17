import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import profile from '../../assets/profile.png';
import { fetchAboutData } from '../../redux/about/aboutSlice';
import { selectLoadingStatus, selectData } from '../../redux/about/selectors';
import { Button } from '../../theme/GlobalStyle';
import {
  AboutMain,
  IMG,
  AboutParagraph,
  ImgWrapper,
  AboutContent,
  AboutButtonList,
  HeadLine,
} from './About.elements';
const About = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchAboutData());
  }, []);

  return (
    <AboutMain id="#About">
      <ImgWrapper>
        <IMG src={profile} />
      </ImgWrapper>
      <AboutContent>
        <HeadLine>About</HeadLine>
        <AboutParagraph>
          {loading === 'rejected' && 'loading failed'}
          {loading === 'pending' && 'loading in progress'}
          {loading === 'fulfilled' && data.text}
        </AboutParagraph>
        <AboutButtonList>
          <Button to="#Projects" fixed="35%">
            Projects
          </Button>
          <Button to="#Skills" fixed="35%">
            Skills
          </Button>
        </AboutButtonList>
      </AboutContent>
    </AboutMain>
  );
};

export default About;
