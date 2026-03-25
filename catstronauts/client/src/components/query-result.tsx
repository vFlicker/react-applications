import { LoadingSpinner } from '@apollo/space-kit/Loaders/LoadingSpinner';
import styled from '@emotion/styled';
import type { ReactNode } from 'react';

type QueryResultProps = {
  children?: ReactNode;
  data?: unknown;
  error?: Error | null;
  loading?: boolean;
};

export function QueryResult({
  loading,
  error,
  data,
  children,
}: QueryResultProps) {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }

  if (loading) {
    return (
      <SpinnerContainer>
        <LoadingSpinner data-testid="spinner" size="large" theme="grayscale" />
      </SpinnerContainer>
    );
  }

  if (!data) {
    return <p>Nothing to show...</p>;
  }

  return <>{children}</>;
}

const SpinnerContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
});
