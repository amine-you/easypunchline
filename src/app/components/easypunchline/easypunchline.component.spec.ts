import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasypunchlineComponent } from './easypunchline.component';

describe('EasypunchlineComponent', () => {
  let component: EasypunchlineComponent;
  let fixture: ComponentFixture<EasypunchlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasypunchlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasypunchlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
