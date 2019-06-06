import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  newSongs: any[] = [];
  largeTitle: false;

  constructor(private spotify: SpotifyService) {

    this.spotify.getNewReleases()
        .subscribe((data: any) => {
          this.newSongs = data;
        });
  }

}
