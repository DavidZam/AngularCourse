import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-target',
  templateUrl: './heroe-target.component.html',
  styleUrls: ['./heroe-target.component.css']
})
export class HeroeTargetComponent implements OnInit {

  @Input () heroe: any = { };
  @Input () idHeroe: number;

  @Output() selectHeroe: EventEmitter<number>;

  constructor(private router: Router) {
    this.selectHeroe = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe() {
    this.router.navigate( ['/heroe', this.idHeroe] );
    // this.selectHeroe.emit( this.idHeroe );
  }

}
