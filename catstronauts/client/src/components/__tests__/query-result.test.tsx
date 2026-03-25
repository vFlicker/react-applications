import { afterEach, describe, expect, it } from 'vitest';

import { QueryResult } from '~/components/query-result';
import { cleanup, render } from '~/utils/test-utils';

describe('Query Result', () => {
  afterEach(cleanup);

  it('renders loading state', () => {
    const { getByTestId } = render(<QueryResult loading />);

    expect(getByTestId(/spinner/i)).toBeInTheDocument();
  });

  it('renders no data message', () => {
    const { getByText } = render(<QueryResult loading={false} />);

    expect(getByText(/nothing to show/i)).toBeInTheDocument();
  });

  it('renders error state', () => {
    const { getByText } = render(<QueryResult error={new Error('you lose')} />);

    expect(getByText(/you lose/i)).toBeInTheDocument();
  });
});
