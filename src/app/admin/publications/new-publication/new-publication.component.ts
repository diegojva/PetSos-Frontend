import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../shared/publication.service';
import { Router } from '@angular/router';
import { Publication } from '../shared/publication.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-new-publication',
  templateUrl: './new-publication.component.html',
  styleUrls: ['./new-publication.component.css']
})
export class NewPublicationComponent implements OnInit {

  constructor(private publicacionService:PublicationService,private router: Router) { }

  ngOnInit(): void {
  }

  crearPublicacion(publicacion: Publication) {
    this.publicacionService.create(publicacion).subscribe(
      () => {
        this.router.navigate(['admin/publicaciones']);
      },
      (error: any) => {}
    );
  }

}
