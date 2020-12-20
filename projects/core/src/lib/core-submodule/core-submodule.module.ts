import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreSubmoduleRoutingModule } from './core-submodule-routing.module';
import { CoreSubmoduleComponent } from './core-submodule.component';


@NgModule({
  declarations: [CoreSubmoduleComponent],
  imports: [
    CommonModule,
    CoreSubmoduleRoutingModule
  ]
})
export class CoreSubmoduleModule { }
