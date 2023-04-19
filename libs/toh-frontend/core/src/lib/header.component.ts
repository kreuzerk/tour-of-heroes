import {ChangeDetectionStrategy, Component} from "@angular/core";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  standalone: true,
  selector: 'toh-header',
  template: `
    <nav class="h-12 bg-blue-900 text-white flex items-center p-4">
      <a class="pr-2" routerLink="/heroes-list" routerLinkActive="underline">List</a>
      <a routerLink="/hero-editor" routerLinkActive="underline">Editor</a>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    RouterLinkActive
  ]
})
export class HeaderComponent {}
