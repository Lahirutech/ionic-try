import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomHomePageRoutingModule } from './custom-home-routing.module';

import { CustomHomePage } from './custom-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomHomePageRoutingModule
  ],
  declarations: [CustomHomePage]
})
export class CustomHomePageModule {}
