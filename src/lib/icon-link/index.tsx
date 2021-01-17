import React from 'react';
import { Link, LinkProps, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    marginLeft: '0.5rem',
    fontWeight: 'bold',
  },
});

interface Props {
  icon: React.ReactNode;
  label: string;
}

export type IconLinkProps = Props & LinkProps;

const IconLink: React.FC<IconLinkProps> = ({
  className,
  icon,
  label,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <Link className={clsx(classes.root, className)} {...rest}>
      {icon}
      <Typography className={classes.label} variant="subtitle1">
        {label}
      </Typography>
    </Link>
  );
};

export default IconLink;
