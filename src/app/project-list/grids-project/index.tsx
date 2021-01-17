import React from 'react';
import Project, { ProjectProps } from '../../../lib/project';
import screenshot from './screenshot.jpg';

const GridsProject: React.FC<
  Omit<ProjectProps, 'title' | 'description' | 'image'>
> = (props) => (
  <Project
    title="Grids"
    description="a mobile game of infinite procedurally generated color puzzles"
    technologies={['Swift']}
    image={screenshot}
    {...props}
  />
);

export default GridsProject;
