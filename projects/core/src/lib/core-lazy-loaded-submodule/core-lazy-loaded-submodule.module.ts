import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreLazyLoadedSubmoduleRoutingModule } from './core-lazy-loaded-submodule-routing.module';
import { CoreLazyLoadedSubmoduleComponent } from './core-lazy-loaded-submodule.component';


@NgModule({
  declarations: [CoreLazyLoadedSubmoduleComponent],
  imports: [
    CommonModule,
    CoreLazyLoadedSubmoduleRoutingModule
  ]
})
export class CoreLazyLoadedSubmoduleModule { }
