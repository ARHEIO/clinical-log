import React, { ReactElement } from 'react';
import './App.scss';

import Footer from '../../Molecules/Footer/Footer';
import Header from '../../Molecules/Header/Header';
import Router from '../../Router/Router';
import Store from '../../Store/Store';

const App = (): ReactElement => (
  <div className="app-container">
    <Store>
      <Header />
      <section className="app">
        <Router />
      </section>
      <Footer />
    </Store>
  </div>
);

export default App;
