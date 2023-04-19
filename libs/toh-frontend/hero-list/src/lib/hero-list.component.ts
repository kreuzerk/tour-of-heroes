import {ChangeDetectionStrategy, Component, inject, OnInit} from "@angular/core";

import {HeroService} from "@tour-of-heroes/toh-frontend/core";
import {Observable} from "rxjs";
import {AsyncPipe, NgFor} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'toh-hero-list',
  template: `
    <div
      *ngFor="let hero of heroes$ | async"
      class="p-2 bg-slate-900 text-white mb-2"
      routerLink="/hero-editor/{{hero.id}}"
      >
      {{hero.name}}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgFor,
    AsyncPipe,
    RouterLink
  ]
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<never> | undefined;
  private heroSerivce = inject(HeroService);

  ngOnInit(): void {
    this.heroes$ = this.heroSerivce.getHeroes();
  }
}
