import React from 'react';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header-nav-bar">
          <a href="/" className="icon main-logo" />
          <button className="icon menu-open-button" />
        </nav>
      </div>
    </header>
  );
};
