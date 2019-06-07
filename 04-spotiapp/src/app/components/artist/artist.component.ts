import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService,
              private location: Location) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getArtist(params['id']);
      this.getArtistTopTracks(params['id']);
    });
  }

  getArtist(id: string) {
    this.loading = true;
    this.spotify.getArtist(id)
                .subscribe( artist => {
                  console.log(artist);
                  this.artist = artist;
                  this.loading = false;
                });
  }

  getArtistTopTracks(id: string) {
    this.spotify.getArtistTopTracks(id)
                .subscribe( topTracks => {
                  console.log(topTracks);
                  this.topTracks = topTracks;
                });
  }

  back() {
    this.location.back();
  }

}
