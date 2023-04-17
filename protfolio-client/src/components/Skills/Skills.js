import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSkillsData } from '../../redux/skills/skillsSlice';
import { selectLoadingStatus, selectData } from '../../redux/skills/selectors';
import { skills } from '../../data';
import {
  SkillstMain,
  Chip,
  HeadLine,
  Star,
  SkillsList,
  SkillText,
  SkillItem,
} from './Skills.elements';

const Skills = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchSkillsData());
  }, []);
  return (
    <SkillstMain id="#Skills">
      <Chip />
      <HeadLine>{loading === 'fulfilled' && data.title}</HeadLine>
      <SkillsList>
        {loading === 'rejected' && 'loading failed'}
        {loading === 'pending' && 'loading in progress'}
        {loading === 'fulfilled' &&
          data.skillslist.map((item, key) => (
            <SkillItem key={key}>{item.name}</SkillItem>
          ))}
      </SkillsList>
    </SkillstMain>
  );
};

export default Skills;
