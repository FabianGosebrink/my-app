import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'lazy-loading',
    loadChildren: () =>
      import('./lazy-loading/lazy-loading.module').then(
        (m) => m.LazyLoadingModule
      ),
  },
  {
    path: 'core',
    loadChildren: () =>
      import('core').then(
        (m) => {
          return m.CoreModule;
        }
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
