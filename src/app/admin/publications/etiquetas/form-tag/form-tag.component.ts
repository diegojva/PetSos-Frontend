import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EtiquetaService } from '../../shared/etiqueta.service';
import { Tag } from '../../shared/tag.model';

@Component({
  selector: 'app-form-tag',
  templateUrl: './form-tag.component.html',
  styleUrls: ['./form-tag.component.css']
})
export class FormTagComponent implements OnInit {

  tags : Tag[];

  @Input() set etiqueta (p:Tag){

    this.form.patchValue(p);
  }
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private etiquetaService: EtiquetaService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  form = this.formBuilder.group({
    name:[
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ],
    ]
  });

  save(form: Tag) {
    this.etiquetaService.create(form).subscribe(()=>{
      this.router.navigate(['/admin/publicaciones']);
    }, (error: any) => {
      
    })
  }

}
