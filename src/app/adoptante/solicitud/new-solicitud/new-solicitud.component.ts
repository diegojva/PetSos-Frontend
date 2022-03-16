import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/admin/pets/shared/pet.model';
import { PetService } from 'src/app/admin/pets/shared/pet.service';
import Swal from 'sweetalert2';
import { Solicitud } from '../shared/solicitud.model';
import { SolicitudesService } from '../shared/solicitudes.service';

@Component({
  selector: 'app-new-solicitud',
  templateUrl: './new-solicitud.component.html',
  styleUrls: ['./new-solicitud.component.css'],
})
export class NewSolicitudComponent implements OnInit {
  public idMascota: number;
  public pet: Pet;

  constructor(
    private solicitudService: SolicitudesService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private petService: PetService,
  ) {
    this.getMascotaSeleccionada();
  }

  ngOnInit(): void {
  
  }

  registrarSolicitud(solicitud: Solicitud) {
    solicitud.mascota = this.pet;
    this.solicitudService.create(solicitud).subscribe(
      () => {
        Swal.fire('Solicitud enviada con éxito.')
        this.router.navigate(['/adoptante/solicitudes']);
      },
      (error: any) => {
        Swal.fire('Se ha producido un error al enviar tu solicitud. Estamos revisando lo sucedido.')
      }
    );
  }

  getMascotaSeleccionada(){
    this.activeRoute.paramMap.subscribe((paramMap) => {
      this.idMascota = Number(paramMap.get('id'));
      this.petService.get(this.idMascota).subscribe((data: any) => {
        this.pet = data?.body;
      });
    });
  }

}
