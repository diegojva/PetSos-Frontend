import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { EtiquetaService } from '../shared/etiqueta.service';
import { PublicationService } from '../shared/publication.service';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})

export class PublicationListComponent implements OnInit {

  //displayedColumns: string[] = ['idPublicacion', 'owner','title','description','fechaPublicacion', 'horaPublicacion', 'acciones'];
  //dataSource: MatTableDataSource<Publication>;
  datos:any =[]
  tags: any[]
  filterPost = '';

  constructor(private publicationService: PublicationService, private etiquetasService: EtiquetaService) { }

  ngOnInit(): void {
    this.getAllPublicationsLatest();
    this.listarEtiquetas();
  }

  getAllPublicationsLatest() {
    this.publicationService.getAllLatestPublications().subscribe((data: any) => {
     //this.dataSource = new MatTableDataSource(data['body']);
     this.datos=(data['body']);
    });
  }

  listarEtiquetas() {
    this.etiquetasService.getTags().subscribe((data: any) => {
      this.tags = data;
    });
  }   

  /*applyFilter(value: string) {
    this.datos.filter = value.trim().toLowerCase();
  }*/

  eliminar(id:number){
    const ok = confirm('¿Estás seguro qué deseas eliminar la publicación?');
    if(ok){
      this.publicationService.delete(id).subscribe(()=>{
        this.getAllPublicationsLatest();
      })
    }
  }



}
