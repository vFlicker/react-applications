import { HttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { TracksPage } from '~/pages/tracks';

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
          <Route element={<TracksPage />} path="/" />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}
