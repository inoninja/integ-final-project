import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.page.html',
  styleUrls: ['./developers.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class DevelopersPage {
  developers = [
    {
      name: 'Athena Gabrielle Nagaño',
      role: 'Developer',
      bio: 'A fullstack web developer with a knack for creating dynamic and user-friendly web applications.'
    },
    {
      name: 'Yeshua Dwaine F. Farro',
      role: 'Co-Developer',
      bio: 'An aspiring data scientist and machine learning engineer with a passion for leveraging data to drive impactful decisions and innovations.'
    }
  ];

  constructor() {}
}
