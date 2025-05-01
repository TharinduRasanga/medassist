import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TrimPipePipe} from './trim-pipe.pipe';


@NgModule({
  declarations: [TrimPipePipe],
  imports: [
    CommonModule,
  ],
  exports: [TrimPipePipe]
})
export class TrimPipeModule {
}
