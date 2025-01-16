import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from './App';
import { StartPage } from './pages/StartPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<StartPage />} />
      </Route>
    </Routes>
  </Router>
);
