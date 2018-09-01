import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const MATERIAL_MODULES = [
  CommonModule,
];


@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})

export class MaterialModule { }
