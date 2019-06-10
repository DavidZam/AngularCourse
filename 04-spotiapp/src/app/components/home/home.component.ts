import { Component, Input } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  @Input() isHomeParent: boolean;
  newSongs: any[] = [];
  loading: boolean;
  error = false;
  errorMsg: string;

  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
        .subscribe((data: any) => {
          this.newSongs = data;
          this.loading = false;
        }, (serviceError) => {
          this.loading = false;
          this.error = true;
          console.log(serviceError);
          this.errorMsg = serviceError.error.error.message;
        });
  }

}
