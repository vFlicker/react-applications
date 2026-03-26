import { TrackAPI } from './datasources/track-api.js';

export type DataSourceContext = {
  dataSources: {
    trackAPI: TrackAPI;
  };
};
