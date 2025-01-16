import './App.scss';
import React from 'react';
import { Header } from './components/Header';
import { CreaterInfo } from './components/CreaterInfo';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <CreaterInfo />
    </div>
  );
};
