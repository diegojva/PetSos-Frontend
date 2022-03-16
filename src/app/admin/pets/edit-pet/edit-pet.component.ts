import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pet } from '../shared/pet.model';
import { PetService } from '../shared/pet.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {

  private idMascota:number;
  public pet:Pet;

  constructor(public petService: PetService,
    private router:Router, public activeRoute:ActivatedRoute) {
      this.activeRoute.paramMap.subscribe(paramMap =>{
        this.idMascota = Number(paramMap.get('id'));
        this.petService.get(this.idMascota).subscribe((data:any)=>{
          this.pet=data?.body;
        });
     })
    }

  ngOnInit(): void {}

  updateMascota(pet:Pet){
    pet.idMascota = this.idMascota;
    this.petService.update(pet).subscribe(()=>{
      this.router.navigate(['admin/mascotas']);
    }, (error: any) => {
      
    })
  }

}
