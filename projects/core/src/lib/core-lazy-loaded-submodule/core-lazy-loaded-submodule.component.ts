import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-core-submodule',
  templateUrl: './core-lazy-loaded-submodule.component.html',
  styleUrls: ['./core-lazy-loaded-submodule.component.scss']
})
export class CoreLazyLoadedSubmoduleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
