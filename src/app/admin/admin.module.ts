import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NewPetComponent } from './pets/new-pet/new-pet.component';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { EditPetComponent } from './pets/edit-pet/edit-pet.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormPetComponent } from './pets/shared/form-pet/form-pet.component';
import {MatSelectModule} from '@angular/material/select';
import { SolicitudesAdopcionComponent } from './pets/solicitudes-adopcion/solicitudes-adopcion.component';
import { EditSolicitudAdopcionComponent } from './pets/edit-solicitud-adopcion/edit-solicitud-adopcion.component';
import { FormSolicitudComponent } from '../adoptante/solicitud/shared/form-solicitud/form-solicitud.component';
import { NewSolicitudComponent } from '../adoptante/solicitud/new-solicitud/new-solicitud.component';
import { PublicationListComponent } from './publications/publication-list/publication-list.component';
import { FormPublicationComponent } from './publications/shared/form-publication/form-publication.component';
import { EditPublicationComponent } from './publications/edit-publication/edit-publication.component';
import { NewPublicationComponent } from './publications/new-publication/new-publication.component';
import { SearchPipe } from './publications/shared/search.pipe';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { FormTagComponent } from './publications/etiquetas/form-tag/form-tag.component';
import { EditReportComponent } from './reportes/edit-report/edit-report.component';
import { ReportListComponent } from './reportes/report-list/report-list.component';


@NgModule({
  declarations: [
    NewPetComponent,
    PetListComponent,
    EditPetComponent,
    LayoutComponent,
    FormPetComponent,
    SolicitudesAdopcionComponent,
    PublicationListComponent,
    FormPublicationComponent,
    EditPublicationComponent,
    NewPublicationComponent,
    SearchPipe,
    FormTagComponent,
    EditReportComponent,
    ReportListComponent,

  ],
  imports: [
    CommonModule, 
    AdminRoutingModule, 
    MaterialModule, 
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatChipsModule,
    
  ]
})
export class AdminModule { }
