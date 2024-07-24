import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CompleteAppsComponent } from "./complete-apps/complete-apps.component";
import { SmallProjectsComponent } from "./small-projects/small-projects.component";
import { TitleComponent } from "./title/title.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CompleteAppsComponent, SmallProjectsComponent, TitleComponent, RouterModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {

  constructor(private router: Router){

  }

  NavToWorks(){
    this.router.navigate(['/works']).then( () => {
      const element = document.getElementById('complete');
      if (element) {
        element.scrollIntoView( {behavior: 'smooth'} );
      }
    });
  }
}
