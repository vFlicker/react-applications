import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

import { Layout, QueryResult } from '~/components';
import { TrackCard } from '~/containers/track-card';

import { GetTracksDocument } from './tracks.generated';

export function TracksPage() {
  const { loading, error, data } = useQuery(GetTracksDocument);

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
