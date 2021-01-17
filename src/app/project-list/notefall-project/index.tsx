import React from 'react';
import Project, { ProjectProps } from '../project';
import screenshot from './screenshot.jpg';

const NotefallProject: React.FC<
  Omit<ProjectProps, 'title' | 'description' | 'image'>
> = (props) => (
  <Project
    title="Notefall"
    description="a web app for learning songs from MIDI files with a connected piano keyboard"
    technologies={['React', 'TypeScript', 'HTML', 'CSS']}
    image={screenshot}
    site="https://austinrsands.github.io/notefall/"
    source="https://github.com/austinrsands/notefall"
    {...props}
  />
);

export default NotefallProject;
