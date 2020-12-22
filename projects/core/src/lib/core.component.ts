import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-core',
  template: `
    <p>
      component-from-a-lazy-loaded-library-module-works!
    </p>
  `,
  styles: [
  ]
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
