import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tag } from './tag.model';

@Injectable({
  providedIn: 'root',
})

export class EtiquetaService {
  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  getTags() {
    return this.http.get<Tag[]>(`${this.apiBase}/etiquetas`);
  }

  create(tag: Tag) {
    return this.http.post(`${this.apiBase}/etiquetas`, tag);
  }

  update(tag: Tag) {
    return this.http.put(`${this.apiBase}/etiquetas`, tag);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/etiquetas/${id}`);
  }

  get(id: number) {
    return this.http.get(`${this.apiBase}/etiquetas/${id}`);
  }

}
