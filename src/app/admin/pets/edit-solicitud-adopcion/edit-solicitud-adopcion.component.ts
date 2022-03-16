import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Solicitud } from 'src/app/adoptante/solicitud/shared/solicitud.model';
import { SolicitudesService } from 'src/app/adoptante/solicitud/shared/solicitudes.service';
import { Pet } from '../shared/pet.model';
import { PetService } from '../shared/pet.service';

@Component({
  selector: 'app-edit-solicitud-adopcion',
  templateUrl: './edit-solicitud-adopcion.component.html',
  styleUrls: ['./edit-solicitud-adopcion.component.css']
})
export class EditSolicitudAdopcionComponent implements OnInit {

  @Input() set solicitud (p:Solicitud){
    this.form.patchValue(p);
  }
   idSolicitud:number;
   idMascota: number;
   public pet: Pet;

  constructor(
    private solicitudService: SolicitudesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
    ) {
      this.activeRoute.paramMap.subscribe(paramMap =>{
        this.idSolicitud = Number(paramMap.get('id'));
        this.solicitudService.get(this.idSolicitud).subscribe((data:any)=>{
          this.solicitud=data?.body;
        });
     })
     this.getMascotaSeleccionada();
     }
  ngOnInit(): void {
  }

  form = this.formBuilder.group({
    nombre:[
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(250),
      ],
    ],
    apellido: ['', [Validators.required,Validators.minLength(6),]],
    direccion: ['', [Validators.required,Validators.min(5)]],
    ciudad: ['', [Validators.required,Validators.minLength(3)]],
    dni: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
    telefono: ['', [Validators.required,Validators.minLength(9),Validators.maxLength(9)]],
    correo: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(80)]],
    detalleSolicitud: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(250)]],
    estado:['',Validators.required]
  });

  save(form: Solicitud) {
    form.idSolicitud = this.idSolicitud;
    form.mascota = this.pet;
    this.solicitudService.update(form).subscribe(()=>{
      this.router.navigate(['/admin/solicitudes']);
    }, (error: any) => {
      
    })
  }
  getMascotaSeleccionada(){
    this.activeRoute.paramMap.subscribe((paramMap) => {
      this.idMascota = Number(paramMap.get('id'));
      this.solicitudService.get(this.idMascota).subscribe((data: any) => {
        this.pet = data?.body.mascota;
      });
    });
  }
}
