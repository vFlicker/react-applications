import { afterEach, describe, it } from 'vitest';

import { ModuleDetail } from '~/components/module-detail';
import type { Module, Track } from '~/types/content';
import { cleanup, renderWithRouter } from '~/utils/test-utils';

const mockModule: Module = {
  id: 'l_1',
  title: 'The Night Sky',
  content:
    '# Et tempus voces tigride remisso fer coimus\n\n## Montibus arbusta detrectas haud\n\n',
  thumbnail:
    'https://res.cloudinary.com/apollographql/image/upload/v1730818804/odyssey/lift-off-api/nebula_cat_djkt9r_nzifdj.jpg',
  videoUrl: 'https://youtu.be/dlKzlksOUtU',
  topic: 'Cat-stronomy',
  length: 164,
};

const mockParentTrack: Track = {
  id: 'c_0',
  title: 'Cat-stronomy, an introduction',
  description: '# Pulchra vehi vidit misera sola armenta secabatur\n\n',
  thumbnail:
    'https://res.cloudinary.com/apollographql/image/upload/v1730818804/odyssey/lift-off-api/nebula_cat_djkt9r_nzifdj.jpg',
  length: 2377,
  modulesCount: 10,
  numberOfViews: 51,
  author: {
    name: 'Henri, le Chat Noir',
    photo:
      'https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzA0OH0',
  },
  modules: [
    {
      id: 'l_0',
      title: 'Exploring Time and Space',
      length: 258,
    },
  ],
};

describe('Module Detail View', () => {
  afterEach(cleanup);

  it('renders without error', () => {
    renderWithRouter(
      <ModuleDetail module={mockModule} track={mockParentTrack} />,
    );
  });
});
