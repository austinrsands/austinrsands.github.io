import React from 'react';
import { Box, BoxProps, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '0.5rem',
    boxShadow: theme.shadows[1],
  },
}));

interface Props {
  image: string;
}

const ProjectImage: React.FC<Props & BoxProps> = ({ image, ...rest }) => {
  const classes = useStyles();
  return (
    <Box {...rest}>
      <img className={classes.image} alt="project screenshot" src={image} />
    </Box>
  );
};

export default ProjectImage;
