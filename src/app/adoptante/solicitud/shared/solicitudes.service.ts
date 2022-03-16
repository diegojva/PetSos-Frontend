import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Solicitud } from './solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  private apiBase:string = environment.apiBase;

  constructor(private http: HttpClient) { }
  create(solicitud: Solicitud) {
    return this.http.post(`${this.apiBase}/solicitud-adopcion`, solicitud);
  }

  getSolicitudes(){
    return this.http.get<Solicitud[]>(`${this.apiBase}/solicitud-adopcion`);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/solicitud-adopcion/${id}`);
  }
  get(id: number) {
    return this.http.get(`${this.apiBase}/solicitud-adopcion/${id}`);
  }
  update(solicitud: Solicitud) {
    return this.http.put(`${this.apiBase}/solicitud-adopcion`, solicitud);
  }

  
}
