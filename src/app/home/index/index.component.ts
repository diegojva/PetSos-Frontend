import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pet } from 'src/app/admin/pets/shared/pet.model';
import { PetService } from 'src/app/admin/pets/shared/pet.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  datos:any =[]

  constructor(private petService:PetService) { }

  ngOnInit(): void {
    //this.getLastMascotas();
    this.petService.getAllPets().subscribe((data:any)=>{
      this.datos=(data);
    });
  }

  getLastMascotas(){
    this.petService.getLastPets().subscribe((data:any)=>{
      this.datos = (data['body']);
    })
  }
}
