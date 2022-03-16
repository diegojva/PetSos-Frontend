import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

import { AdoptanteRoutingModule } from './adoptante-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NewSolicitudComponent } from './solicitud/new-solicitud/new-solicitud.component';
import { SolicitudListComponent } from './solicitud/solicitud-list/solicitud-list.component';
import { FormSolicitudComponent } from './solicitud/shared/form-solicitud/form-solicitud.component';
import {MatChipsModule} from '@angular/material/chips';
import { EditSolicitudAdopcionComponent } from '../admin/pets/edit-solicitud-adopcion/edit-solicitud-adopcion.component';
import { TerminosycondicionesComponent } from './solicitud/shared/terminosycondiciones/terminosycondiciones.component';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [
    LayoutComponent,
    NewSolicitudComponent,
    SolicitudListComponent,
    FormSolicitudComponent,
    EditSolicitudAdopcionComponent,
    TerminosycondicionesComponent
  ],
  imports: [
    CommonModule,
    AdoptanteRoutingModule,
    CommonModule, 
    MaterialModule, 
    ReactiveFormsModule,
    MatSelectModule,
    MatChipsModule,
    MatCheckboxModule

  ]
})
export class AdoptanteModule { }
