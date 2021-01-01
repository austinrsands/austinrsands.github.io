import React from 'react';
import { Box, BoxProps, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import NotefallProject from './notefall-project';
import FractalViewerProject from './fractal-viewer-project';
import PicturePainterProject from './picture-painter-project';
import TheBlockTrialsProject from './the-block-trials-project';

const useStyles = makeStyles({
  root: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    margin: '5rem 1rem',
    textAlign: 'center',
  },
  project: {
    maxWidth: '90rem',
    marginBottom: '4rem',
  },
});

const ProjectList: React.FC<BoxProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.root, className)} {...rest}>
      <Typography className={classes.title} variant="h4">
        Here&apos;s what I&apos;ve been working on...
      </Typography>
      <NotefallProject className={classes.project} />
      <FractalViewerProject className={classes.project} />
      <PicturePainterProject className={classes.project} />
      <TheBlockTrialsProject className={classes.project} />
    </Box>
  );
};

export default ProjectList;
