import { CoreRoutingModule } from './core.routing.module';
import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
@NgModule({
  declarations: [CoreComponent],
  imports:[CoreRoutingModule],
  exports: [CoreComponent],
})
export class CoreModule {}
