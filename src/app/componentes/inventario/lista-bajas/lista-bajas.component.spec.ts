import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBajasComponent } from './lista-bajas.component';

describe('ListaBajasComponent', () => {
  let component: ListaBajasComponent;
  let fixture: ComponentFixture<ListaBajasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBajasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
