import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroInventarioComponent } from './form-registro-inventario.component';

describe('FormRegistroInventarioComponent', () => {
  let component: FormRegistroInventarioComponent;
  let fixture: ComponentFixture<FormRegistroInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegistroInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistroInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
