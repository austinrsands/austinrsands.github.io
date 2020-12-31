import React from 'react';
import { Box, makeStyles, ThemeProvider } from '@material-ui/core';
import theme from './theme';
import Header from './header';
import ProjectList from './project-list';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.content}>
        <Header />
        <ProjectList />
      </Box>
    </ThemeProvider>
  );
};

export default App;
