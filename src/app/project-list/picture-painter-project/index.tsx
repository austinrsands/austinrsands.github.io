import React from 'react';
import Project, { ProjectProps } from '../project';
import screenshot from './screenshot.jpg';

const PicturePainterProject: React.FC<
  Omit<ProjectProps, 'title' | 'description' | 'image'>
> = (props) => (
  <Project
    title="Picture Painter"
    description="a web app for creating custom image-based generative paintings"
    image={screenshot}
    site="https://austinrsands.github.io/picture-painter/"
    source="https://github.com/austinrsands/picture-painter"
    {...props}
  />
);

export default PicturePainterProject;
