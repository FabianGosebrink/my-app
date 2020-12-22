import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreLazyLoadedSubmoduleComponent } from './core-lazy-loaded-submodule.component';

const routes: Routes = [{
  path: '',
  component: CoreLazyLoadedSubmoduleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreLazyLoadedSubmoduleRoutingModule { }
