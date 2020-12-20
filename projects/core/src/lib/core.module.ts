import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
  },
  {
    path: 'submodule',
    loadChildren: () =>
      import('./core-submodule/core-submodule.module').then(
        (m) => m.CoreSubmoduleModule
      ),
  },
];

@NgModule({
  declarations: [CoreComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [CoreComponent],
})
export class CoreModule {}
