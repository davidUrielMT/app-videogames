import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-videogames';

  constructor(private router: Router) {}

  // //Checar metodo
  // onGoToFinance() {
  //   this.router.navigate(['/', 'finance', 'income']);
  // }

}
