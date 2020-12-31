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
import GithubLink from './github-link';
import EmailLink from './email-link';
import avatar from './avatar.png';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  avatar: {
    width: '20rem',
    height: '20rem',
    margin: '1rem',
    border: `0.2rem solid ${theme.palette.text.primary}`,
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '3rem',
  },
  name: {
    margin: '1rem',
    fontWeight: 400,
  },
  bio: {
    margin: '1rem',
  },
  links: {
    margin: '1rem',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  link: {
    margin: '0.6rem 2rem 0.6rem 0',
  },
}));

const Header: React.FC<PaperProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Paper className={clsx(classes.root, className)} square {...rest}>
      <Avatar className={classes.avatar} alt="Austin" src={avatar} />
      <Box className={classes.text}>
        <Typography className={classes.name} variant="h1">
          Austin Sands
        </Typography>
        <Typography className={classes.bio} variant="h4" color="textSecondary">
          Student of Computer Science and Mathematics
        </Typography>
        <Box className={classes.links}>
          <EmailLink className={classes.link} />
          <GithubLink className={classes.link} />
        </Box>
      </Box>
    </Paper>
  );
};

export default Header;
