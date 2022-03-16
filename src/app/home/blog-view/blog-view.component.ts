import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Publication } from 'src/app/admin/publications/shared/publication.model';
import { PublicationService } from 'src/app/admin/publications/shared/publication.service';

declare var myExtObject: any;
declare var webGlObject: any;
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  idPublicacion :number;
  datos:any =[]

  constructor( private publicationService: PublicationService, private activeRoute: ActivatedRoute,) {
    this.activeRoute.paramMap.subscribe(paramMap =>{
      this.idPublicacion = Number(paramMap.get('id'));
      this.publicationService.get(this.idPublicacion).subscribe((data:any)=>{
        this.datos=data;
      });
   })
   }

   
  ngOnInit(): void {
  }


}
