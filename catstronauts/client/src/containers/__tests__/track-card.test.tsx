import { afterEach, describe, expect, it } from 'vitest';

import { TrackCard } from '~/containers/track-card';
import { cleanup, renderWithRouter } from '~/utils/test-utils';

const mockTrackCardData = {
  id: 'c_0',
  title: 'Cat-stronomy, an introduction',
  thumbnail:
    'https://res.cloudinary.com/apollographql/image/upload/v1730818804/odyssey/lift-off-api/nebula_cat_djkt9r_nzifdj.jpg',
  length: 2377,
  modulesCount: 10,
  author: {
    id: 'a_0',
    name: 'Henri, le Chat Noir',
    photo:
      'https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzA0OH0',
  },
};

describe('Track Card', () => {
  afterEach(cleanup);

  it('renders track card', () => {
    const { getByText } = renderWithRouter(
      <TrackCard track={mockTrackCardData} />,
    );

    expect(getByText(/cat-stronomy/i)).toBeInTheDocument();
  });
});
