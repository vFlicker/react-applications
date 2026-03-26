import { useQuery } from '@apollo/client/react';
import { useParams } from 'react-router-dom';

import { Layout, QueryResult, TrackDetail } from '~/components';

import { GetTrackDocument } from './track.generated';

export function TrackPage() {
  const { trackId = '' } = useParams();
  const { loading, error, data } = useQuery(GetTrackDocument, {
    variables: { trackId },
  });

  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
}
