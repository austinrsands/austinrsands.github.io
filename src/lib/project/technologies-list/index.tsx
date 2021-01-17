import React from 'react';
import { Box, BoxProps, Chip, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  technologies: {
    margin: '-0.2rem',
    display: 'flex',
    flexWrap: 'wrap',
  },
  technologyChip: {
    margin: '0.2rem 0.2rem',
  },
  technologyLabel: {
    fontWeight: 'bold',
  },
});

interface Props {
  technologies?: string[];
}

const TechnologiesList: React.FC<Props & BoxProps> = ({
  technologies,
  ...rest
}) => {
  const classes = useStyles();

  return technologies ? (
    <Box {...rest}>
      <Box className={classes.technologies}>
        {technologies &&
          technologies.map((technology, index) => (
            <Chip
              className={classes.technologyChip}
              key={`${technology} - ${index}`}
              label={
                <Typography className={classes.technologyLabel} variant="body2">
                  {technology}
                </Typography>
              }
            />
          ))}
      </Box>
    </Box>
  ) : null;
};

export default TechnologiesList;
