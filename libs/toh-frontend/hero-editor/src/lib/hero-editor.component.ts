import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {map} from "rxjs";

@Component({
  standalone: true,
  selector: 'toh-hero-editor',
  template: `<h1>Hero Editor</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroEditorComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id')
      )
    ).subscribe(console.log)
  }
}
