import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from '../pages/main-page.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';




@NgModule({
  declarations:[
    MainPageComponent,
    ListComponent,
    FormComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports:[
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
