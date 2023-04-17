import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchThemeData } from './redux/theme/themeSlice';
import { selectData, selectLoadingStatus } from './redux/theme/selectors';

// import { setColor } from './redux/actions';
// import { getTheme, getThemeColor } from './redux/selectors';

import { ThemeProvider } from 'styled-components';
import Theme from './theme/Theme';
import GlobalStyle from './theme/GlobalStyle';

import { Main } from './theme/GlobalStyle';
import {
  Navbar,
  About,
  Contact,
  Projects,
  Skills,
  Recommendations,
  ScrollHandler,
  ThemeSetter,
} from './components/index';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const theme = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchThemeData());
  }, []);
  return (
    <>
      {loading === 'fulfilled' && (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Main>
            <ScrollHandler />
            <Navbar />
            <About />
            {/* <ThemeSetter /> */}
            <Projects />
            <Skills />
            <Recommendations />
            <Contact />
          </Main>
        </ThemeProvider>
      )}
    </>
  );
};

export default App;
