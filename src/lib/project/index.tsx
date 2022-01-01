import React from 'react';
import {
  Box,
  BoxProps,
  makeStyles,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import clsx from 'clsx';

import TechnologiesList from './technologies-list';
import ProjectLinks from './project-links';
import ProjectImage from './project-image';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '-1rem -2rem',
    display: 'flex',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem 2rem',
    flex: 1,
  },
  title: {
    fontWeight: 500,
    marginBottom: '1rem',
  },
  description: {
    margin: '1rem 0',
  },
  technologiesList: {
    margin: '1rem 0',
  },
  projectLinks: {
    margin: '1rem 0',
  },
  image: {
    margin: '1rem 2rem',
    flex: 1,
  },
  vertical: {
    flexDirection: 'row',
  },
  horizontal: {
    flexDirection: 'column-reverse',
  },
}));

interface Props {
  title: string;
  description: string;
  technologies?: string[];
  image: string;
  site?: string;
  source?: string;
}

export type ProjectProps = Props & BoxProps;

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  image,
  site,
  source,
  ...rest
}) => {
  const classes = useStyles();
  const mobile = useMediaQuery('(min-width:70rem)');
  const flexClass = mobile ? classes.vertical : classes.horizontal;

  return (
    <Box {...rest}>
      <Box className={clsx(classes.container, flexClass)}>
        <Box className={classes.content}>
          <Typography className={classes.title} variant="h2">
            {title}
          </Typography>
          <Typography
            className={classes.description}
            variant="h5"
            color="textSecondary"
          >
            {description}
          </Typography>
          <TechnologiesList
            className={classes.technologiesList}
            technologies={technologies}
          />
          <ProjectLinks
            className={classes.projectLinks}
            site={site}
            source={source}
          />
        </Box>
        <ProjectImage className={classes.image} image={image} />
      </Box>
    </Box>
  );
};

export default Project;
