import { Component, Input } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  @Input() isSearchParent: boolean;
  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {  }

  buscar(termino: string) {
    console.log(termino);
    this.loading = true;
    this.spotify.getArtists(termino)
        .subscribe( (data: any) => {
            console.log(data);
            this.loading = false;
            this.artists = data.filter(elem => elem.images.length > 0);
        });
  }

}
