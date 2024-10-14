import React, { PropsWithChildren } from 'react';

import { ErrorIndicator } from '../error-indicator';
import { Spinner } from '../spinner';

type QueryResultProps = PropsWithChildren<{
  loading: boolean;
  error: boolean;
}>;

export function QueryResult({
  loading,
  error,
  children,
}: QueryResultProps): React.JSX.Element {
  if (error) return <ErrorIndicator />;
  if (loading) return <Spinner />;
  return children;
}
