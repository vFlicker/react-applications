import { RESTDataSource } from '@apollo/datasource-rest';

import { AuthorModel, ModuleModel, TrackModel } from '#src/models.js';

export class TrackAPI extends RESTDataSource {
  baseURL = 'https://catstronauts-api.up.railway.app/';

  getTracksForHome() {
    return this.get<TrackModel[]>('tracks');
  }

  getTrack(trackId: string) {
    return this.get<TrackModel>(`track/${trackId}`);
  }

  getTrackModules(trackId: string) {
    return this.get<ModuleModel[]>(`track/${trackId}/modules`);
  }

  getAuthor(authorId: string) {
    return this.get<AuthorModel>(`author/${encodeURIComponent(authorId)}`);
  }
}
