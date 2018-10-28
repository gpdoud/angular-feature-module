import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';
import { MenuListComponent } from './menu-list.component';

@NgModule({
  imports: [
    CommonModule
    ,FormsModule
    ,RouterModule
  ]
  ,exports: [
  	MenuComponent
  	,MenuListComponent
  ]
  ,declarations: [
  	MenuComponent
  	,MenuListComponent
  ]
})
export class MenuModule { }
