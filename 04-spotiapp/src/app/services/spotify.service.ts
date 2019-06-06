import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery(query: string) {
      const url = `https://api.spotify.com/v1/${ query }`;

      const headers = new HttpHeaders({
        Authorization: 'Bearer BQCF_L9ttE6QhgMUtq8TQpUXRT_QyPs-f3PtsToftrv_KnIw-O7uGe8CFdoMA5q7SE3eVIDTuxjcbfgHAMA'
      });

      return this.http.get(url, { headers });
  }

   getNewReleases() {
      return this.getQuery('browse/new-releases?limit=20')
                  .pipe( map( (data: any) => data.albums.items));
   }

   getArtista(termino: string) {
      return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                  .pipe( map( (data: any) => data.artists.items));
   }
}
