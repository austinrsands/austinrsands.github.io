import React from 'react';
import Project, { ProjectProps } from '../../../generic/project';
import screenshot from './screenshot.png';

const FractalViewerProject: React.FC<
  Omit<ProjectProps, 'title' | 'description' | 'image'>
> = (props) => (
  <Project
    title="Fractal Viewer"
    description="a web app for exploring the Mandelbrot set"
    image={screenshot}
    site="https://austinrsands.github.io/fractal-viewer/"
    source="https://github.com/austinrsands/fractal-viewer"
    {...props}
  />
);

export default FractalViewerProject;
