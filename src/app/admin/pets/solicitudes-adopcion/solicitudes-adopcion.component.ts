import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Solicitud } from 'src/app/adoptante/solicitud/shared/solicitud.model';
import { SolicitudesService } from 'src/app/adoptante/solicitud/shared/solicitudes.service';

@Component({
  selector: 'app-solicitudes-adopcion',
  templateUrl: './solicitudes-adopcion.component.html',
  styleUrls: ['./solicitudes-adopcion.component.css']
})
export class SolicitudesAdopcionComponent implements OnInit {

  displayedColumns: string[] = ['idSolicitud', 'fechaCreacion', 'nombre', 'dni', 'detalleSolicitud','mascota','foto','estado','acciones'];
  dataSourceSolicitudAdopcion: MatTableDataSource<Solicitud>;
  constructor(private solicitudService:SolicitudesService) { }

  ngOnInit(): void {
    this.getSolicitudesAdopciones();
  }

  getSolicitudesAdopciones(){
    this.solicitudService.getSolicitudes().subscribe((data:any)=>{
      this.dataSourceSolicitudAdopcion = new MatTableDataSource(data['body']);
    })
  }

  applyFilter(value: string) {
    this.dataSourceSolicitudAdopcion.filter = value.trim().toLowerCase();
  }

  eliminar(id:number){
    const ok = confirm('¿Estás seguro qué deseas eliminar la mascota?');
    if(ok){
      this.solicitudService.delete(id).subscribe(()=>{
        this.getSolicitudesAdopciones();
      })
    }
  }

}
