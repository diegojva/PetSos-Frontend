import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,ValidatorFn,AbstractControl} from '@angular/forms';
import { Pet } from 'src/app/admin/pets/shared/pet.model';
import { PetService } from 'src/app/admin/pets/shared/pet.service';
import { NewSolicitudComponent } from '../../new-solicitud/new-solicitud.component';
import { Solicitud } from '../solicitud.model';
import {MatDialog} from '@angular/material/dialog';
import { TerminosycondicionesComponent } from '../terminosycondiciones/terminosycondiciones.component';


@Component({
  selector: 'app-form-solicitud',
  templateUrl: './form-solicitud.component.html',
  styleUrls: ['./form-solicitud.component.css']
})
export class FormSolicitudComponent implements OnInit {

  @Input() solicitud: Solicitud = new Solicitud();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  public pet  = new Pet();

  constructor(
    private formBuilder: FormBuilder,
    private mascota:PetService,
    public compMascota: NewSolicitudComponent,
    public dialog: MatDialog
  ) {
    this.mascota.get(this.compMascota.idMascota).subscribe((data:any)=>{
      this.pet=data?.body;
    });
  }

  ngOnInit(): void {
  }

  form = this.formBuilder.group({
    nombre:[
      this.solicitud.nombre,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(250),
      ],
    ],
    apellido: [this.solicitud.apellido, [Validators.required,Validators.minLength(11),]],
    direccion: [this.solicitud.direccion, [Validators.required,Validators.min(5)]],
    ciudad: [this.solicitud.ciudad, [Validators.required,Validators.minLength(3)]],
    dni: [this.solicitud.dni, [Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
    telefono: [this.solicitud.telefono, [Validators.required,Validators.minLength(9),Validators.maxLength(9)]],
    correo: [this.solicitud.correo, [Validators.required,Validators.minLength(6),Validators.maxLength(80),Validators.email]],
    detalleSolicitud: [this.solicitud.detalleSolicitud, [Validators.required,Validators.minLength(10),Validators.maxLength(250)]],
    termos: [null, Validators.requiredTrue],
  });

  save() {
    this.onSubmit.emit(this.form.value);
  }

  //TERMINOS Y CONDICIONES
  openDialog() {
    const dialogRef = this.dialog.open(TerminosycondicionesComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
