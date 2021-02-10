import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAdmiComponent } from './panel-admi.component';

describe('PanelAdmiComponent', () => {
  let component: PanelAdmiComponent;
  let fixture: ComponentFixture<PanelAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelAdmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
