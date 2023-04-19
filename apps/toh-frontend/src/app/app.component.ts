import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {HeaderComponent} from "@tour-of-heroes/toh-frontend/core";

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'tour-of-heroes-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'toh-frontend';
}
