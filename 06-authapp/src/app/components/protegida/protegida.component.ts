import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {

  profile: any;

  constructor(private authServ: AuthService) { }

  ngOnInit() {
    if (this.authServ.userProfile) {
      this.profile = this.authServ.userProfile;
      console.log(this.profile);
    } else {
      this.authServ.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile);
      });
    }

  }

}
