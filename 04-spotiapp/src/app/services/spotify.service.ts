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
        Authorization: 'Bearer BQAt5i9-iKUvw98Po-JYLC7GipU4JYL5s3cPMJlf_-hF7XDKpaZAkTcUUQMd21nDZorwgZkzoKLHp3cfqJg'
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
