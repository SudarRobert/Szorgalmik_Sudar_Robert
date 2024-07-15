import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelsinkiTablazatosComponent } from './helsinki-tablazatos/helsinki-tablazatos.component';

const routes: Routes = [
{path: "helsinki", component: HelsinkiTablazatosComponent},
{path: "", redirectTo:"/helsinki", pathMatch:"full"},
{path: "**", component:HelsinkiTablazatosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
