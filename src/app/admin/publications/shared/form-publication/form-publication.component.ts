import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Publication } from '../publication.model';
import { PublicationService } from '../publication.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EtiquetaService } from '../etiqueta.service';
import { Tag } from '../tag.model';


@Component({
  selector: 'app-form-publication',
  templateUrl: './form-publication.component.html',
  styleUrls: ['./form-publication.component.css']
})
export class FormPublicationComponent implements OnInit {

  tags : Tag[];

  @Input() set publication (p:Publication){

    this.form.patchValue(p);
  }
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(private publicationService: PublicationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private etiquetasService: EtiquetaService
    ) { }

  ngOnInit(): void {
    this.listarEtiquetas();
  }

  listarEtiquetas() {
    this.etiquetasService.getTags().subscribe((data: any) => {
     // console.log(data['body']);
      this.tags = data;
    });
  }   

  form = this.formBuilder.group({
    owner:[
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(100),
      ],
    ],
    title: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(150)]],
    description: ['', [Validators.required, Validators.minLength(30)]],
    img: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(500)]],
    status: ['', [Validators.required]],
    tags:[null]
  });

  save() {
    this.onSubmit.emit(this.form.value);
  }
}
