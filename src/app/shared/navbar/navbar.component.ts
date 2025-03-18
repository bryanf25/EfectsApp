import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  // private router = inject(Router);

  constructor (private router:Router){}

  goUser(id: string) {
    if(!id){ return}
    this.router.navigate([ '/user' , id]);
  }
}
