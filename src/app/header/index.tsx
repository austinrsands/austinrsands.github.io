import React from 'react';
import {
  Avatar,
  Box,
  makeStyles,
  Paper,
  PaperProps,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import { grey } from '@material-ui/core/colors';
import GithubLink from './github-link';
import EmailLink from './email-link';
import avatar from './avatar.png';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '3rem 2rem',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '-1rem -2rem',
  },
  avatar: {
    maxWidth: '80%',
    width: '20rem',
    height: 'auto',
    margin: '1rem 2rem',
    border: `0.2rem solid ${grey[50]}`,
  },
  content: {
    margin: '1rem 2rem',
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    margin: '1rem',
    fontWeight: 400,
    color: grey[50],
  },
  bio: {
    margin: '1rem',
    color: grey[400],
  },
  linkContainer: {
    margin: '2rem 1rem',
  },
  links: {
    margin: '-1rem',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  link: {
    margin: '0.6rem 1rem',
  },
}));

const Header: React.FC<PaperProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Paper className={clsx(classes.root, className)} square {...rest}>
      <Box className={classes.container}>
        <Avatar className={classes.avatar} alt="Austin" src={avatar} />
        <Box className={classes.content}>
          <Typography className={classes.name} variant="h1">
            Austin Sands
          </Typography>
          <Typography
            className={classes.bio}
            variant="h4"
            color="textSecondary"
          >
            Student of Computer Science and Mathematics
          </Typography>
          <Box className={classes.linkContainer}>
            <Box className={classes.links}>
              <EmailLink className={classes.link} />
              <GithubLink className={classes.link} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default Header;
