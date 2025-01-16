import React from 'react';

export const StartPage = () => {
  return (
    <div className="page start-page">
      <div className="container">
        <div className="greeting-block">
          <p className="greeting-block__top text-accent">Hello,</p>
          <h1 className="greeting-block__title">
            Nice to meet <span>you!</span>
          </h1>
        </div>
        <div className="auth-block">
          <button className="icon log-in-button">Log in</button>
          <p className="auth-block-connector">|</p>
          <button className="icon register-button">Register</button>
        </div>
      </div>
    </div>
  );
};
