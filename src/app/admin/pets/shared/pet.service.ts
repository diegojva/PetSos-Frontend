import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pet } from './pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private apiBase:string = environment.apiBase;
  constructor(private http: HttpClient) { }

  getAllPets(){
    return this.http.get<Pet[]>(`${this.apiBase}/mascotas`);
  }
  get(id: number) {
    return this.http.get(`${this.apiBase}/mascotas/${id}`);
  }

  create(pet: Pet) {
    return this.http.post(`${this.apiBase}/mascotas`, pet);
  }

  update(pet: Pet) {
    return this.http.put(`${this.apiBase}/mascotas`, pet);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/mascotas/${id}`);
  }

  getLastPets(){
    return this.http.get<Pet[]>(`${this.apiBase}/mascotas/latest-pets`);
  }
}
