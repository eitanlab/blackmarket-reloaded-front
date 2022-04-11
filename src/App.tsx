import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import paths from './routes/paths';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => {
          return (
            <Route
              index={route.path === paths.index}
              path={route.path}
              element={<Suspense fallback={<p>Loading...</p>}>{route.component}</Suspense>}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
