import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MedLayoutModule} from "./med-layout/med-layout.module";

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./auth/med-auth.module').then((m) => m.MedAuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./med-layout/med-layout.module').then((m) => m.MedLayoutModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
