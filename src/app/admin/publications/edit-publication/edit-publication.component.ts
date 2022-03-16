import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtiquetaService } from '../shared/etiqueta.service';
import { Publication } from '../shared/publication.model';
import { PublicationService } from '../shared/publication.service';
import { Tag } from '../shared/tag.model';

@Component({
  selector: 'app-edit-publication',
  templateUrl: './edit-publication.component.html',
  styleUrls: ['./edit-publication.component.css']
})
export class EditPublicationComponent implements OnInit {

  private idPublicacion:number;
  private idEtiquetas:number;
  public publication:Publication;
  public tag:Tag;

  constructor(public publicacionService: PublicationService,
    private router:Router, public activeRoute:ActivatedRoute, public tagService:EtiquetaService) {
      this.activeRoute.paramMap.subscribe(paramMap =>{
        this.idPublicacion = Number(paramMap.get('id'));
        this.publicacionService.get(this.idPublicacion).subscribe((data:any)=>{
          this.publication=data;
        });
     })
     this.getTagsSeleccionados();
     }

  ngOnInit(): void {
  }

  updatePublicacion(publicacion:Publication){
    publicacion.idPublicacion = this.idPublicacion;
    this.publicacionService.update(publicacion).subscribe(()=>{
      //console.log(publicacion);
      this.router.navigate(['admin/publicaciones']);
    }, (error: any) => {
      
    })
  }

  getTagsSeleccionados(){
    this.activeRoute.paramMap.subscribe((paramMap) => {
      this.idPublicacion = Number(paramMap.get('id'));
      this.publicacionService.get(this.idPublicacion).subscribe((data: any) => {
        this.tag = data.tags;
      });
    });
  }

}
