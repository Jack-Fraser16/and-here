import React, { FC } from 'react';

import ThemeProvider from './ThemeProvider';
import Header from './Header/Header';

const App: FC = () => {
  return (
    <ThemeProvider >
      <Header/>
    </ThemeProvider>
  );
};

export default App;
