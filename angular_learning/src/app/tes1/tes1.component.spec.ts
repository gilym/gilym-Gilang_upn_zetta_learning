import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tes1Component } from './tes1.component';

describe('Tes1Component', () => {
  let component: Tes1Component;
  let fixture: ComponentFixture<Tes1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tes1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
