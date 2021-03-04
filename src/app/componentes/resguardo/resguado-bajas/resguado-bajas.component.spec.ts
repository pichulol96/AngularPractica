import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResguadoBajasComponent } from './resguado-bajas.component';

describe('ResguadoBajasComponent', () => {
  let component: ResguadoBajasComponent;
  let fixture: ComponentFixture<ResguadoBajasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResguadoBajasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResguadoBajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
