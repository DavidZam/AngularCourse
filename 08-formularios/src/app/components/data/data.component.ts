import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Usuario } from '../../models/usuario';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  form: FormGroup;

  usuario: Usuario = {
    nombreCompleto: {
      nombre: 'David',
      apellido: 'Zamora'
    },
    correo: 'davidzamorarey@gmail.com',
    pasatiempos: [''],
    username: '',
    password: '',
    password2: ''
  };

  constructor() {
    console.log(this.usuario);

    this.form = new FormGroup({

      nombreCompleto: new FormGroup({
        nombre: new FormControl('' , [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl('', [
          Validators.required,
          this.noZamora
        ]),
      }),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]),
      pasatiempos: new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      username: new FormControl('', Validators.required, this.userExists),
      password1: new FormControl('', Validators.required),
      password2: new FormControl()
    });

    this.form.controls.password2.setValidators([
      Validators.required,
      this.notEqual.bind( this.form )
    ]);

    this.form.controls.username.valueChanges
      .subscribe( data => {
        console.log(data);
    });

    this.form.controls.username.statusChanges
      .subscribe( data => {
        console.log(data);
    });
  }

  addPasatiempo() {
    (this.form.controls.pasatiempos as FormArray).push(
      new FormControl('', Validators.required)
    );
  }

  noZamora( control: FormControl ): { [s: string]: boolean } {
    if (control.value === 'zamora') {
      return {
        nozamora: true
      };
    }

    return null;
  }

  notEqual( control: FormControl ): any {
    const localForm: any = this;
    if (control.value !== localForm.controls.password1.value) {
      return {
        notEqual: true
      };
    }

    return null;
  }

  userExists( control: FormControl): Promise<any> | Observable<any> {

    const promise = new Promise(
      (resolve, reject ) => {

        setTimeout( () => {
          if (control.value === 'loncha') {
            resolve({ existe: true });
          } else {
            resolve( null );
          }
        }, 3000);
      }
    );

    return promise;
  }

  saveChanges() {
    console.log(this.form.value);
    console.log(this.form);

    // this.form.reset({
    //   nombreCompleto: {
    //         nombre: '',
    //         apellido: ''
    //       },
    //       correo: ''
    // });
  }

}
