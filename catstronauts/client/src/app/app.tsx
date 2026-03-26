import { HttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { TrackPage } from '~/pages/track/track';
import { TracksPage } from '~/pages/tracks/tracks';

const cache = new InMemoryCache();
const link = new HttpLink({ uri: 'http://localhost:4000/' });

const client = new ApolloClient({
  cache: cache,
  link: link,
});

export function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/tracks" />} />
          <Route element={<TracksPage />} path="/tracks" index />
          <Route element={<TrackPage />} path="/tracks/:trackId" />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}
