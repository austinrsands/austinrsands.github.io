import React from 'react';
import {
  Box,
  BoxProps,
  makeStyles,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import clsx from 'clsx';
import WebRoundedIcon from '@material-ui/icons/WebRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import IconLink from '../../../generic/icon-link';

const useStyles = makeStyles((theme) => ({
  root: {},
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
  linkContainer: {
    margin: '2rem 0 1rem 0',
  },
  links: {
    margin: '-1rem',
    display: 'flex',
    flexWrap: 'wrap',
  },
  link: {
    margin: '0.6rem 1rem',
  },
  imageContainer: {
    margin: '1rem 2rem',
    flex: 1,
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '0.5rem',
    boxShadow: theme.shadows[1],
  },
  vertical: {
    flexDirection: 'row',
  },
  horizontal: {
    flexDirection: 'column',
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
  const mobile = useMediaQuery('(min-width:70rem)');
  const flexClass = mobile ? classes.vertical : classes.horizontal;

  return (
    <Box className={clsx(classes.root, className)} {...rest}>
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
          {(site || source) && (
            <Box className={classes.linkContainer}>
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
          )}
        </Box>
        <Box className={classes.imageContainer}>
          <img className={classes.image} alt="project screenshot" src={image} />
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
