import { Resolvers } from './types/graphql.generated.js';

export const resolvers: Resolvers = {
  Query: {
    tracksForHome: (_parent, _args, { dataSources }, _info) => {
      return dataSources.trackAPI.getTracksForHome();
    },

    track: (_parent, { id }, { dataSources }, _info) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },

  Track: {
    modules: ({ id }, _args, { dataSources }, _info) => {
      return dataSources.trackAPI.getTrackModules(id);
    },

    author: ({ authorId }, _args, { dataSources }, _info) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};
