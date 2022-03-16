import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Report } from './report.model';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiBase:string = environment.apiBase;
  constructor(private http: HttpClient) { }

  getAllPets(){
    return this.http.get<Report[]>(`${this.apiBase}/reportes`);
  }
  get(id: number) {
    return this.http.get(`${this.apiBase}/reportes/${id}`);
  }

  create(reporte: Report) {
    return this.http.post(`${this.apiBase}/reportes`, reporte);
  }

  update(reporte: Report) {
    return this.http.put(`${this.apiBase}/reportes`, reporte);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/reportes/${id}`);
  }
}
