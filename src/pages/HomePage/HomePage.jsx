import React, { useEffect } from 'react';
import { useMainContext } from '../../context/MainContext';

export const HomePage = () => {
  const { setCurrentPage } = useMainContext();

  useEffect(() => {
    setCurrentPage('home');
  }, []);

  return (
    <div className="page home-page">
      <div className="container">
        <h2 className="home-page__title">What will we do today?</h2>
        <ul className="actions-list">
          <li className="actions-card">
            <h3 className="actions-item__title">Expand our vocabulary?</h3>
            <p className="actions-item__text">
              More words – more opportunities<span>...</span>
            </p>
            <div className="actions-item__image plus-icon" />
          </li>
          <li className="actions-card">
            <h3 className="actions-item__title">Learn new words?</h3>
            <p className="actions-item__text">
              More learning – more freedom<span>...</span>
            </p>
            <div className="actions-item__image education-icon" />
          </li>
          <li className="actions-card">
            <h3 className="actions-item__title">Repeat the words?</h3>
            <p className="actions-item__text">
              More repetition – closer to the goal<span>...</span>
            </p>
            <div className="actions-item__image repeat-icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};
