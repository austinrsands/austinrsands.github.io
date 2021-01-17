import React from 'react';
import Project, { ProjectProps } from '../project';
import screenshot from './screenshot.jpg';

const TheBlockTrialsProject: React.FC<
  Omit<ProjectProps, 'title' | 'description' | 'image'>
> = (props) => (
  <Project
    title="The Block Trials"
    description="a 2D physics-based puzzle platformer mobile game"
    technologies={['Unity', 'C#']}
    image={screenshot}
    {...props}
  />
);

export default TheBlockTrialsProject;
