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
        Authorization: 'Bearer BQArWM6sBoyIyJ1vYcF-MlQTSr0maE4U-yTknBCAoZkh_t2qW-4zmOJwb9QC5qloQfOOahPJ4Fp9zunCXnU'
      });

      return this.http.get(url, { headers });
  }

   getNewReleases() {
      return this.getQuery('browse/new-releases?limit=20')
                  .pipe( map( (data: any) => data.albums.items));
   }

   getArtists(termino: string) {
      return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                  .pipe( map( (data: any) => data.artists.items));
   }

   getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
   }

   getArtistTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe( map( (data: any) => data['tracks']));
   }

}
