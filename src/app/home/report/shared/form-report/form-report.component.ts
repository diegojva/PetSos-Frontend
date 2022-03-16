import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Report } from '../report.model';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-form-report',
  templateUrl: './form-report.component.html',
  styleUrls: ['./form-report.component.css']
})
export class FormReportComponent implements OnInit {

  @Input() set pet (r:Report){

    this.form.patchValue(r);
  }
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private reportService: ReportService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  form = this.formBuilder.group({
    nombre:[
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
      ],
    ],
    apellido: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(150), Validators.email]],
    telefono: ['', [Validators.required,Validators.minLength(9),Validators.maxLength(9)]],
    direccion: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(150)]],
    observacion: ['', [Validators.required,Validators.minLength(20),Validators.maxLength(200)]],
    img: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(500)]]
  });

  save() {
    this.onSubmit.emit(this.form.value);
  }

}
