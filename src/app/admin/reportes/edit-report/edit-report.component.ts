import { Component, OnInit,Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Report } from 'src/app/home/report/shared/report.model';
import { ReportService } from 'src/app/home/report/shared/report.service';

@Component({
  selector: 'app-edit-report',
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.css']
})
export class EditReportComponent implements OnInit {

  @Input() set r (r:Report){
    this.form.patchValue(r);
  }
   idReporte:number;
   //public reporte: Report;

  constructor(
    private reportService: ReportService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
    ) {
      this.activeRoute.paramMap.subscribe(paramMap =>{
        this.idReporte = Number(paramMap.get('id'));
        this.reportService.get(this.idReporte).subscribe((data:any)=>{
          this.r=data;
        });
     })
     }
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

  save(form: Report) {
    form.idReport = this.idReporte;
    this.reportService.update(form).subscribe(()=>{
      this.router.navigate(['/admin/reportes']);
    }, (error: any) => {
      
    })
  }

}
