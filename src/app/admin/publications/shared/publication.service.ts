import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Publication } from './publication.model';

@Injectable({
  providedIn: 'root',
})

export class PublicationService {
  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  getAllPublications() {
    return this.http.get<Publication[]>(`${this.apiBase}/publicaciones`);
  }

  getAllLatestPublications() {
    return this.http.get<Publication[]>(`${this.apiBase}/publicaciones/latest-publications`);
  }

  get(id: number) {
    return this.http.get(`${this.apiBase}/publicaciones/${id}`);
  }

  create(publication: Publication) {
    return this.http.post(`${this.apiBase}/publicaciones`, publication);
  }

  update(publication: Publication) {
    return this.http.put(`${this.apiBase}/publicaciones`, publication);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/publicaciones/${id}`);
  }

}
