import React from 'react';
import Project, { ProjectProps } from '../project';
import screenshot from './screenshot.jpg';

const PaintifyProject: React.FC<
  Omit<ProjectProps, 'title' | 'description' | 'image'>
> = (props) => (
  <Project
    title="Paintify"
    description="a web app for turning images into paintings"
    image={screenshot}
    site="https://austinrsands.github.io/paintify/"
    source="https://github.com/austinrsands/paintify"
    {...props}
  />
);

export default PaintifyProject;
