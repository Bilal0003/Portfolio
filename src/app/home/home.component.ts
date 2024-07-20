import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { BiblioComponent } from './biblio/biblio.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { QuotesComponent } from './quotes/quotes.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, BiblioComponent, ContactsComponent, ProjectsComponent, SkillsComponent, QuotesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
