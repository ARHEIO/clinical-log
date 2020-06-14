import React, { ReactElement, useState, createContext } from 'react';
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
      main: '#546A7B',
    },
    secondary: {
      main: '#87AEB5',
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

export const AuthContext = createContext<any>({ isAuthed: false });

const Store = (props: {children: any}): ReactElement => {
  const { children } = props;
  const [authContext, setAuthContext] = useState({ isAuthed: false });

  return (
    <>
      <AuthContext.Provider value={[authContext, setAuthContext]}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </AuthContext.Provider>
    </>
  );
};

export default Store;
