import React, { ReactElement } from 'react';
import { ThemeProvider, createMuiTheme, Theme } from '@material-ui/core/styles';

import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

/**
 * xs, extra-small: 0px
 * sm, small: 600px
 * md, medium: 960px
 * lg, large: 1280px
 * xl, extra-large: 1920px
 */
const breakpoints = createBreakpoints({});

const getPixelSize = (x: number): string => `${x * 8}px`;

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF2A2B',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: '14px',
        minWidth: '100%',
        minHeight: getPixelSize(6),
        [breakpoints.up('md')]: {
          minWidth: getPixelSize(25),
        },
      },
    },
  },
});

const Store = (props: {children: any}): ReactElement => {
  const { children } = props;

  return (
    <>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  );
};

export default Store;
