import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemasRoutingModule } from './sistemas-routing.module';
import { SistemaComponent } from './pages/sistema/sistema.component';



@NgModule({
  declarations: [
    SistemaComponent
  ],
  imports: [
    CommonModule,
    SistemasRoutingModule
  ],
  exports: [
    SistemaComponent
  ]
})
export class SistemaModule { }
