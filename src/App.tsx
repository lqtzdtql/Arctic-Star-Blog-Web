import './global.custom.scss';
import React from 'react';

import Nav from './components/Nav';

import s from './App.module.scss';

const App: React.FC<any> = () => {
  return (
    <div className={s.appBox}>
      <Nav />
      {/* <Main /> */}
    </div>
  );
};

export default App;
