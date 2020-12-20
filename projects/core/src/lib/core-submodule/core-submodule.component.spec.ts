import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreSubmoduleComponent } from './core-submodule.component';

describe('CoreSubmoduleComponent', () => {
  let component: CoreSubmoduleComponent;
  let fixture: ComponentFixture<CoreSubmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreSubmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreSubmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
