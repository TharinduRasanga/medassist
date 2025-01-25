import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MedLayoutComponent} from './med-layout.component';

const routes: Routes = [{path: '', component: MedLayoutComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
