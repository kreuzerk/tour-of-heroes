import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  standalone: true,
  selector: 'toh-hero-editor',
  template: `<h1>Hero Editor</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroEditorComponent {}
