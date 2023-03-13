import './global.custom.scss';
import React from 'react';

import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

import s from './App.module.scss';

const App: React.FC<any> = () => {
  return (
    <div className={s.appBox}>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
