import React from 'react';
import Project, { ProjectProps } from '../../../generic/project';
import screenshot from './screenshot.png';

const NotefallProject: React.FC<
  Omit<ProjectProps, 'title' | 'description' | 'image'>
> = (props) => (
  <Project
    title="Notefall"
    description="a web app for learning songs from MIDI files with a connected piano keyboard"
    image={screenshot}
    site="https://austinrsands.github.io/notefall/"
    source="https://github.com/austinrsands/notefall"
    {...props}
  />
);

export default NotefallProject;
