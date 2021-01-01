import React from 'react';
import { Box, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import theme from './theme';
import Header from './header';
import ProjectList from './project-list';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    width: '100vw',
  },
  projectList: {},
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={classes.content}>
        <Header className={classes.header} />
        <ProjectList className={classes.projectList} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
