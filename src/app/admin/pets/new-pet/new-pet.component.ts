import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Pet } from '../shared/pet.model';
import { PetService } from '../shared/pet.service';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {

  constructor(private petService:PetService,private router: Router) { }

  ngOnInit(): void {
  }
  crearMascota(pet: Pet) {
    this.petService.create(pet).subscribe(
      () => {
        this.Toast.fire({
          icon: 'success',
          title: 'Registrado con éxito.'
        })
        this.router.navigate(['admin/mascotas']);
      },
      (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo sucedió mal!'
        })
      }
    );
  }

   Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
}
