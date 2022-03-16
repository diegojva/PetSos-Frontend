import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Solicitud } from '../shared/solicitud.model';
import { SolicitudesService } from '../shared/solicitudes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitud-list',
  templateUrl: './solicitud-list.component.html',
  styleUrls: ['./solicitud-list.component.css']
})
export class SolicitudListComponent implements OnInit {

  displayedColumns: string[] = ['idSolicitud', 'fechaCreacion', 'nombre', 'dni', 'mascota','foto','estado','acciones'];
  dataSourceSolicitudes: MatTableDataSource<Solicitud>;
  constructor(private solicitudService:SolicitudesService) { }

  ngOnInit(): void {
    this.getSolicitudesAdopciones();
  }

  getSolicitudesAdopciones(){
    this.solicitudService.getSolicitudes().subscribe((data:any)=>{
      this.dataSourceSolicitudes = new MatTableDataSource(data['body']);
    })
  }

  applyFilter(value: string) {
    this.dataSourceSolicitudes.filter = value.trim().toLowerCase();
  }

  eliminar(id:number){
    /*const ok = confirm('¿Estás seguro qué deseas eliminar la mascota?');*/
    Swal.fire({
      title: '¿Estás seguro qué deseas eliminar la solicitud?',
      text: "La acción no se puede revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.solicitudService.delete(id).subscribe(()=>{
          this.getSolicitudesAdopciones();
        })
        Swal.fire(
          'Eliminado!',
          'Eliminaste la solicitud.',
          'success'
        )
      }
    })
    /*if(ok){
      this.solicitudService.delete(id).subscribe(()=>{
        this.getSolicitudesAdopciones();
      })
    }*/
  }

}
