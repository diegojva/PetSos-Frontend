import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pet } from '../shared/pet.model';
import { PetService } from '../shared/pet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  displayedColumns: string[] = ['idMascota', 'nombre', 'edad', 'tamano', 'sexo','descripcion','foto','acciones'];
  dataSource: MatTableDataSource<Pet>;
  constructor(private petService:PetService) { }

  ngOnInit(): void {
    this.getAllMascotas();
  }

  getAllMascotas(){
    this.petService.getAllPets().subscribe((data:any)=>{
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
      title: '¿Estás seguro qué deseas eliminar la mascota?',
      text: "La acción no se puede revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.petService.delete(id).subscribe(()=>{
          this.getAllMascotas();
          Swal.fire(
            'Eliminado!',
            'Eliminaste la mascota.',
            'success'
          )
        },(erro: any) =>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Es posible que la mascota tenga un proceso de adopción pendiente. Revise la lista de adopciones o la consola para ver más detalle, por favor.!',
          })
        })
      }
    })
  }

}
