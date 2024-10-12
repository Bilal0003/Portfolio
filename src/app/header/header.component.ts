import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  /* @ViewChild('scrollTarget') scrollTarget: ElementRef; */

  /* scrollToElement() {
    this.scrollTarget.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } */

  HomeSections: String[] = ['home', 'works', 'about-me', 'contacts'];

  getSectionRoute(section: String) {
    return './' + section;
  }

  ScrollToSection(section: String) {}
}
