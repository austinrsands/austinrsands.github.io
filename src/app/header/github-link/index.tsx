import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconLink, { IconLinkProps } from '../../../generic/icon-link';

const GithubLink: React.FC<
  Omit<IconLinkProps, 'icon' | 'label' | 'color' | 'href' | 'target' | 'rel'>
> = (props) => (
  <IconLink
    icon={<GitHubIcon />}
    label="github.com/austinrsands"
    href="https://github.com/austinrsands"
    target="_blank"
    rel="noopener"
    {...props}
  />
);

export default GithubLink;
