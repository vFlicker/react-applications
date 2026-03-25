import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

import { Layout, QueryResult } from '~/components';
import { TrackCard } from '~/containers/track-card';

const TRACKS = gql`
  query ExampleQuery {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`;

export function TracksPage() {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
}
