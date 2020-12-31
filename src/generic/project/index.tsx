import React from 'react';
import { Box, BoxProps, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import WebRoundedIcon from '@material-ui/icons/WebRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import IconLink from '../icon-link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  content: {
    minWidth: '20rem',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginRight: '4rem',
  },
  title: {
    fontWeight: 500,
  },
  description: {
    margin: '2rem 0',
  },
  links: {
    marginBottom: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
  },
  link: {
    marginRight: '2rem',
  },
  imageContainer: {
    flex: 2,
  },
  image: {
    minWidth: '30rem',
    width: '100%',
    height: 'auto',
    borderRadius: '0.5rem',
    boxShadow: theme.shadows[1],
  },
}));

interface Props {
  title: string;
  description: string;
  image: string;
  site?: string;
  source?: string;
}

export type ProjectProps = Props & BoxProps;

const Project: React.FC<ProjectProps> = ({
  className,
  title,
  description,
  image,
  site,
  source,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.root, className)} {...rest}>
      <Box className={classes.content}>
        <Typography className={classes.title} variant="h2">
          {title}
        </Typography>
        <Typography className={classes.description} variant="h5">
          {description}
        </Typography>
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
      <Box className={classes.imageContainer}>
        <img className={classes.image} alt="project screenshot" src={image} />
      </Box>
    </Box>
  );
};

export default Project;
