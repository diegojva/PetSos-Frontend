import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { EditPetComponent } from './pets/edit-pet/edit-pet.component';
import { EditSolicitudAdopcionComponent } from './pets/edit-solicitud-adopcion/edit-solicitud-adopcion.component';
import { NewPetComponent } from './pets/new-pet/new-pet.component';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { SolicitudesAdopcionComponent } from './pets/solicitudes-adopcion/solicitudes-adopcion.component';
import { EditPublicationComponent } from './publications/edit-publication/edit-publication.component';
import { FormTagComponent } from './publications/etiquetas/form-tag/form-tag.component';
import { NewPublicationComponent } from './publications/new-publication/new-publication.component';
import { PublicationListComponent } from './publications/publication-list/publication-list.component';
import { EditReportComponent } from './reportes/edit-report/edit-report.component';
import { ReportListComponent } from './reportes/report-list/report-list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'mascotas',
        component: PetListComponent,
      },
      {
        path: 'mascota/new',
        component: NewPetComponent,
      },
      {
        path: 'mascotas/:id/edit',
        component: EditPetComponent,
      },
      {
        path: 'solicitudes',
        component: SolicitudesAdopcionComponent,
      },
      {
        path: 'solicitudes/:id/edit',
        component: EditSolicitudAdopcionComponent,
      },
      {
        path: 'publicaciones',
        component: PublicationListComponent,
      },
      {
        path: 'publicacion/new',
        component: NewPublicationComponent,
      },
      {
        path: 'publicaciones/:id/edit',
        component: EditPublicationComponent,
      },
      {
        path: 'etiqueta/new',
        component: FormTagComponent,
      },
      {
        path: 'reportes',
        component: ReportListComponent,
      },
      {
        path: 'reportes/:id/edit',
        component: EditReportComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
