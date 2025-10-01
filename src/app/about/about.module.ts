import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        loadComponent: () => import('./about.page').then(m => m.AboutPage)
      }
    ])
  ]
})
export class AboutPageModule {}
