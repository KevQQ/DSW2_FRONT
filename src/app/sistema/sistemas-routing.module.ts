import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SistemaComponent } from './pages/sistema/sistema.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "sistema",
        component: SistemaComponent
      },
      {
        path: "**",
        redirectTo: "sistema"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemasRoutingModule { }
