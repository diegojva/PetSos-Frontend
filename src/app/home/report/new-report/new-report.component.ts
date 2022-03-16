import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from '../shared/report.model';
import { ReportService } from '../shared/report.service';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent implements OnInit {

  constructor(public reportService: ReportService, private router: Router) { }

  ngOnInit(): void {
  }
  crearReporte(report: Report) {
    this.reportService.create(report).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error: any) => {}
    );
  }

}
