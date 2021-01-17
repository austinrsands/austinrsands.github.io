import React from 'react';
import Project, { ProjectProps } from '../project';
import screenshot from './screenshot.jpg';

const FractalViewerProject: React.FC<
  Omit<ProjectProps, 'title' | 'description' | 'image'>
> = (props) => (
  <Project
    title="Fractal Viewer"
    description="a web app for exploring the Mandelbrot set"
    technologies={['JavaScript', 'GLSL', 'HTML', 'CSS']}
    image={screenshot}
    site="https://austinrsands.github.io/fractal-viewer/"
    source="https://github.com/austinrsands/fractal-viewer"
    {...props}
  />
);

export default FractalViewerProject;
