import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectsData } from '../../redux/projects/projectsSlice';
import {
  selectLoadingStatus,
  selectData,
} from '../../redux/projects/selectors';
import { FaCode } from 'react-icons/fa/index';
import { ProjectstMain } from './Projects.elements';
import projectImage from '../../assets/projectImage.png';
import { projects } from '../../data';
import {
  HeadLine,
  CodeIcon,
  ProjectList,
  ProjectListItem,
  Header,
  ProjectDescription,
  ProjectTitle,
  ProjectSubtitle,
  ProjectContent,
  ImageWrapper,
  IMG,
} from './Projects.elements';

const Projects = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchProjectsData());
  }, []);
  return (
    <ProjectstMain id="#Projects">
      <Header>
        <CodeIcon size={70} />
        <HeadLine>{loading === 'fulfilled' && data.title}</HeadLine>
        <p>{loading === 'fulfilled' && data.subtitle}</p>
      </Header>
      <ProjectList>
        {loading === 'rejected' && 'loading failed'}
        {loading === 'pending' && 'loading in progress'}
        {loading === 'fulfilled' &&
          data.projectslist.map((project) => (
            <ProjectListItem>
              <ImageWrapper>
                <IMG alt={project.title} src={projectImage} />
              </ImageWrapper>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectContent>
            </ProjectListItem>
          ))}
      </ProjectList>
    </ProjectstMain>
  );
};

export default Projects;
