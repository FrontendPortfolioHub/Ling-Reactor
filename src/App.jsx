import './App.scss';
import React from 'react';
import { Header } from './components/Header';
import { CreaterInfo } from './components/CreaterInfo';
import { StartPage } from './pages/StartPage';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <StartPage />
      <CreaterInfo />
    </div>
  );
};
