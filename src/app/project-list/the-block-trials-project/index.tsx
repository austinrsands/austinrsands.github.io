import React from 'react';
import Project, { ProjectProps } from '../../../generic/project';
import screenshot from './screenshot.jpg';

const TheBlockTrialsProject: React.FC<
  Omit<ProjectProps, 'title' | 'description' | 'image'>
> = (props) => (
  <Project
    title="The Block Trials"
    description="a 2D physics-based puzzle platformer mobile game"
    image={screenshot}
    {...props}
  />
);

export default TheBlockTrialsProject;
