import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEasypunchComponent } from './footer-easypunch.component';

describe('FooterEasypunchComponent', () => {
  let component: FooterEasypunchComponent;
  let fixture: ComponentFixture<FooterEasypunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterEasypunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterEasypunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
