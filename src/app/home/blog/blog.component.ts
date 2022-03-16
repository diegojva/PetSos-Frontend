import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/admin/publications/shared/publication.model';
import { PublicationService } from 'src/app/admin/publications/shared/publication.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  datos:any =[]
  
  constructor(private publicationService:PublicationService) { }

  ngOnInit(): void {
    this.publicationService.getAllLatestPublications().subscribe((data:any)=>{
      this.datos=(data['body']);
    });
  }

}
