import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Report } from 'src/app/home/report/shared/report.model';
import { ReportService } from 'src/app/home/report/shared/report.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  displayedColumns: string[] = ['idReporte', 'nombre', 'apellido', 'direccion', 'observaciones','correo','acciones'];
  dataSource: MatTableDataSource<Report>;

  constructor(private reportService:ReportService) { }

  ngOnInit(): void {
    this.getAllReports();
  }

  getAllReports(){
    this.reportService.getAllPets().subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource(data);
    })
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  /*eliminar(id:number){
    const ok = confirm('¿Estás seguro qué deseas eliminar la mascota?');
    if(ok){
      this.petService.delete(id).subscribe(()=>{
        this.getAllMascotas();
      })
    }
  }*/

  eliminar(id:number){
    Swal.fire({
      title: '¿Estás seguro qué deseas eliminar el reporte?',
      text: "La acción no se puede revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.reportService.delete(id).subscribe(()=>{
          this.getAllReports();
          Swal.fire(
            'Eliminado!',
            'Eliminaste el reporte.',
            'success'
          )
        },(erro: any) =>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Opss.. No se puede elimnar este reporte.',
          })
        })
      }
    })
  }

}
