import React from 'react';
import { Box, BoxProps, makeStyles } from '@material-ui/core';
import WebRoundedIcon from '@material-ui/icons/WebRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import IconLink from '../../icon-link';

const useStyles = makeStyles({
  links: {
    margin: '-1rem',
    display: 'flex',
    flexWrap: 'wrap',
  },
  link: {
    margin: '0.6rem 1rem',
  },
});

interface Props {
  site?: string;
  source?: string;
}

const ProjectLinks: React.FC<Props & BoxProps> = ({
  site,
  source,
  ...rest
}) => {
  const classes = useStyles();

  return site || source ? (
    <Box {...rest}>
      <Box className={classes.links}>
        {site && (
          <IconLink
            className={classes.link}
            icon={<WebRoundedIcon />}
            label="Live Site"
            href={site}
            target="_blank"
            rel="noopener"
          />
        )}
        {source && (
          <IconLink
            className={classes.link}
            icon={<CodeRoundedIcon />}
            label="Source Code"
            href={source}
            target="_blank"
            rel="noopener"
          />
        )}
      </Box>
    </Box>
  ) : null;
};

export default ProjectLinks;
