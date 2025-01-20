import React from 'react';
import { useMainContext } from '../../context/MainContext';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { currentPage } = useMainContext();

  return (
    <header className="header">
      <div className="container">
        <nav className="header-nav-bar">
          <Link to="/" className="icon main-logo" />

          {currentPage === 'home' && (
            <div className="nav-bar-right">
              <p className="greetings-user">
                Welcome, <span>Pavlo</span>
              </p>
              <button className="icon account-button" />
            </div>
          )}

          {currentPage === 'start' && (
            <button className="icon color-mode-button" />
          )}
        </nav>
      </div>
    </header>
  );
};
