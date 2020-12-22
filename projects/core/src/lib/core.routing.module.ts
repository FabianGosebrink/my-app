import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';

export const coreRoutes: Routes = [
  {
    path: '',
    component: CoreComponent,
  },
  {
    path: 'submodule',
    loadChildren: () =>
      import('./core-lazy-loaded-submodule/core-lazy-loaded-submodule.module').then(
        (m) => m.CoreLazyLoadedSubmoduleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(coreRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
