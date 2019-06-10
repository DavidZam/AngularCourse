import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
      const url = `https://api.spotify.com/v1/${ query }`;

      const headers = new HttpHeaders({
        Authorization: 'Bearer BQB4yGxgZC_93K2ePIRGqaclKYLVemCd_RpK9O57KyWPnOqbBCHw4LxezTI6mmvRiVnM8xIMIFZ77cOOGI8'
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
                .pipe( map( (data: any) => data.tracks));
   }

}
