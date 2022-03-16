import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

import { NewSolicitudComponent } from './solicitud/new-solicitud/new-solicitud.component';
import { FormSolicitudComponent } from './solicitud/shared/form-solicitud/form-solicitud.component';
import { SolicitudListComponent } from './solicitud/solicitud-list/solicitud-list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'solicitud/:id/new',
        component: NewSolicitudComponent,
      },
      {
        path: 'solicitudes',
        component: SolicitudListComponent,
      },
    ],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdoptanteRoutingModule { }
