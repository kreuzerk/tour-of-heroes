import {Route} from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'heroes-list',
    loadComponent: () => import('@tour-of-heroes/toh-frontend/hero-list')
      .then(c => c.HeroListComponent)
  },
  {
    path: 'hero-editor/:id',
    loadComponent: () => import('@tour-of-heroes/toh-frontend/hero-editor')
      .then(c => c.HeroEditorComponent)
  },
  {path: '', pathMatch: 'full', redirectTo: 'heroes-list'},
];
