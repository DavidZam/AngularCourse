import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
   }

   getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQByTZFJ2KRZ641HYXahGd42ANj1MOItBxP8Y2I4TwymalYsv_HcgeFQsXzcFPXq2Jc3yBX95c63_Xdn-Hk'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
   }
}
