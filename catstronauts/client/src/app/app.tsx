import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { TracksPage } from '~/pages/tracks';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TracksPage />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}
